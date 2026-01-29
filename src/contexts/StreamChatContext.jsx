import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { chatClient } from '../utils/streamChat';

const StreamChatContext = createContext();

export const useStreamChat = () => {
  const context = useContext(StreamChatContext);
  if (!context) {
    throw new Error('useStreamChat must be used within a StreamChatProvider');
  }
  return context;
};

export const StreamChatProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [user, setUser] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  // Connect user to Stream Chat using backend token generation
  const connect = useCallback(async (patientName) => {
    if (isConnecting || isConnected) return;
    
    setIsConnecting(true);
    setError(null);
    
    try {
      // Get token from backend - backend will generate userId
      const response = await fetch('https://doctor-portal-server-beige.vercel.app/api/stream-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientName }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get authentication token');
      }
      
      const { token, userId } = await response.json();
      
      const user = {
        id: userId, // Use the userId returned from backend
        name: patientName || 'Patient',
        image: `https://getstream.io/random_png/?id=${userId}&name=${patientName}`,
        role: 'user',
      };

      await chatClient.connectUser(user, token);
      
      setClient(chatClient);
      setUser(chatClient.user);
      setIsConnected(true);
      console.log('Successfully connected to Stream Chat:', chatClient.user);
    } catch (err) {
      console.error('Failed to connect to Stream Chat:', err);
      setError(err.message);
    } finally {
      setIsConnecting(false);
    }
  }, [isConnecting, isConnected]);

  // Disconnect user from Stream Chat
  const disconnect = useCallback(async () => {
    if (!isConnected) return;
    
    try {
      await chatClient.disconnectUser();
      setClient(null);
      setUser(null);
      setIsConnected(false);
      console.log('Successfully disconnected from Stream Chat');
    } catch (err) {
      console.error('Failed to disconnect from Stream Chat:', err);
      setError(err.message);
    }
  }, [isConnected]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isConnected) {
        disconnect();
      }
    };
  }, [disconnect, isConnected]);

  // Listen for connection state changes
  useEffect(() => {
    if (client) {
      const handleConnectionChanged = (event) => {
        console.log('Connection state changed:', event);
        setIsConnected(event.online);
      };

      const handleConnectionRecovered = () => {
        console.log('Connection recovered');
        setIsConnected(true);
        setError(null);
      };

      client.on('connection.changed', handleConnectionChanged);
      client.on('connection.recovered', handleConnectionRecovered);

      return () => {
        client.off('connection.changed', handleConnectionChanged);
        client.off('connection.recovered', handleConnectionRecovered);
      };
    }
  }, [client]);

  const value = {
    client,
    user,
    isConnecting,
    isConnected,
    error,
    connect,
    disconnect
  };

  return (
    <StreamChatContext.Provider value={value}>
      {children}
    </StreamChatContext.Provider>
  );
};