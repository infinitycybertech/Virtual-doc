import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => !['bgColor', 'fullWidth', 'centered', 'align'].includes(prop)
})`
  padding: 5rem 2rem;
  background-color: ${props => props.bgColor || 'transparent'};
  position: relative;
  overflow: hidden;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`;

const SectionInner = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth', 'centered', 'align'].includes(prop)
})`
  max-width: ${props => props.fullWidth ? '100%' : '1200px'};
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => !['centered', 'align'].includes(prop)
})`
  text-align: ${props => props.align || 'center'};
  margin-bottom: 3rem;
  max-width: ${props => props.align === 'center' ? '700px' : '100%'};
  margin-left: ${props => props.align === 'center' ? 'auto' : '0'};
  margin-right: ${props => props.align === 'center' ? 'auto' : '0'};
`;

const SubTitle = styled(motion.span)`
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--primary);
    margin-top: 0.5rem;
    margin-left: ${props => props.align === 'center' ? 'auto' : '0'};
    margin-right: ${props => props.align === 'center' ? 'auto' : '0'};
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const Section = ({
  id,
  className,
  children,
  title,
  subtitle,
  description,
  bgColor,
  align = 'center',
  fullWidth = false,
  ...props
}) => {
  // Animations
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <SectionContainer id={id} className={className} bgColor={bgColor} {...props}>
      <SectionInner fullWidth={fullWidth}>
        {(title || subtitle || description) && (
          <SectionHeader align={align}>
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {subtitle && (
                <SubTitle 
                  variants={itemVariants} 
                  align={align}
                >
                  {subtitle}
                </SubTitle>
              )}
              
              {title && (
                <Title variants={itemVariants}>
                  {title}
                </Title>
              )}
              
              {description && (
                <Description variants={itemVariants}>
                  {description}
                </Description>
              )}
            </motion.div>
          </SectionHeader>
        )}
        
        {children}
      </SectionInner>
    </SectionContainer>
  );
};

export default Section;
