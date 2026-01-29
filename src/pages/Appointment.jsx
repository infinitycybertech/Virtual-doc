import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import MedicalModelViewer from '../components/3d/MedicalModelViewer';
import GoogleMapsNearbyDoctors from '../components/ui/GoogleMapsNearbyDoctors';
import DemoChatModal from '../components/ui/DemoChatModal';
import { useTranslations } from '../hooks/useTranslations';

const AppointmentContainer = styled.div`
  padding-top: 2rem;
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
  min-width: 0;
  box-sizing: border-box;
  position: relative;
  
  * {
    box-sizing: border-box;
    max-width: 100% !important;
    overflow-x: hidden;
  }
  
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 100vw;
    max-width: 100vw;
    min-width: 320px;
    
    * {
      max-width: 100vw !important;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  }
  
  @media (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
  
  @media (max-width: 480px) {
    padding: 0;
    margin: 0;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    margin: 0;
    width: 100vw;
    max-width: 100vw;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem 0.25rem;
    min-height: auto;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.1rem;
    min-height: auto;
  }
`;

const HeroModelContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const AppointmentFormSection = styled.section`
  padding: 5rem 0;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;
const AppointmentContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
    max-width: 100vw;
    width: 100vw;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 0 0.25rem;
    max-width: calc(100vw - 10px);
    width: calc(100vw - 10px);
    margin: 0 auto;
  }
  
  @media (max-width: 576px) {
    gap: 0.25rem;
    padding: 0 0.1rem;
    max-width: calc(100vw - 5px);
    width: calc(100vw - 5px);
  }
  
  @media (max-width: 480px) {
    gap: 0.1rem;
    padding: 0;
    max-width: 100vw;
    width: 100vw;
  }
`;

const FormContainer = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 1024px) {
    order: 2;
    padding: 1rem;
    max-width: 100%;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    margin: 0;
    border-radius: 8px;
    max-width: calc(100% - 10px);
    width: calc(100% - 10px);
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem;
    border-radius: 4px;
    max-width: calc(100% - 5px);
    width: calc(100% - 5px);
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem;
    border-radius: 2px;
    max-width: 100%;
    width: 100%;
    margin: 0;
  }
`;

const AppointmentTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  span {
    color: var(--primary);
  }
`;

const AppointmentForm = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1.25rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.7rem 0.85rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 0.75rem;
    font-size: 0.9rem;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.7rem 0.85rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 0.75rem;
    font-size: 0.9rem;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;
const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 120px;
  box-sizing: border-box;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.7rem 0.85rem;
    font-size: 0.95rem;
    min-height: 100px;
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 0.75rem;
    font-size: 0.9rem;
    min-height: 80px;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SideInfo = styled.div`
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 1024px) {
    order: 1;
    margin-bottom: 0.5rem;
    max-width: 100%;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    max-width: calc(100% - 10px);
    width: calc(100% - 10px);
  }
  
  @media (max-width: 576px) {
    margin-bottom: 0.25rem;
    max-width: calc(100% - 5px);
    width: calc(100% - 5px);
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.1rem;
    max-width: 100%;
    width: 100%;
  }
`;

const SideTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  span {
    color: var(--primary);
  }
`;

const SideDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
    line-height: 1.6;
  }
`;

const ModelContainer = styled.div`
  height: 400px;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 0.5rem;
    max-width: calc(100% - 10px);
    width: calc(100% - 10px);
  }
  
  @media (max-width: 576px) {
    height: 100px;
    margin-bottom: 0.25rem;
    max-width: calc(100% - 5px);
    width: calc(100% - 5px);
  }
  
  @media (max-width: 480px) {
    height: 80px;
    margin-bottom: 0.1rem;
    max-width: 100%;
    width: 100%;
  }
`;

const SelectedDoctorInfo = styled(motion.div)`
  margin-top: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  border-radius: var(--border-radius);
  border: 2px solid #1E88E5;
  box-shadow: 0 4px 20px rgba(30, 136, 229, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 0.75rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`;

