import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MedicalModelViewer from '../3d/MedicalModelViewer';
import Button from '../ui/Button';
import { CONSULTING } from '../../constants';

const HeroContainer = styled.section`
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 2rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 5rem 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  width: 50%;
  z-index: 2;
  
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const PreHeading = styled(motion.div)`
  display: inline-block;
  background: rgba(38, 198, 218, 0.1);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: var(--primary);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(38, 198, 218, 0.3);
      z-index: -1;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubHeading = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 90%;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HeroModelContainer = styled.div`
  width: 50%;
  height: 500px;
  z-index: 1;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

const HighlightsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HighlightIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(38, 198, 218, 0.1);
  color: var(--primary);
`;

const HighlightText = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ConsultingHero = ({
  preHeading = CONSULTING.HERO.DEFAULT.preHeading,
  heading = CONSULTING.HERO.DEFAULT.heading,
  subHeading = CONSULTING.HERO.DEFAULT.subHeading,
  modelType = "doctor-avatar",
  primaryButtonText = CONSULTING.HERO.DEFAULT.primaryButtonText,
  secondaryButtonText = CONSULTING.HERO.DEFAULT.secondaryButtonText,
  primaryButtonLink = CONSULTING.HERO.DEFAULT.primaryButtonLink,
  secondaryButtonLink = CONSULTING.HERO.DEFAULT.secondaryButtonLink,
  highlights = CONSULTING.HERO.DEFAULT.highlights
}) => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <PreHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <i className="fas fa-stethoscope"></i> {preHeading}
          </PreHeading>
          
          <HeroHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {heading.split(' ').map((word, index) => 
              index % 3 === 0 ? <span key={index}>{word} </span> : `${word} `
            )}
          </HeroHeading>
          
          <HeroSubHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {subHeading}
          </HeroSubHeading>
          
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              size="large" 
              as="a" 
              href={primaryButtonLink}
              icon={<i className="fas fa-calendar-check"></i>}
            >
              {primaryButtonText}
            </Button>
            <Button 
              size="large" 
              variant="outline" 
              as="a" 
              href={secondaryButtonLink}
              icon={<i className="fas fa-user-md"></i>}
            >
              {secondaryButtonText}
            </Button>
          </HeroButtons>
          
          <HighlightsContainer>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 + index * 0.1 }}
              >
                <HighlightItem>
                  <HighlightIcon>
                    <i className={`fas ${highlight.icon}`}></i>
                  </HighlightIcon>
                  <HighlightText>{highlight.text}</HighlightText>
                </HighlightItem>
              </motion.div>
            ))}
          </HighlightsContainer>
        </HeroText>
        
        <HeroModelContainer>
          <MedicalModelViewer 
            modelType={modelType} 
            title="Virtual Doctor Consultation"
            description="Our specialists are available for online appointments"
            noShadow 
            bgColor="transparent" 
            enableSparkles
          />
        </HeroModelContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default ConsultingHero;
