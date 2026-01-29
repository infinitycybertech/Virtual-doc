import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Chat, Channel, ChannelHeader, MessageList, MessageInput, Window, Thread, ChannelList } from 'stream-chat-react';
import { useStreamChat } from '../../contexts/StreamChatContext';
import { createConsultationChannel, DEMO_USERS } from '../../utils/streamChat';
import Button from './Button';
import 'stream-chat-react/dist/css/v2/index.css';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  padding: 1rem;
`;

const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  max-width: 900px;
  height: 85vh;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  
  @media (max-width: 1024px) {
    max-width: 95vw;
    height: 90vh;
  }
  
  @media (max-width: 768px) {
    max-width: 95vw;
    height: 95vh;
    min-height: 70vh;
    margin: 0.5rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    height: 100vh;
    min-height: 100vh;
    margin: 0;
    border-radius: 0;
  }
`;

const ModalHeader = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(135deg, var(--primary) 0%, #2563eb 100%);
  color: white;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DoctorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.$image ? `url(${props.$image})` : 'var(--accent)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DoctorName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const DoctorStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$online ? '#10b981' : '#6b7280'};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  min-height: 0; /* Important for flex children */
  
  .str-chat {
    height: 100%;
    width: 100%;
  }
  
  .str-chat__container {
    height: 100%;
  }
  
  .str-chat__channel {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .str-chat__message-list {
    overflow-y: auto !important;
    max-height: none !important;
  }
  
  .str-chat__message-input {
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    .str-chat__header {
      padding: 0.75rem !important;
    }
    
    .str-chat__message-list {
      padding: 0.5rem !important;
    }
    
    .str-chat__message-input {
      padding: 0.75rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .str-chat__header {
      padding: 0.5rem !important;
      font-size: 0.9rem !important;
    }
    
    .str-chat__message-list {
      padding: 0.25rem !important;
    }
    
    .str-chat__message-input {
      padding: 0.5rem !important;
    }
    
    .str-chat__input {
      font-size: 0.9rem !important;
    }
  }
  
  .str-chat__main-panel {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .str-chat__channel-header {
    display: none;
  }
  
  .str-chat__message-list {
    flex: 1;
    padding: 1rem;
  }
  
  .str-chat__message-input {
    padding: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
`;

const ConnectionStatus = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  background-color: ${props => props.$isConnected ? '#f0fdf4' : '#fef2f2'};
  color: ${props => props.$isConnected ? '#16a34a' : '#dc2626'};
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const ConnectButtons = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
  
  h3 {
    margin: 0 0 1rem 0;
    color: var(--text-primary);
    text-align: center;
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
  
  p {
    margin: 0 0 1.5rem 0;
    color: var(--text-secondary);
    text-align: center;
    line-height: 1.6;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin: 0 0 1rem 0;
    }
  }
  
  .input-group {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1rem;
    
    @media (max-width: 480px) {
      max-width: 100%;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
      font-weight: 500;
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
    
    input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.2s ease;
      
      @media (max-width: 480px) {
        padding: 0.6rem;
        font-size: 0.9rem;
      }
      
      &:focus {
        outline: none;
        border-color: var(--primary);
      }
    }
  }
  
  .button-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
  
  .note {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-align: center;
    font-style: italic;
    margin-top: 1rem;
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const StreamChatModal = ({ isOpen, onClose, doctorName = "Dr. Sarah Johnson" }) => {
  const { client, user, isConnected, isConnecting, connect } = useStreamChat();
  const [channel, setChannel] = useState(null);
  const [error, setError] = useState(null);
  const [patientName, setPatientName] = useState('');

  // Create or get consultation channel when user is connected
  useEffect(() => {
    const initializeChannel = async () => {
      if (client && user && isConnected) {
        try {
          // Create channel with backend API
          const response = await fetch('https://doctor-portal-server-beige.vercel.app/api/create-channel', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              patientId: user.id,
              doctorId: 'dr-sarah-johnson'
            }),
          });
          
          if (!response.ok) {
            throw new Error('Failed to create channel');
          }
          
          const channelData = await response.json();
          const channelToUse = client.channel('messaging', channelData.channelId);
          
          setChannel(channelToUse);
          setError(null);
        } catch (err) {
          console.error('Error initializing channel:', err);
          setError('Failed to create consultation channel');
        }
      }
    };

    if (isOpen && client && isConnected) {
      initializeChannel();
    }
  }, [client, user, isConnected, isOpen]);

  const handleClose = () => {
    setChannel(null);
    setError(null);
    setPatientName('');
    onClose();
  };

  const handleConnectAsPatient = async () => {
    if (!patientName.trim()) {
      setError('Please enter your name');
      return;
    }
    
    try {
      await connect(patientName.trim());
    } catch (err) {
      setError('Failed to connect to chat. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <ModalContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <HeaderInfo>
                <DoctorAvatar $image={user?.image}>
                  {!user?.image && (user?.name?.[0] || 'D')}
                </DoctorAvatar>
                <DoctorInfo>
                  <DoctorName>
                    {isConnected ? `Chat with ${user?.role === 'doctor' ? 'Patient' : doctorName}` : 'Medical Consultation'}
                  </DoctorName>
                  <DoctorStatus>
                    <StatusDot $online={isConnected} />
                    {isConnected ? 'Connected' : 'Connecting...'}
                  </DoctorStatus>
                </DoctorInfo>
              </HeaderInfo>
              <CloseButton onClick={handleClose}>
                ×
              </CloseButton>
            </ModalHeader>

            {!isConnected && (
              <ConnectButtons>
                <h3>Start Medical Consultation</h3>
                <p>Enter your name to begin a secure chat consultation with our medical team.</p>
                
                <div className="input-group">
                  <label htmlFor="patientName">Your Name:</label>
                  <input
                    id="patientName"
                    type="text"
                    placeholder="Enter your full name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleConnectAsPatient()}
                  />
                </div>
                
                <div className="button-group">
                  <Button 
                    onClick={handleConnectAsPatient} 
                    disabled={isConnecting || !patientName.trim()}
                    variant="primary"
                  >
                    {isConnecting ? 'Connecting...' : 'Start Consultation'}
                  </Button>
                </div>
                
                <div className="note">
                  Your consultation will be with {doctorName}. All conversations are secure and confidential.
                </div>
                
                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
              </ConnectButtons>
            )}

            {isConnected && (
              <ConnectionStatus $isConnected={isConnected}>
                {isConnected 
                  ? `Connected as ${user?.name} (${user?.role})` 
                  : 'Connecting to chat service...'
                }
              </ConnectionStatus>
            )}

            {client && isConnected && channel && (
              <ChatContainer>
                <Chat client={client}>
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>
                    <Thread />
                  </Channel>
                </Chat>
              </ChatContainer>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default StreamChatModal;