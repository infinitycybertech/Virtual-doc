import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import MedicalModelViewer from '../components/3d/MedicalModelViewer';
import { useTranslations } from '../hooks/useTranslations';

const AboutContainer = styled.div`
  padding-top: 2rem;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
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

const AboutUsSection = styled.section`
  padding: 5rem 0;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const AboutDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const AboutModelContainer = styled.div`
  height: 500px;
  
  @media (max-width: 992px) {
    order: 1;
    height: 400px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
`;

const TimelineSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const TimelineContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    top: 0;
    height: 100%;
    width: 4px;
    background: var(--primary);
    opacity: 0.2;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 60px;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  
  ${props => props.$right ? 'grid-column: 2;' : ''}
  
  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

const TimelineYear = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  
  @media (max-width: 768px) {
    left: 30px;
    transform: translateX(-50%);
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ValuesSection = styled.section`
  padding: 5rem 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
    padding: 0 0.75rem;
  }
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ValueIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(30, 136, 229, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--primary);
  font-size: 2rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const PhilosophyTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const TeamTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const About = () => {
  const { about: aboutContent } = useTranslations();
  return (
    <AboutContainer>
      <HeroSection>
        <HeroModelContainer>
          <MedicalModelViewer 
            modelType="doctor-avatar"
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
          {aboutContent.HERO.title}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {aboutContent.HERO.subtitle}
        </HeroSubtitle>
      </HeroSection>
      
      <AboutUsSection>
        <AboutContent>
          <AboutText>
            <PhilosophyTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {aboutContent.PHILOSOPHY.titlePrefix} <span>{aboutContent.PHILOSOPHY.highlightedWord}</span> {aboutContent.PHILOSOPHY.titleSuffix}
            </PhilosophyTitle>
            {aboutContent.PHILOSOPHY.descriptions.map((description, index) => (
              <AboutDescription key={index}>
                {description}
              </AboutDescription>
            ))}
            
            <StatsContainer>
              {aboutContent.STATS.map((stat, index) => (
                <StatItem key={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsContainer>
          </AboutText>
          <AboutModelContainer>
            <MedicalModelViewer 
              modelType="doctor-office"
              enableSparkles={true}
              title={aboutContent.FACILITY.title}
              description={aboutContent.FACILITY.description}
              height="500px"
            />
          </AboutModelContainer>
        </AboutContent>
      </AboutUsSection>
      
      <TimelineSection>
        <Section title={aboutContent.TIMELINE.title} subtitle={aboutContent.TIMELINE.subtitle} centered>
          <TimelineContainer>
            {aboutContent.TIMELINE.items.map((item, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineContent $right={index % 2 !== 0}>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineDescription>
                    {item.description}
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </Section>
      </TimelineSection>
      
      <ValuesSection>
        <Section title={aboutContent.VALUES.title} subtitle={aboutContent.VALUES.subtitle} centered>
          <ValuesGrid>
            {aboutContent.VALUES.items.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <ValueIconContainer>
                  <i className={value.icon}></i>
                </ValueIconContainer>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>
                  {value.description}
                </ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Section>
      </ValuesSection>
      
      <AboutUsSection style={{background: '#f8f9fa'}}>
        <AboutContent>
          <AboutModelContainer>
            <MedicalModelViewer 
              modelType="doctor-avatar"
              enableSparkles={true}
              title="Expert Medical Staff"
              description="Board-certified specialists with years of experience"
              height="500px"
            />
          </AboutModelContainer>
          <AboutText>
            <TeamTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>{aboutContent.MEDICAL_TEAM.highlightedWord}</span> Medical Team
            </TeamTitle>
            {aboutContent.MEDICAL_TEAM.descriptions.map((description, index) => (
              <AboutDescription key={index}>
                {description}
              </AboutDescription>
            ))}
          </AboutText>
        </AboutContent>
      </AboutUsSection>
    </AboutContainer>
  );
};

export default About;