const HomeVisitConfirmation = styled.div`
  color: #26C6DA;
  font-weight: bold;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(38, 198, 218, 0.1);
  border-radius: var(--border-radius);
  border-left: 4px solid #26C6DA;
`;

const InfoBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    max-width: calc(100% - 10px);
    width: calc(100% - 10px);
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
    max-width: calc(100% - 5px);
    width: calc(100% - 5px);
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    max-width: 100%;
    width: 100%;
  }
`;

const InfoBoxTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.1rem;
  }
  
  i {
    color: var(--primary);
    margin-right: 0.5rem;
    
    @media (max-width: 576px) {
      margin-right: 0.25rem;
      font-size: 0.8rem;
    }
  }
`;

const InfoBoxContent = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    line-height: 1.4;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    line-height: 1.3;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    line-height: 1.2;
    font-size: 0.8rem;
  }
`;

const AppointmentSteps = styled.div`
  margin: 3rem 0;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    margin: 0.75rem 0;
    max-width: calc(100% - 10px);
    width: calc(100% - 10px);
  }
  
  @media (max-width: 576px) {
    margin: 0.5rem 0;
    max-width: calc(100% - 5px);
    width: calc(100% - 5px);
  }
  
  @media (max-width: 480px) {
    margin: 0.25rem 0;
    max-width: 100%;
    width: 100%;
  }
`;

const StepContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.25rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 20px;
    top: 40px;
    bottom: -20px;
    width: 2px;
    background-color: rgba(30, 136, 229, 0.2);
  }
`;
const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StepContent = styled.div``;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const TabsContainer = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 0.75rem;
  }
`;

const TabButtons = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const TabButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.$active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.$active ? 'var(--primary)' : 'var(--text-secondary)'};
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
  
  &:hover {
    color: var(--primary);
  }
`;

const FAQSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 1.25rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.75rem;
    gap: 1rem;
  }
`;

const FAQItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.1rem;
  }
  
  i {
    color: var(--primary);
    margin-right: 0.8rem;
    font-size: 1.2rem;
    
    @media (max-width: 576px) {
      margin-right: 0.5rem;
      font-size: 1rem;
    }
    
    @media (max-width: 480px) {
      margin-right: 0.25rem;
      font-size: 0.9rem;
    }
  }
`;

const FAQAnswer = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 2rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
    padding-left: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
    line-height: 1.3;
    padding-left: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.2;
    padding-left: 0.5rem;
  }
