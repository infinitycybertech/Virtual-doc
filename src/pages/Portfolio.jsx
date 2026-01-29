import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import MedicalModelViewer from '../components/3d/MedicalModelViewer';
import { useTranslations } from '../hooks/useTranslations';

const PortfolioContainer = styled.div`
  padding-top: 2rem;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
    min-height: 35vh;
  }
  
  @media (max-width: 576px) {
    padding: 3rem 1rem;
    min-height: 30vh;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  animation: fadeInUp 0.8s ease-out;
  
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
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out 0.2s both;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroModelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.5;
`;

const PortfolioSection = styled.section`
  padding: 6rem 0;
`;

const PortfolioContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
  color: var(--text-primary);
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PortfolioItem = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const PortfolioModelContainer = styled.div`
  height: 250px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  @media (max-width: 576px) {
    height: 180px;
  }
`;

const PortfolioItemContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const PortfolioTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const PortfolioCategory = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: rgba(38, 198, 218, 0.1);
  color: var(--primary);
  border-radius: 30px;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
`;

const PortfolioDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const PortfolioStats = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f0f0f0;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const AchievementsSection = styled.section`
  padding: 6rem 0;
  background-color: #f8f9fa;
`;

const AchievementsContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const AchievementItem = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const AchievementIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(38, 198, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: var(--primary);
`;

const AchievementTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const AchievementDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const Portfolio = () => {
  const { portfolio: portfolioContent } = useTranslations();
  const portfolioItems = portfolioContent.portfolio.items;
  const achievements = portfolioContent.achievements.items;
  
  return (
    <PortfolioContainer>
      <HeroSection>
        <HeroModelContainer>
          <MedicalModelViewer 
            modelType="medical-device2"
            autoRotate={true}
            scale={3}
            position={[0, -4, 0]}
            minimalUI
            intensity={0.25}
            height="100%"
          />
        </HeroModelContainer>
        
        <HeroContent>
          <HeroTitle>
            {portfolioContent.hero.title}
          </HeroTitle>
          
          <HeroDescription>
            {portfolioContent.hero.description}
          </HeroDescription>
        </HeroContent>
      </HeroSection>
      
      <PortfolioSection>
        <PortfolioContent>
          <SectionTitle>
            {portfolioContent.portfolio.title}
          </SectionTitle>
          
          <PortfolioGrid>
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index}>
                <PortfolioModelContainer>
                  <MedicalModelViewer 
                    modelType={item.modelType}
                    autoRotate={true}
                    minimalUI
                    height="100%"
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                  />
                </PortfolioModelContainer>
                <PortfolioItemContent>
                  <PortfolioCategory>{item.category}</PortfolioCategory>
                  <PortfolioTitle>{item.title}</PortfolioTitle>
                  <PortfolioDescription>{item.description}</PortfolioDescription>
                  {item.caseStudy && (
                    <PortfolioDescription style={{marginTop: '1rem', fontStyle: 'italic'}}>
                      {item.caseStudy}
                    </PortfolioDescription>
                  )}
                </PortfolioItemContent>
              </PortfolioItem>
            ))}
          </PortfolioGrid>
        </PortfolioContent>
      </PortfolioSection>
      
      <AchievementsSection>
        <AchievementsContent>
          <SectionTitle>
            {portfolioContent.achievements.title}
          </SectionTitle>
          
          <AchievementsGrid>
            {achievements.map((item, index) => (
              <AchievementItem key={index}>
                <AchievementIcon>
                  <i className={`fas ${item.icon}`}></i>
                </AchievementIcon>
                <AchievementTitle>{item.title}</AchievementTitle>
                <AchievementDescription>{item.description}</AchievementDescription>
              </AchievementItem>
            ))}
          </AchievementsGrid>
        </AchievementsContent>
      </AchievementsSection>
    </PortfolioContainer>
  );
};

export default Portfolio;
