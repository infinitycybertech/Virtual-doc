import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.3); opacity: 1; }
`;

// Modal Overlay
const ChatModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  padding: 1rem;
`;

// Start Modal
const StartModalContainer = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const StartModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f1f5f9;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e2e8f0;
    color: #334155;
  }
`;

const StartModalIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #1E88E5 0%, #1565C0 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(30, 136, 229, 0.3);
`;

const StartModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #1e293b;
  text-align: center;
  margin-bottom: 0.75rem;
  font-weight: 700;
`;

const StartModalSubtitle = styled.p`
  color: #64748b;
  text-align: center;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const StartModalInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #1e293b;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #1E88E5;
    box-shadow: 0 0 0 4px rgba(30, 136, 229, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const StartModalButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #1E88E5 0%, #1565C0 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(30, 136, 229, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// Chat Modal
const ChatModalContainer = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border-radius: 24px;
  width: 100%;
  max-width: 480px;
  height: 600px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    height: 80vh;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }
`;

const ChatHeader = styled.div`
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, #1E88E5 0%, #1565C0 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

const ChatHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

const DoctorAvatarChat = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff 0%, #e3f2fd 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #1E88E5;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const DoctorNameChat = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ChatStatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.25rem;
`;

const StatusDotChat = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4ade80;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
`;

const StatusTextChat = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

const ChatCloseBtn = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
  }
`;

const ChatBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f8fafc;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
`;

const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  animation: ${fadeIn} 0.3s ease forwards;
  align-items: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 0.875rem 1.125rem;
  border-radius: ${props => props.$isUser ? '20px 20px 4px 20px' : '20px 20px 20px 4px'};
  background: ${props => props.$isUser 
    ? 'linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)' 
    : 'white'};
  color: ${props => props.$isUser ? 'white' : '#1e293b'};
  font-size: 0.9375rem;
  line-height: 1.5;
  box-shadow: ${props => props.$isUser 
    ? '0 4px 12px rgba(30, 136, 229, 0.3)' 
    : '0 2px 8px rgba(0, 0, 0, 0.06)'};
  position: relative;
`;

const MessageTime = styled.span`
  display: block;
  font-size: 0.6875rem;
  color: ${props => props.$isUser ? 'rgba(255, 255, 255, 0.7)' : '#94a3b8'};
  margin-top: 0.375rem;
  text-align: ${props => props.$isUser ? 'right' : 'left'};
`;

const MessageSender = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 0.25rem;
  margin-left: 0.5rem;
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.875rem 1.125rem;
  background: white;
  border-radius: 20px 20px 20px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  width: fit-content;
`;

const TypingDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #1E88E5;
  animation: ${pulse} 1.4s ease-in-out infinite;
  
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
`;

const ChatFooter = styled.div`
  padding: 1rem 1.25rem;
  background: white;
  border-top: 1px solid #e2e8f0;
  flex-shrink: 0;
