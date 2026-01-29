import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import MedicalModelViewer from '../3d/MedicalModelViewer';
import { useTranslations } from '../../hooks/useTranslations';

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  overflow: hidden;
  position: relative;
`;

const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
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

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

const TestimonialCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  width: 100%;
  position: relative;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-primary);
`;

const AuthorRole = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

const TestimonialNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const TestimonialDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;

const Dot = styled.button`
  width: ${props => props.active ? '12px' : '8px'};
  height: ${props => props.active ? '12px' : '8px'};
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary)' : 'rgba(30, 136, 229, 0.3)'};
  border: none;
  margin: 0 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const BackgroundModel = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.15;
  
  &.top-left {
    top: -100px;
    left: -100px;
    transform: rotate(-30deg);
  }
  
  &.bottom-right {
    bottom: -100px;
    right: -100px;
    transform: rotate(30deg);
  }
`;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { testimonials: testimonialsData } = useTranslations();
  
  // Use the testimonials data from the translation system
  const testimonials = testimonialsData.TESTIMONIALS_DATA;
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  const [direction, setDirection] = useState(0);

  return (
    <TestimonialsSection>
      <BackgroundModel className="top-left">
        <MedicalModelViewer
          modelType="stethoscope"
          scale={4}
          rotation={[-0.5, 0, 0.3]}
          showControls={false}
          interactive={false}
          noShadow
        />
      </BackgroundModel>
      
      <BackgroundModel className="bottom-right">
        <MedicalModelViewer
          modelType="pills"
          scale={6}
          rotation={[0.3, 0, -0.3]}
          showControls={false}
          interactive={false}
          noShadow
        />
      </BackgroundModel>
      
      <TestimonialsContent>
        <SectionHeader>
          <SectionSubtitle>{testimonialsData.SECTION.subtitle}</SectionSubtitle>
          <SectionTitle>{testimonialsData.SECTION.title}</SectionTitle>
          <SectionDescription>
            Discover how our virtual medical consultations have helped patients receive quality care
            without the hassle of in-person visits.
          </SectionDescription>
        </SectionHeader>
        
        <TestimonialContainer>
          <AnimatePresence custom={direction} mode="wait">
            <TestimonialCard
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <QuoteIcon>
                <i className="fas fa-quote-right"></i>
              </QuoteIcon>
              <TestimonialText>"{testimonials[current].text}"</TestimonialText>
              <TestimonialAuthor>
                <AuthorName>{testimonials[current].name}</AuthorName>
                <AuthorRole>{testimonials[current].role}</AuthorRole>
              </TestimonialAuthor>
            </TestimonialCard>
          </AnimatePresence>
          
          <TestimonialNavigation>
            <NavButton 
              onClick={() => {
                setDirection(-1);
                handlePrev();
              }}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-arrow-left"></i>
            </NavButton>
            
            <TestimonialDots>
              {testimonials.map((_, index) => (
                <Dot 
                  key={index} 
                  active={index === current} 
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </TestimonialDots>
            
            <NavButton 
              onClick={() => {
                setDirection(1);
                handleNext();
              }}
              aria-label="Next testimonial"
            >
              <i className="fas fa-arrow-right"></i>
            </NavButton>
          </TestimonialNavigation>
        </TestimonialContainer>
      </TestimonialsContent>
    </TestimonialsSection>
  );
};

export default Testimonials;