`;

// Demo Chat Modal Styles
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.3); opacity: 1; }
`;

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
  box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(30, 136, 229, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DemoBanner = styled.div`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 0.625rem 1rem;
  text-align: center;
  font-size: 0.8125rem;
  color: #92400e;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  i {
    font-size: 0.875rem;
  }
`;

// Demo Map Styles
const DemoMapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(145deg, #e8f4f8 0%, #d1e7dd 100%);
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const DemoMapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
`;

const DemoMapPin = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

const MapPinIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.$selected ? '#1E88E5' : '#ef4444'};
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    transform: rotate(45deg);
  }
`;

const MapPinLabel = styled.div`
  background: white;
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1e293b;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`;

const DemoMapLegend = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 20;
`;

const LegendTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6875rem;
  color: #64748b;
  margin-bottom: 0.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const LegendDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.$color};
`;

const UserLocationPin = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
`;

const UserPinRing = styled.div`
  width: 24px;
  height: 24px;
  background: #3b82f6;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2);
`;

// Start Consultation Modal Styles
const StartChatModal = styled(motion.div)`
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

const StartChatContainer = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    margin: 1rem;
    border-radius: 20px;
  }
`;

const StartChatIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #1E88E5;
`;

const StartChatTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

const StartChatDescription = styled.p`
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const StartChatInputGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const StartChatLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const StartChatInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #1E88E5;
    box-shadow: 0 0 0 4px rgba(30, 136, 229, 0.1);
  }
`;

const StartChatButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #1E88E5 0%, #1565C0 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 136, 229, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StartChatNote = styled.p`
  font-size: 0.8125rem;
  color: #94a3b8;
  margin-top: 1rem;
  line-height: 1.5;
  
  i {
    color: #1E88E5;
    margin-right: 0.25rem;
  }
`;

const StartChatClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f1f5f9;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  color: #64748b;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e2e8f0;
    color: #1e293b;
  }
`;

// Appointment Type Cards
const AppointmentTypeCards = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const AppointmentTypeCard = styled(motion.button)`
  flex: 1;
  min-width: 140px;
  padding: 1rem 0.75rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)' 
    : 'white'};
  border: 2px solid ${props => props.$active ? '#1E88E5' : '#e2e8f0'};
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${props => props.$active 
    ? '0 8px 20px rgba(30, 136, 229, 0.3)' 
    : '0 2px 8px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    border-color: #1E88E5;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 136, 229, 0.2);
  }
  
  i {
    font-size: 1.5rem;
    color: ${props => props.$active ? 'white' : '#1E88E5'};
  }
  
  span {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${props => props.$active ? 'white' : '#374151'};
  }
  
  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: center;
    padding: 0.875rem 1rem;
    
    i {
      font-size: 1.25rem;
    }
  }
`;

const VirtualConsultationSection = styled.div`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 2px solid #bae6fd;
`;

const VirtualConsultTitle = styled.h4`
  font-size: 1.1rem;
  color: #0c4a6e;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: #1E88E5;
  }
`;

const VirtualConsultDescription = styled.p`
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const StartConsultButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #1E88E5 0%, #1565C0 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 136, 229, 0.4);
  }
`;
// Demo doctors for the map
const demoDoctorLocations = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Medicine', top: '25%', left: '35%' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Cardiology', top: '60%', left: '70%' },
  { id: 3, name: 'Dr. Emily Williams', specialty: 'Pediatrics', top: '40%', left: '20%' },
  { id: 4, name: 'Dr. James Thompson', specialty: 'Dermatology', top: '70%', left: '45%' },
];

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

