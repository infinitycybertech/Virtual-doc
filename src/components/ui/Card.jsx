import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
  width: 100%;
  height: ${props => props.imageHeight || '200px'};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
`;

const CardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CardFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  margin-top: auto;
`;

const Card = ({
  image,
  imageHeight,
  imageAlt = '',
  title,
  children,
  footer,
  ...props
}) => {
  return (
    <CardContainer
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      {...props}
    >
      {image && (
        <CardImage imageHeight={imageHeight}>
          <img src={image} alt={imageAlt} />
        </CardImage>
      )}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {typeof children === 'string' ? (
          <CardText>{children}</CardText>
        ) : (
          children
        )}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
