import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MedicalModelViewer from '../components/3d/MedicalModelViewer';
import Button from '../components/ui/Button';
import DemoChatModal from '../components/ui/DemoChatModal';
import { useTranslations } from '../hooks/useTranslations';

// Styled components
const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  overflow: hidden;
  width: 100%;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 3rem 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.75rem;
    gap: 1rem;
  }
`;

const HeroText = styled.div`
  @media (max-width: 992px) {
    text-align: center;
    order: 2;
  }
`;

const Badge = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(38, 198, 218, 0.1);
  color: var(--primary);
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const HeroHeading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--primary);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 8px;
      height: 8px;
      width: 100%;
      background-color: rgba(38, 198, 218, 0.2);
      z-index: -1;
    }
  }
  
  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 90%;
  
  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto 2.5rem auto;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const HeroModel = styled.div`
  height: 600px;
  width: 100%;
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    height: 500px;
  }
`;

const DoctorInfoSection = styled.section`
  padding: 7rem 0;
  background: #f8f9fa;
`;

const DoctorInfoContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const DoctorOfficeModel = styled.div`
  height: 600px;
  width: 100%;
  position: relative;
  
  @media (max-width: 992px) {
    height: 450px;
  }
`;

const DoctorInfo = styled.div``;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const DoctorDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const SpecialtyList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    text-align: left;
    max-width: 300px;
    margin: 0 auto 2.5rem auto;
  }
`;

const SpecialtyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SpecialtyIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(38, 198, 218, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const SpecialtyText = styled.span`
  font-weight: 500;
  color: var(--text-primary);
`;

const ConsultButton = styled(Button)`
  margin-top: 1rem;
`;

const ServicesSection = styled.section`
  padding: 7rem 0;
`;

const ServicesContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
  text-align: center;
`;

const ServicesSectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServicesSectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceModelContainer = styled.div`
  height: 250px;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: var(--primary);
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const { home: homeContent, common: commonContent } = useTranslations();
  
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroText>
            <Badge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <i className={homeContent.HERO.badge.icon}></i> {homeContent.HERO.badge.text}
            </Badge>
            
            <HeroHeading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {homeContent.HERO.heading.split(homeContent.HERO.highlightedWord).map((part, index) => (
                index === 0 ? part : (
                  <span key={index}>
                    <span>{homeContent.HERO.highlightedWord}</span>
                    {part}
                  </span>
                )
              ))}
            </HeroHeading>
            
            <HeroSubheading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {homeContent.HERO.subheading}
            </HeroSubheading>
            
            <CTAButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button 
                size="large"
                onClick={() => setChatOpen(true)}
                icon={<i className={homeContent.HERO.buttons.primary.icon}></i>}
              >
                {homeContent.HERO.buttons.primary.text}
              </Button>
              <Button 
                size="large" 
                variant="outline" 
                as="a" 
                href={homeContent.HERO.buttons.secondary.href}
                icon={<i className={homeContent.HERO.buttons.secondary.icon}></i>}
              >
                {homeContent.HERO.buttons.secondary.text}
              </Button>
            </CTAButtons>
          </HeroText>
          
          <HeroModel>
            <MedicalModelViewer 
              modelType="doctor-avatar"
              height="600px"
              enableSparkles={false}
              autoRotate={true}
              autoRotateSpeed={1.5}
              scale={2.2}
              position={[0, -1, 0]}
              rotation={[0, 0, 0]}
              minimalUI
              intensity={0.8}
            />
          </HeroModel>
        </HeroContent>
      </HeroSection>
      
      {/* Doctor Info Section with Office Model */}
      <DoctorInfoSection>
        <DoctorInfoContent>
          <DoctorOfficeModel>
            <MedicalModelViewer 
              modelType="doctor-office"
              height="600px"
              enableSparkles={false}
              autoRotate={true}
              autoRotateSpeed={0.5}
              scale={1.2}
              position={[0, -1, 0]}
              rotation={[0, 2*Math.PI/4, 0]}
              minimalUI
            />
            <ConsultButton 
              style={{ 
                position: 'absolute', 
                bottom: '2rem', 
                left: '50%', 
                transform: 'translateX(-50%)',
                zIndex: 10
              }}
              size="large"
              onClick={() => setChatOpen(true)}
              icon={<i className="fas fa-comments"></i>}
            >
              {commonContent.BUTTONS.CONSULT_NOW}
            </ConsultButton>
          </DoctorOfficeModel>
          
          <DoctorInfo>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {homeContent.DOCTOR_INFO.titlePrefix} <span>{homeContent.DOCTOR_INFO.highlightedWord}</span>
            </SectionTitle>
            
            <DoctorDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {homeContent.DOCTOR_INFO.descriptions[0]}
            </DoctorDescription>
            
            <DoctorDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {homeContent.DOCTOR_INFO.descriptions[1]}
            </DoctorDescription>
            
            <SpecialtyList
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {homeContent.DOCTOR_INFO.specialties.map((specialty, index) => (
                <SpecialtyItem key={index}>
                  <SpecialtyIcon>
                    <i className={specialty.icon}></i>
                  </SpecialtyIcon>
                  <SpecialtyText>{specialty.text}</SpecialtyText>
                </SpecialtyItem>
              ))}
            </SpecialtyList>
            
            <Button 
              as="a" 
              href={homeContent.DOCTOR_INFO.button.href}
              size="medium"
              variant="outline"
              icon={<i className={homeContent.DOCTOR_INFO.button.icon}></i>}
            >
              {homeContent.DOCTOR_INFO.button.text}
            </Button>
          </DoctorInfo>
        </DoctorInfoContent>
      </DoctorInfoSection>
      
      {/* Services Section */}
      <ServicesSection>
        <ServicesContent>
          <ServicesSectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {homeContent.SERVICES.titlePrefix} <span>{homeContent.SERVICES.highlightedWord}</span>
          </ServicesSectionTitle>
          
          <ServicesSectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {homeContent.SERVICES.subtitle}
          </ServicesSectionSubtitle>
          
          <ServicesGrid>
            {homeContent.SERVICES.cards.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
              >
                <ServiceModelContainer>
                  <MedicalModelViewer 
                    modelType={service.modelType}
                    height="250px"
                    autoRotate={true}
                    autoRotateSpeed={2}
                    minimalUI
                    scale={index === 0 ? 0.01 : index === 1 ? 2 : 1.6}
                    position={index === 0 ? [0, 0, 0] : index === 1 ? [0, -2.9, 0] : [0, -0.5, 0]}
                    rotation={[0, 0, 0]}
                  />
                </ServiceModelContainer>
                <ServiceContent>
                  <ServiceTitle>
                    <i className={service.icon}></i>
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                  <Button as="a" href="/services" size="small">{commonContent.BUTTONS.LEARN_MORE}</Button>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ServicesContent>
      </ServicesSection>
      
      {/* Demo Chat Modal */}
      <DemoChatModal 
        isOpen={chatOpen} 
        onClose={() => setChatOpen(false)} 
        doctorName={commonContent.DOCTOR_INFO.NAME}
      />
    </HomeContainer>
  );
};

export default Home;