const Appointment = () => {
  const { appointment: appointmentContent } = useTranslations();
  const [appointmentType, setAppointmentType] = useState("inPerson");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [homeVisitRequested, setHomeVisitRequested] = useState(false);
  
  // Demo Chat State - simplified to use the reusable component
  const [showDemoChatModal, setShowDemoChatModal] = useState(false);
  const [selectedMapDoctor, setSelectedMapDoctor] = useState(null);
  
  return (
    <AppointmentContainer>
      <HeroSection>
        <HeroModelContainer>
          <MedicalModelViewer 
            modelType="sci-fi-lab-machine"
            autoRotate={true}
            autoRotateSpeed={0.5}
            scale={2}
            position={[0, 0, 0]}
            minimalUI
            intensity={0.4}
            height="100%"
          />
        </HeroModelContainer>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {appointmentContent.HERO.title}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {appointmentContent.HERO.subtitle}
        </HeroSubtitle>
      </HeroSection>
      
      <AppointmentFormSection>
        <AppointmentContent>
          <FormContainer>
            <AppointmentTitle>
              {appointmentContent.FORM.title.split(' ').slice(0, -1).join(' ')} <span>{appointmentContent.FORM.title.split(' ').slice(-1)}</span>
            </AppointmentTitle>
            
            {/* New Appointment Type Cards */}
            <AppointmentTypeCards>
              <AppointmentTypeCard 
                $active={appointmentType === "inPerson"}
                onClick={() => setAppointmentType("inPerson")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-hospital"></i>
                <span>{appointmentContent.FORM.APPOINTMENT_TYPES.inPerson}</span>
              </AppointmentTypeCard>
              <AppointmentTypeCard 
                $active={appointmentType === "virtual"}
                onClick={() => setAppointmentType("virtual")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-video"></i>
                <span>{appointmentContent.FORM.APPOINTMENT_TYPES.virtual}</span>
              </AppointmentTypeCard>
              <AppointmentTypeCard 
                $active={appointmentType === "homeVisit"}
                onClick={() => setAppointmentType("homeVisit")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-home"></i>
                <span>{appointmentContent.FORM.APPOINTMENT_TYPES.homeVisit}</span>
              </AppointmentTypeCard>
            </AppointmentTypeCards>
            
            {/* Virtual Consultation Section */}
            {appointmentType === "virtual" && (
              <VirtualConsultationSection>
                <VirtualConsultTitle>
                  <i className="fas fa-comments"></i>
                  Start a Demo Consultation
                </VirtualConsultTitle>
                <VirtualConsultDescription>
                  Experience our virtual consultation service! Chat with our AI-powered demo to see how easy it is to connect with our medical team from anywhere.
                </VirtualConsultDescription>
                <StartConsultButton onClick={() => setShowDemoChatModal(true)}>
                  <i className="fas fa-play-circle"></i>
                  Try Demo Consultation
                </StartConsultButton>
              </VirtualConsultationSection>
            )}
            
            {/* Demo Map for In-Person */}
            {appointmentType === "inPerson" && (
              <FormGroup>
                <FormLabel>Find Nearby Clinics (Demo Map)</FormLabel>
                <DemoMapContainer>
                  <DemoMapOverlay />
                  
                  <DemoMapLegend>
                    <LegendTitle>Map Legend</LegendTitle>
                    <LegendItem>
                      <LegendDot $color="#3b82f6" />
                      Your Location
                    </LegendItem>
                    <LegendItem>
                      <LegendDot $color="#ef4444" />
                      Available Clinics
                    </LegendItem>
                    <LegendItem>
                      <LegendDot $color="#1E88E5" />
                      Selected Clinic
                    </LegendItem>
                  </DemoMapLegend>
                  
                  <UserLocationPin
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <UserPinRing />
                  </UserLocationPin>
                  
                  {demoDoctorLocations.map((doctor, index) => (
                    <DemoMapPin
                      key={doctor.id}
                      style={{ top: doctor.top, left: doctor.left }}
                      onClick={() => setSelectedMapDoctor(doctor)}
                      initial={{ scale: 0, y: -20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <MapPinIcon $selected={selectedMapDoctor?.id === doctor.id} />
                      {selectedMapDoctor?.id === doctor.id && (
                        <MapPinLabel
                          as={motion.div}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {doctor.name}
                        </MapPinLabel>
                      )}
                    </DemoMapPin>
                  ))}
                </DemoMapContainer>
                
                {selectedMapDoctor && (
                  <SelectedDoctorInfo
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong>Selected:</strong> {selectedMapDoctor.name}
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong>Specialty:</strong> {selectedMapDoctor.specialty}
                    </div>
                    <div style={{ 
                      color: '#1E88E5', 
                      fontWeight: 'bold', 
                      marginTop: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <i className="fas fa-map-marker-alt"></i>
                      Ready for in-person appointment
                    </div>
                  </SelectedDoctorInfo>
                )}
              </FormGroup>
            )}
            
            <AppointmentForm>
              <FormRow>
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.fullName.label}</FormLabel>
                  <FormInput type="text" placeholder={appointmentContent.FORM.FIELDS.fullName.placeholder} required />
                </FormGroup>
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.email.label}</FormLabel>
                  <FormInput type="email" placeholder={appointmentContent.FORM.FIELDS.email.placeholder} required />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.phone.label}</FormLabel>
                  <FormInput type="tel" placeholder={appointmentContent.FORM.FIELDS.phone.placeholder} required />
                </FormGroup>
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.dateOfBirth.label}</FormLabel>
                  <FormInput type="date" />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.preferredDate.label}</FormLabel>
                  <FormInput type="date" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.preferredTime.label}</FormLabel>
                  <FormSelect required>
                    <option value="">{appointmentContent.FORM.FIELDS.preferredTime.placeholder}</option>
                    <option value="morning">{appointmentContent.FORM.FIELDS.preferredTime.options.morning}</option>
                    <option value="afternoon">{appointmentContent.FORM.FIELDS.preferredTime.options.afternoon}</option>
                    <option value="evening">{appointmentContent.FORM.FIELDS.preferredTime.options.evening}</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>
              {appointmentType === "virtual" && (
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.platform.label}</FormLabel>
                  <FormSelect>
                    <option value="zoom">{appointmentContent.FORM.FIELDS.platform.options.zoom}</option>
                    <option value="teams">{appointmentContent.FORM.FIELDS.platform.options.teams}</option>
                    <option value="google-meet">{appointmentContent.FORM.FIELDS.platform.options.googleMeet}</option>
                    <option value="facetime">{appointmentContent.FORM.FIELDS.platform.options.facetime}</option>
                  </FormSelect>
                </FormGroup>
              )}
              
              {appointmentType === "inPerson" && (
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.nearbyDoctors}</FormLabel>
                  <GoogleMapsNearbyDoctors
                    appointmentType="inPerson"
                    onDoctorSelect={(doctor) => setSelectedDoctor(doctor)}
                    selectedDoctorId={selectedDoctor?.id}
                  />
                  {selectedDoctor && (
                    <SelectedDoctorInfo
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{ marginBottom: '0.5rem' }}>
                        <strong>{appointmentContent.FORM.DOCTOR_SELECTION.selectedDoctor}</strong> {selectedDoctor.name}
                      </div>
                      <div style={{ marginBottom: '0.5rem' }}>
                        <strong>{appointmentContent.FORM.DOCTOR_SELECTION.specialty}</strong> {selectedDoctor.specialty}
                      </div>
                      <div style={{ marginBottom: '0.5rem' }}>
                        <strong>{appointmentContent.FORM.DOCTOR_SELECTION.distance}</strong> {selectedDoctor.distance}
                      </div>
                      <div style={{ 
                        color: '#1E88E5', 
                        fontWeight: 'bold', 
                        marginTop: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <i className="fas fa-map-marker-alt"></i>
                        {appointmentContent.FORM.DOCTOR_SELECTION.inPersonConfirmation}
                      </div>
                    </SelectedDoctorInfo>
                  )}
                </FormGroup>
              )}
              
              {appointmentType === "homeVisit" && (
                <FormGroup>
                  <FormLabel>{appointmentContent.FORM.FIELDS.homeVisitDoctors}</FormLabel>
                  <GoogleMapsNearbyDoctors
                    appointmentType="homeVisit"
                    onDoctorSelect={(doctor) => setSelectedDoctor(doctor)}
                    onHomeVisitRequest={(doctor) => {
                      setSelectedDoctor(doctor);
                      setHomeVisitRequested(true);
                      alert(appointmentContent.FORM.DOCTOR_SELECTION.homeVisitAlert.replace('{doctorName}', doctor.name));
                    }}
                    selectedDoctorId={selectedDoctor?.id}
                  />
                  {selectedDoctor && (
                    <SelectedDoctorInfo
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{ marginBottom: '0.5rem' }}>
                        <strong>{appointmentContent.FORM.DOCTOR_SELECTION.selectedDoctor}</strong> {selectedDoctor.name}
                      </div>
                      <div style={{ marginBottom: '0.5rem' }}>
                        <strong>{appointmentContent.FORM.DOCTOR_SELECTION.specialty}</strong> {selectedDoctor.specialty}
                      </div>
                      <div style={{ marginBottom: homeVisitRequested ? '1rem' : '0' }}>
                        <strong>{appointmentContent.FORM.DOCTOR_SELECTION.distance}</strong> {selectedDoctor.distance}
                      </div>
                      {homeVisitRequested && (
                        <HomeVisitConfirmation>
                          <i className="fas fa-check-circle"></i>
                          {appointmentContent.FORM.DOCTOR_SELECTION.homeVisitRequested}
                        </HomeVisitConfirmation>
                      )}
                    </SelectedDoctorInfo>
                  )}
                  
                  <FormGroup style={{ marginTop: '1.5rem' }}>
                    <FormLabel>{appointmentContent.FORM.FIELDS.homeAddress.label}</FormLabel>
                    <FormTextarea 
                      placeholder={appointmentContent.FORM.FIELDS.homeAddress.placeholder}
                      required
                      rows="3"
                    />
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)', 
                      marginTop: '0.5rem' 
                    }}>
                      <i className="fas fa-info-circle mr-1"></i>
                      {appointmentContent.FORM.FIELDS.homeAddress.note}
                    </div>
                  </FormGroup>
                </FormGroup>
              )}
              
              <FormGroup>
                <FormLabel>{appointmentContent.FORM.FIELDS.reasonForVisit.label}</FormLabel>
                <FormTextarea placeholder={appointmentContent.FORM.FIELDS.reasonForVisit.placeholder}></FormTextarea>
              </FormGroup>
              
              <Button size="large" style={{ width: '100%' }}>
                <i className="fas fa-calendar-check mr-2"></i> {appointmentContent.FORM.SUBMIT_BUTTON}
              </Button>
            </AppointmentForm>
          </FormContainer>
          
          <SideInfo>
            <SideTitle>
              {appointmentContent.SIDE_INFO.title.split(' ').slice(0, -1).join(' ')} <span>{appointmentContent.SIDE_INFO.title.split(' ').slice(-1)}</span>
            </SideTitle>
            <SideDescription>
              {appointmentContent.SIDE_INFO.description}
            </SideDescription>
            
            <ModelContainer>
              <MedicalModelViewer 
                modelType={
                  appointmentType === "inPerson" ? "doctor-office" : 
                  appointmentType === "homeVisit" ? "doctor-avatar" : 
                  "doctor-avatar"
                }
                enableSparkles={true}
                title={
                  appointmentType === "inPerson" ? appointmentContent.SIDE_INFO.MODEL_TITLES.inPerson : 
                  appointmentType === "homeVisit" ? appointmentContent.SIDE_INFO.MODEL_TITLES.homeVisit : 
                  appointmentContent.SIDE_INFO.MODEL_TITLES.virtual
                }
                description={
                  appointmentType === "inPerson" ? appointmentContent.SIDE_INFO.MODEL_DESCRIPTIONS.inPerson : 
                  appointmentType === "homeVisit" ? appointmentContent.SIDE_INFO.MODEL_DESCRIPTIONS.homeVisit : 
                  appointmentContent.SIDE_INFO.MODEL_DESCRIPTIONS.virtual
                }
                height="400px"
              />
            </ModelContainer>
            
            <AppointmentSteps>
              {appointmentContent.SIDE_INFO.HOW_IT_WORKS.steps.map((step, index) => (
                <StepContainer key={step.number}>
                  <StepNumber>{step.number}</StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>
                      {step.description}
                    </StepDescription>
                  </StepContent>
                </StepContainer>
              ))}
            </AppointmentSteps>
            
            <InfoBox>
              <InfoBoxTitle>
                <i className="fas fa-info-circle"></i> {appointmentContent.SIDE_INFO.INFO_BOXES.insurance.title}
              </InfoBoxTitle>
              <InfoBoxContent>
                {appointmentContent.SIDE_INFO.INFO_BOXES.insurance.content}
              </InfoBoxContent>
            </InfoBox>
            
            <InfoBox>
              <InfoBoxTitle>
                <i className="fas fa-clock"></i> {appointmentContent.SIDE_INFO.INFO_BOXES.policy.title}
              </InfoBoxTitle>
              <InfoBoxContent>
                {appointmentContent.SIDE_INFO.INFO_BOXES.policy.content}
              </InfoBoxContent>
            </InfoBox>
          </SideInfo>
        </AppointmentContent>
      </AppointmentFormSection>
      
      <FAQSection>
        <Section title={appointmentContent.FAQ.title} subtitle={appointmentContent.FAQ.subtitle} centered>
          <FAQGrid>
            {appointmentContent.FAQ.items.map((faq, index) => (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FAQQuestion>
                  <i className="fas fa-question-circle"></i>
                  {faq.question}
                </FAQQuestion>
                <FAQAnswer>
                  {faq.answer}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQGrid>
        </Section>
      </FAQSection>
      
      {/* Demo Chat Modal */}
      <DemoChatModal 
        isOpen={showDemoChatModal} 
        onClose={() => setShowDemoChatModal(false)} 
        doctorName="Dr. Sarah Johnson"
      />
    </AppointmentContainer>
  );
};

export default Appointment;
