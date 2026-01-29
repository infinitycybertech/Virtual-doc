import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MedicalModelViewer from '../3d/MedicalModelViewer';

const HowItWorksSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
`;

const HowItWorksContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionSubtitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const StepsContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StepsModelContainer = styled.div`
  width: 40%;
  height: 500px;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
    margin-bottom: 2rem;
  }
`;

const StepsList = styled.div`
  width: 60%;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 0;
  }
`;

const StepItem = styled(motion.div)`
  margin-bottom: 2rem;
  position: relative;
  padding-left: 3.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 1.5rem;
    top: 3.5rem;
    width: 2px;
    height: calc(100% - 1rem);
    background-color: var(--primary);
    
    @media (max-width: 992px) {
      display: none;
    }
  }
  
  &:last-child::before {
    display: none;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  left: 0;
  top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 2;
`;

const StepTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

// Define the steps for the consultation process
const steps = [
  {
    number: "01",
    title: "Book Your Consultation",
    description: "Select a specialist and choose a convenient time slot for your virtual appointment through our easy-to-use booking system."
  },
  {
    number: "02",
    title: "Complete Pre-Visit Forms",
    description: "Fill out your medical history and reason for visit electronically before your appointment to maximize consultation time."
  },
  {
    number: "03",
    title: "Meet With Your Doctor",
    description: "Connect with your doctor via secure video call at the scheduled time. Discuss your symptoms, ask questions, and receive expert medical advice."
  },
  {
    number: "04",
    title: "Receive Treatment Plan",
    description: "Get a personalized treatment plan, prescriptions if needed, and follow-up instructions delivered to your patient portal."
  }
];

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <HowItWorksContent>
        <SectionHeader>
          <SectionSubtitle>How It Works</SectionSubtitle>
          <SectionTitle>Your Path to Online Medical Consultation</SectionTitle>
          <SectionDescription>
            Our virtual consultation process is designed to be simple, secure, and effective. 
            Follow these steps to connect with our medical specialists and receive the care you need.
          </SectionDescription>
        </SectionHeader>
        
        <StepsContainer>
          <StepsModelContainer>
            <MedicalModelViewer 
              modelType="doctor-office" 
              scale={0.8}
              position={[0, -1, 0]}
              title="Virtual Doctor's Office"
              description="Experience professional medical care from the comfort of your home"
              enableSparkles
            />
          </StepsModelContainer>
          
          <StepsList>
            {steps.map((step, index) => (
              <StepItem 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepItem>
            ))}
          </StepsList>
        </StepsContainer>
      </HowItWorksContent>
    </HowItWorksSection>
  );
};

export default HowItWorks;
