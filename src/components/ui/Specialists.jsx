import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MedicalModelViewer from '../3d/MedicalModelViewer';
import Button from './Button';
import { useTranslations } from '../../hooks/useTranslations';

const SpecialistsSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const SpecialistsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const SpecialistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const SpecialistCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SpecialistImageContainer = styled.div`
  height: 300px;
  position: relative;
  background-color: #f5f9ff;
`;

const SpecialistContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const SpecialistName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  color: var(--text-primary);
`;

const SpecialistTitle = styled.div`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const SpecialistDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const SpecialistStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary);
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const SpecialistActions = styled.div`
  margin-top: auto;
`;

const SeeMoreButton = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;

const Specialists = () => {
  const { specialists, common } = useTranslations();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SpecialistsSection>
      <SpecialistsContent>
        <SectionHeader>
          <SectionSubtitle>{specialists.SECTION.subtitle}</SectionSubtitle>
          <SectionTitle>{specialists.SECTION.title}</SectionTitle>
          <SectionDescription>
            {specialists.SECTION.description}
          </SectionDescription>
        </SectionHeader>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SpecialistsContainer>
            {specialists.DOCTORS.map((specialist, index) => (
              <motion.div key={index} variants={cardVariants}>
                <SpecialistCard>
                  <SpecialistImageContainer>
                    <MedicalModelViewer 
                      modelType={specialist.model} 
                      height="300px" 
                      noShadow
                      showControls={false}
                      scale={specialist.scale}
                      position={specialist.position}
                    />
                  </SpecialistImageContainer>
                  <SpecialistContent>
                    <SpecialistName>{specialist.name}</SpecialistName>
                    <SpecialistTitle>{specialist.title}</SpecialistTitle>
                    <SpecialistDescription>{specialist.description}</SpecialistDescription>
                    <SpecialistStats>
                      <StatItem>
                        <StatNumber>{specialist.experience}</StatNumber>
                        <StatLabel>{specialists.STATS_LABELS.YEARS}</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatNumber>{specialist.patients}</StatNumber>
                        <StatLabel>{specialists.STATS_LABELS.PATIENTS}</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatNumber>{specialist.rating}</StatNumber>
                        <StatLabel>{specialists.STATS_LABELS.RATING}</StatLabel>
                      </StatItem>
                    </SpecialistStats>
                    <SpecialistActions>
                      <Button fullWidth>{common.BUTTONS.BOOK_A_CONSULTATION}</Button>
                    </SpecialistActions>
                  </SpecialistContent>
                </SpecialistCard>
              </motion.div>
            ))}
          </SpecialistsContainer>
        </motion.div>
        
        <SeeMoreButton
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button variant="outline" as="a" href="/doctors">{specialists.VIEW_ALL_BUTTON}</Button>
        </SeeMoreButton>
      </SpecialistsContent>
    </SpecialistsSection>
  );
};

export default Specialists;
