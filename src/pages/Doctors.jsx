import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import MedicalModelViewer from '../components/3d/MedicalModelViewer';
import { useTranslations } from '../hooks/useTranslations';

const DoctorsContainer = styled.div`
  padding-top: 2rem;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid ${props => props.active ? 'var(--primary)' : '#e0e0e0'};
  border-radius: 50px;
  padding: 0.6rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(30, 136, 229, 0.1)'};
    border-color: var(--primary);
  }
`;

const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const DoctorCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DoctorModelContainer = styled.div`
  height: 250px;
`;

const DoctorInfo = styled.div`
  padding: 1.5rem;
`;

const DoctorName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const DoctorSpecialty = styled.div`
  font-size: 1rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const DoctorBio = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const DoctorContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(30, 136, 229, 0.1);
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const FeaturedDoctorSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
`;

const FeaturedContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const FeaturedTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const FeaturedSubtitle = styled.div`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const FeaturedDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const FeaturedModelContainer = styled.div`
  height: 500px;
  
  @media (max-width: 992px) {
    order: 1;
    height: 400px;
  }
`;

const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Badge = styled.span`
  background-color: rgba(30, 136, 229, 0.1);
  color: var(--primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Doctors = () => {
  const { doctors: doctorsContent, common } = useTranslations();
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredDoctors = activeFilter === "all" 
    ? doctorsContent.DOCTORS 
    : doctorsContent.DOCTORS.filter(doctor => doctor.category === activeFilter);
  
  return (
    <DoctorsContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {doctorsContent.HERO.title}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {doctorsContent.HERO.subtitle}
        </HeroSubtitle>
      </HeroSection>
      
      <Section title={doctorsContent.SECTION.title} subtitle={doctorsContent.SECTION.subtitle}>
        <FilterContainer>
          {doctorsContent.CATEGORIES.map((category, index) => (
            <FilterButton 
              key={index} 
              active={activeFilter === category.value}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <DoctorsGrid>
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <DoctorModelContainer>
                <MedicalModelViewer 
                  modelType={doctor.modelType} 
                  height="250px"
                  noShadow
                  interactive={false}
                />
              </DoctorModelContainer>
              <DoctorInfo>
                <DoctorName>{doctor.name}</DoctorName>
                <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
                <DoctorBio>{doctor.bio}</DoctorBio>
                <DoctorContact>
                  <Button size="small" as="a" href="/appointment">
                    {common.BUTTONS.BOOK_APPOINTMENT}
                  </Button>
                  <SocialLinks>
                    <SocialIcon href={doctor.socialLinks.twitter} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </SocialIcon>
                    <SocialIcon href={doctor.socialLinks.linkedin} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </SocialIcon>
                    <SocialIcon href={doctor.socialLinks.email} aria-label="Email">
                      <i className="fas fa-envelope"></i>
                    </SocialIcon>
                  </SocialLinks>
                </DoctorContact>
              </DoctorInfo>
            </DoctorCard>
          ))}
        </DoctorsGrid>
      </Section>
      
      <FeaturedDoctorSection>
        <FeaturedContent>
          <FeaturedText>
            <FeaturedSubtitle>{doctorsContent.FEATURED_DOCTOR.role}</FeaturedSubtitle>
            <FeaturedTitle>{doctorsContent.FEATURED_DOCTOR.name}</FeaturedTitle>
            {doctorsContent.FEATURED_DOCTOR.descriptions.map((description, index) => (
              <FeaturedDescription key={index}>
                {description}
              </FeaturedDescription>
            ))}
            <BadgeList>
              {doctorsContent.FEATURED_DOCTOR.badges.map((badge, index) => (
                <Badge key={index}>{badge}</Badge>
              ))}
            </BadgeList>
            <Button 
              size="medium" 
              as="a" 
              href="/appointment"
              icon={<i className={doctorsContent.FEATURED_DOCTOR.button.icon}></i>}
            >
              {doctorsContent.FEATURED_DOCTOR.button.text}
            </Button>
          </FeaturedText>
          <FeaturedModelContainer>
            <MedicalModelViewer 
              modelType="doctor-avatar"
              enableSparkles={true}
              title={doctorsContent.FEATURED_DOCTOR.name}
              description={`${doctorsContent.FEATURED_DOCTOR.role}, Neurologist`}
              height="500px"
            />
          </FeaturedModelContainer>
        </FeaturedContent>
      </FeaturedDoctorSection>
    </DoctorsContainer>
  );
};

export default Doctors;
