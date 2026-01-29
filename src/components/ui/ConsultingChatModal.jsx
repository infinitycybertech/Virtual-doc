import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
  max-width: 550px;
  max-height: 90vh;
  height: auto;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    min-height: 70vh;
    margin: 0.5rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    max-height: 100vh;
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
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DoctorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url('/src/assets/images/doctor1.jpg');
  background-size: cover;
  background-position: center;
  border: 2px solid var(--primary);
`;

const DoctorInfo = styled.div``;

const DoctorName = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: var(--text-primary);
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.online ? '#22c55e' : '#94a3b8'};
`;

const StatusText = styled.span`
  font-size: 0.8rem;
  color: ${props => props.online ? '#22c55e' : '#94a3b8'};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-secondary);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--text-primary);
  }
`;

const ChatBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 300px;
  max-height: calc(90vh - 180px);
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    max-height: calc(95vh - 160px);
    min-height: 250px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    max-height: calc(100vh - 140px);
    min-height: calc(100vh - 140px);
  }
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }
`;

const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: ${fadeIn} 0.3s ease forwards;
  
  ${props => props.isUser ? 'align-items: flex-end;' : 'align-items: flex-start;'}
`;

const MessageBubble = styled.div`
  max-width: 75%;
  padding: 1rem;
  border-radius: ${props => props.isUser ? '18px 18px 0 18px' : '18px 18px 18px 0'};
  background-color: ${props => props.isUser ? 'var(--primary)' : '#f1f5f9'};
  color: ${props => props.isUser ? 'white' : 'var(--text-primary)'};
  position: relative;

  &:first-child {
    margin-top: 0.5rem;
  }
`;

const MessageTime = styled.div`
  font-size: 0.7rem;
  color: ${props => props.isUser ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-secondary)'};
  text-align: right;
  margin-top: 0.25rem;
`;

const MessageSender = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
`;

const ChatFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const MessageForm = styled.form`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const MessageInput = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 30px;
  font-size: 0.95rem;
  min-width: 0; /* Important for flex shrinking */
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.15);
  }
`;

const SendButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
`;

const StatusBanner = styled.div`
  padding: 0.75rem;
  background-color: ${props => props.online ? 'rgba(34, 197, 94, 0.1)' : 'rgba(148, 163, 184, 0.1)'};
  color: ${props => props.online ? '#22c55e' : '#94a3b8'};
  text-align: center;
  font-size: 0.9rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const TypingIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #f1f5f9;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  gap: 0.5rem;
  align-self: flex-start;
`;

const TypingDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary);
  opacity: 0.6;
  
  &:nth-child(1) {
    animation: pulse 1.3s infinite ease-in-out;
  }
  
  &:nth-child(2) {
    animation: pulse 1.3s infinite ease-in-out 0.2s;
  }
  
  &:nth-child(3) {
    animation: pulse 1.3s infinite ease-in-out 0.4s;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.3);
      opacity: 1;
    }
  }
`;

const initialMessages = [
  {
    id: 1,
    sender: 'Dr. Sarah Johnson',
    text: 'Hello! How can I help you today?',
    time: '10:30 AM',
    isUser: false,
  },
];

const ConsultingChatModal = ({ isOpen, onClose, doctorName = "Dr. Sarah Johnson", online = true }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const userMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    if (online) {
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        
        const doctorMessage = {
          id: messages.length + 2,
          sender: doctorName,
          text: getAutoResponse(newMessage),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isUser: false,
        };
        
        setMessages(prevMessages => [...prevMessages, doctorMessage]);
      }, 2000);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  const getAutoResponse = (message) => {
    const responses = [
      "Thank you for your message. Based on what you've mentioned, I'd recommend scheduling a video consultation to discuss this further.",
      "I understand your concern. This is something we should look at more closely. Would you prefer a morning or afternoon appointment?",
      "Thanks for sharing that information. I'd like to ask a few more questions about your symptoms to better understand the situation.",
      "I appreciate you reaching out. This sounds like something we should address soon. Let me know if you're available for a consultation this week.",
      "Thank you for the details. To provide you with the best advice, I'd need to conduct a proper examination. Shall we schedule an appointment?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <ModalHeader>
              <HeaderContent>
                <DoctorAvatar />
                <DoctorInfo>
                  <DoctorName>{doctorName}</DoctorName>
                  <StatusIndicator>
                    <StatusDot online={online} />
                    <StatusText online={online}>{online ? 'Online' : 'Offline'}</StatusText>
                  </StatusIndicator>
                </DoctorInfo>
              </HeaderContent>
              <CloseButton onClick={onClose}>
                <i className="fas fa-times"></i>
              </CloseButton>
            </ModalHeader>
            
            <ChatBody>
              {!online && (
                <StatusBanner online={false}>
                  <i className="fas fa-clock mr-2"></i> 
                  {doctorName} is currently offline. Leave a message and they will respond when available.
                </StatusBanner>
              )}
              
              {messages.map((message) => (
                <MessageGroup key={message.id} isUser={message.isUser}>
                  {!message.isUser && <MessageSender>{message.sender}</MessageSender>}
                  <MessageBubble isUser={message.isUser}>
                    {message.text}
                    <MessageTime isUser={message.isUser}>{message.time}</MessageTime>
                  </MessageBubble>
                </MessageGroup>
              ))}
              
              {isTyping && (
                <TypingIndicator>
                  <TypingDot />
                  <TypingDot />
                  <TypingDot />
                </TypingIndicator>
              )}
              
              <div ref={messagesEndRef} />
            </ChatBody>
            
            <ChatFooter>
              <MessageForm onSubmit={handleSubmit}>
                <MessageInput
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <SendButton type="submit">
                  <i className="fas fa-paper-plane mr-1"></i> Send
                </SendButton>
              </MessageForm>
            </ChatFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ConsultingChatModal;
