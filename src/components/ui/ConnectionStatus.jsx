import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StatusIndicator = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 1000;
  transition: all 0.3s ease;
  
  ${props => props.$status === 'connected' && `
    background: #2ed573;
    color: white;
  `}
  
  ${props => props.$status === 'disconnected' && `
    background: #ff4757;
    color: white;
  `}
  
  ${props => props.$status === 'checking' && `
    background: #ffa502;
    color: white;
  `}
`;

const ConnectionStatus = () => {
  const [status, setStatus] = useState('checking');
  const [lastChecked, setLastChecked] = useState(null);

  const checkConnection = async () => {
    try {
      setStatus('checking');
      const response = await fetch('http://localhost:5001/api/health', {
        method: 'GET',
        timeout: 5000
      });
      
      if (response.ok) {
        setStatus('connected');
      } else {
        setStatus('disconnected');
      }
    } catch (error) {
      setStatus('disconnected');
    }
    setLastChecked(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    checkConnection();
    
    // Check connection every 30 seconds
    const interval = setInterval(checkConnection, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusText = () => {
    switch (status) {
      case 'connected':
        return '🟢 Backend Connected';
      case 'disconnected':
        return '🔴 Backend Disconnected';
      case 'checking':
        return '🟡 Checking Connection...';
      default:
        return '❓ Unknown Status';
    }
  };

  const handleClick = () => {
    checkConnection();
  };

  return (
    <StatusIndicator 
      $status={status} 
      onClick={handleClick}
      title={`Last checked: ${lastChecked || 'Never'}\nClick to refresh`}
    >
      {getStatusText()}
    </StatusIndicator>
  );
};

export default ConnectionStatus;