`;

const ChatInputForm = styled.form`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  font-size: 0.9375rem;
  background: #f8fafc;
  color: #1e293b;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #1E88E5;
    background: white;
    box-shadow: 0 0 0 4px rgba(30, 136, 229, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const ChatSendBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1E88E5 0%, #1565C0 100%);
  border: none;
  color: white;
  font-size: 1.125rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(30, 136, 229, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DemoBadge = styled.div`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  font-size: 0.6875rem;
  padding: 0.25rem 0.625rem;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0.5rem;
  display: inline-block;
`;

// Demo chatbot responses
const demoBotResponses = [
  "Hello! I'm Dr. Sarah Johnson's virtual assistant. How can I help you today?",
  "I understand your concern. Could you tell me more about when these symptoms started?",
  "Thank you for sharing that. Based on what you've described, I'd recommend scheduling a video consultation to discuss this further.",
  "That's helpful information. Have you experienced any similar symptoms in the past?",
  "I'd be happy to help you schedule an appointment. Dr. Sarah Johnson has availability this week. Would you prefer a morning or afternoon slot?",
  "Your health is our priority. Is there anything else you'd like to discuss before we schedule your consultation?",
  "Great question! Our virtual consultations are just as thorough as in-person visits. You'll have dedicated time with the doctor to discuss all your concerns."
];

const DemoChatModal = ({ isOpen, onClose, doctorName = "Dr. Sarah Johnson" }) => {
  const [showStartModal, setShowStartModal] = useState(true);
  const [showChatModal, setShowChatModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);
  const chatEndRef = useRef(null);

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setShowStartModal(true);
      setShowChatModal(false);
      setUserName('');
      setChatMessages([]);
      setNewMessage('');
      setIsTyping(false);
      setResponseIndex(0);
    }
  }, [isOpen]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  // Start consultation handler
  const handleStartConsultation = () => {
    if (userName.trim()) {
      setShowStartModal(false);
      setShowChatModal(true);
      // Add initial bot message
      setChatMessages([{
        id: 1,
        text: `Welcome ${userName}! I'm ${doctorName}. Thank you for choosing our virtual consultation service. How can I assist you today?`,
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  };

  // Send message handler
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMsg = {
      id: chatMessages.length + 1,
      text: newMessage,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: chatMessages.length + 2,
        text: demoBotResponses[responseIndex % demoBotResponses.length],
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, botResponse]);
      setResponseIndex(prev => prev + 1);
    }, 1500 + Math.random() * 1000);
  };

  // Close handler
  const handleClose = () => {
    setShowChatModal(false);
    setShowStartModal(true);
    setChatMessages([]);
    setResponseIndex(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Start Modal */}
      {showStartModal && (
        <ChatModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <StartModalContainer
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <StartModalClose onClick={handleClose}>
              <i className="fas fa-times"></i>
            </StartModalClose>
            
            <StartModalIcon>
              <i className="fas fa-user-md"></i>
            </StartModalIcon>
            
            <StartModalTitle>Start Medical Consultation</StartModalTitle>
            <StartModalSubtitle>
              Enter your name to begin a secure chat consultation with our medical team.
            </StartModalSubtitle>
            
            <div style={{ marginBottom: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: '500' }}>
              Your Name:
            </div>
            <StartModalInput
              type="text"
              placeholder="Enter your full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleStartConsultation()}
            />
            
            <StartModalButton 
              onClick={handleStartConsultation}
              disabled={!userName.trim()}
            >
              <i className="fas fa-play-circle"></i>
              Start Consultation
            </StartModalButton>
            
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem',
              background: '#f8fafc',
              borderRadius: '12px',
              fontSize: '0.8125rem',
              color: '#64748b',
              lineHeight: '1.6'
            }}>
              <i className="fas fa-info-circle" style={{ marginRight: '0.5rem', color: '#1E88E5' }}></i>
              Your consultation will be with <strong>{doctorName}</strong>. All conversations are secure and confidential.
            </div>
          </StartModalContainer>
        </ChatModalOverlay>
      )}

      {/* Chat Modal */}
      {showChatModal && (
        <ChatModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <ChatModalContainer
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <ChatHeader>
              <ChatHeaderInfo>
                <DoctorAvatarChat>
                  <i className="fas fa-user-md"></i>
                </DoctorAvatarChat>
                <div>
                  <DoctorNameChat>Chat with {doctorName}</DoctorNameChat>
                  <ChatStatusBadge>
                    <StatusDotChat />
                    <StatusTextChat>Connected</StatusTextChat>
                  </ChatStatusBadge>
                </div>
              </ChatHeaderInfo>
              <ChatCloseBtn onClick={handleClose}>
                <i className="fas fa-times"></i>
              </ChatCloseBtn>
            </ChatHeader>

            <ChatBody>
              <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                <DemoBadge>
                  <i className="fas fa-flask" style={{ marginRight: '0.25rem' }}></i>
                  Demo Mode - Experience our consultation chat interface
                </DemoBadge>
              </div>

              {chatMessages.map((msg) => (
                <MessageGroup key={msg.id} $isUser={msg.isUser}>
                  {!msg.isUser && <MessageSender>{doctorName}</MessageSender>}
                  <MessageBubble $isUser={msg.isUser}>
                    {msg.text}
                    <MessageTime $isUser={msg.isUser}>{msg.time}</MessageTime>
                  </MessageBubble>
                </MessageGroup>
              ))}

              {isTyping && (
                <MessageGroup $isUser={false}>
                  <MessageSender>{doctorName}</MessageSender>
                  <TypingIndicator>
                    <TypingDot />
                    <TypingDot />
                    <TypingDot />
                  </TypingIndicator>
                </MessageGroup>
              )}

              <div ref={chatEndRef} />
            </ChatBody>

            <ChatFooter>
              <ChatInputForm onSubmit={handleSendMessage}>
                <ChatInput
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <ChatSendBtn type="submit" disabled={!newMessage.trim()}>
                  <i className="fas fa-paper-plane"></i>
                </ChatSendBtn>
              </ChatInputForm>
            </ChatFooter>
          </ChatModalContainer>
        </ChatModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default DemoChatModal;
