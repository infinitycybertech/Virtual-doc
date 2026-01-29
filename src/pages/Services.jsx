import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import MedicalModelViewer from '../components/3d/MedicalModelViewer';
import StreamChatModal from '../components/ui/StreamChatModal';
import { useTranslations } from '../hooks/useTranslations';

const ServicesPageContainer = styled.div`
  padding-top: 2rem;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 3rem 1rem;
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
    padding: 0 0.75rem;
    margin-top: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const ServiceModelContainer = styled.div`
  height: 200px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--primary);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

const ServiceFeature = styled.li`
  padding: 0.5rem 0;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  
  i {
    color: var(--primary);
    margin-right: 0.5rem;
  }
`;

const DetailedServiceSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
`;

const DetailedServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 1.5rem;
  }
`;

const DetailedServiceText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const DetailedServiceTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const DetailedServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const DetailedServiceModelContainer = styled.div`
  height: 500px;
  
  @media (max-width: 992px) {
    order: 1;
    height: 350px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ChatButtonContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Services = () => {
  const { services: servicesContent, home: homeContent } = useTranslations();
  const [chatOpen, setChatOpen] = useState(false);
  
  return (
    <ServicesPageContainer>
      <HeroSection>
        <HeroModelContainer>
          <MedicalModelViewer 
            modelType="hospital-bed"
            autoRotate={true}
            autoRotateSpeed={0.5}
            scale={2}
            position={[0, -3, 0]}
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
          {servicesContent.HERO.title}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {servicesContent.HERO.subtitle}
        </HeroSubtitle>
      </HeroSection>
      
      <Section title={servicesContent.SECTION.title} subtitle={servicesContent.SECTION.subtitle}>
        <ServiceGrid>
          {servicesContent.SERVICES.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceModelContainer>
                <MedicalModelViewer 
                  modelType={service.modelType}
                  height="200px"
                  noShadow
                  interactive={false}
                  autoRotate={false}
                  enableSparkles={false}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={1}
                />
              </ServiceModelContainer>
              <ServiceContent>
                <ServiceTitle>
                  <i className={`fas ${service.icon} mr-2`}></i> {service.title}
                </ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, i) => (
                    <ServiceFeature key={i}>
                      <i className="fas fa-check-circle"></i> {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>
                {service.chatButton && (
                  <ChatButtonContainer>
                    <Button 
                      size="medium"
                      onClick={() => setChatOpen(true)}
                      icon={<i className="fas fa-comments"></i>}
                    >
                      {servicesContent.CHAT_BUTTON?.text || 'Chat with Specialist'}
                    </Button>
                  </ChatButtonContainer>
                )}
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>
      
      {servicesContent.DETAILED_SECTIONS.map((section, index) => (
        <DetailedServiceSection key={index} style={{ background: index % 2 === 0 ? '#f8f9fa' : 'white' }}>
          <DetailedServiceContent>
            {index % 2 === 0 ? (
              <>
                <DetailedServiceText>
                  <DetailedServiceTitle>
                    <span>{section.highlightedWord}</span> {section.title.replace(section.highlightedWord, '').trim()}
                  </DetailedServiceTitle>
                  {section.descriptions.map((description, i) => (
                    <DetailedServiceDescription key={i}>
                      {description}
                    </DetailedServiceDescription>
                  ))}
                </DetailedServiceText>
                <DetailedServiceModelContainer>
                  <MedicalModelViewer 
                    modelType={section.modelType}
                    enableSparkles={false}
                    autoRotate={false}
                    title={section.modelTitle}
                    description={section.modelDescription}
                    height="500px"
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                  />
                </DetailedServiceModelContainer>
              </>
            ) : (
              <>
                <DetailedServiceModelContainer>
                  <MedicalModelViewer 
                    modelType={section.modelType}
                    autoRotate={false}
                    title={section.modelTitle}
                    description={section.modelDescription}
                    height="500px"
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                  />
                </DetailedServiceModelContainer>
                <DetailedServiceText>
                  <DetailedServiceTitle>
                    <span>{section.highlightedWord}</span> {section.title.replace(section.highlightedWord, '').trim()}
                  </DetailedServiceTitle>
                  {section.descriptions.map((description, i) => (
                    <DetailedServiceDescription key={i}>
                      {description}
                    </DetailedServiceDescription>
                  ))}
                </DetailedServiceText>
              </>
            )}
          </DetailedServiceContent>
        </DetailedServiceSection>
      ))}
      
      <StreamChatModal 
        isOpen={chatOpen} 
        onClose={() => setChatOpen(false)} 
      />
    </ServicesPageContainer>
  );
};

export default Services;
