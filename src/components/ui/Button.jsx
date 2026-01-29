import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Filter out motion props to prevent them from being passed to DOM
const filterMotionProps = (props) => {
  const { variants, initial, whileHover, whileTap, animate, exit, transition, ...filteredProps } = props;
  return filteredProps;
};

const ButtonBase = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => !['variants', 'initial', 'whileHover', 'whileTap', 'animate', 'exit', 'transition'].includes(prop)
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '1rem 2rem' : props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: ${props => props.size === 'large' ? '1.1rem' : props.size === 'small' ? '0.9rem' : '1rem'};
  gap: 0.5rem;
  white-space: nowrap;
  width: auto;
  
  @media (max-width: 768px) {
    padding: ${props => props.size === 'large' ? '0.9rem 1.5rem' : props.size === 'small' ? '0.4rem 0.8rem' : '0.65rem 1.2rem'};
    font-size: ${props => props.size === 'large' ? '1rem' : props.size === 'small' ? '0.85rem' : '0.95rem'};
  }
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: var(--primary);
  color: white;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: #b0c4de;
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background-color: var(--secondary);
  color: white;
  
  &:hover {
    filter: brightness(0.9);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  
  &:disabled {
    border-color: #b0c4de;
    color: #b0c4de;
    cursor: not-allowed;
  }
`;

const TextButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--primary);
  padding: 0.5rem;
  
  &:hover {
    color: var(--primary-dark);
    background-color: rgba(30, 136, 229, 0.1);
  }
  
  &:disabled {
    color: #b0c4de;
    cursor: not-allowed;
  }
`;

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  disabled = false,
  icon,
  iconPosition = 'left',
  ...props 
}) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };
  
  const renderButton = () => {
    const content = (
      <>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </>
    );
    
    switch(variant) {
      case 'secondary':
        return (
          <SecondaryButton 
            size={size} 
            disabled={disabled} 
            variants={buttonVariants}
            initial="initial"
            whileHover={disabled ? {} : "hover"}
            whileTap={disabled ? {} : "tap"}
            {...props}
          >
            {content}
          </SecondaryButton>
        );
      case 'outline':
        return (
          <OutlineButton 
            size={size} 
            disabled={disabled} 
            variants={buttonVariants}
            initial="initial"
            whileHover={disabled ? {} : "hover"}
            whileTap={disabled ? {} : "tap"}
            {...props}
          >
            {content}
          </OutlineButton>
        );
      case 'text':
        return (
          <TextButton 
            size={size} 
            disabled={disabled} 
            variants={buttonVariants}
            initial="initial"
            whileHover={disabled ? {} : "hover"}
            whileTap={disabled ? {} : "tap"}
            {...props}
          >
            {content}
          </TextButton>
        );
      default: // Primary
        return (
          <PrimaryButton 
            size={size} 
            disabled={disabled} 
            variants={buttonVariants}
            initial="initial"
            whileHover={disabled ? {} : "hover"}
            whileTap={disabled ? {} : "tap"}
            {...props}
          >
            {content}
          </PrimaryButton>
        );
    }
  };
  
  return renderButton();
};

export default Button;
