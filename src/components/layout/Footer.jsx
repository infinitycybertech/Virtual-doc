import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #1a2b4e;
  color: #fff;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLogo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--secondary);
  }
`;

const FooterDescription = styled.p`
  color: #ccc;
  line-height: 1.7;
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--secondary);
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled.li`
  transition: transform 0.3s ease;
  
  a {
    color: #ccc;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--secondary);
    }
  }
  
  &:hover {
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  
  svg {
    margin-top: 4px;
    color: var(--secondary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>Health<span>Care</span></FooterLogo>
          <FooterDescription>
            Providing exceptional healthcare services 
            with compassion and expertise for over 20 years. 
            Your health is our priority.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/">Home</Link></FooterLink>
            <FooterLink><Link to="/about">About Us</Link></FooterLink>
            <FooterLink><Link to="/services">Our Services</Link></FooterLink>
            <FooterLink><Link to="/doctors">Our Doctors</Link></FooterLink>
            <FooterLink><Link to="/contact">Contact Us</Link></FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Our Services</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/services/cardiology">Cardiology</Link></FooterLink>
            <FooterLink><Link to="/services/neurology">Neurology</Link></FooterLink>
            <FooterLink><Link to="/services/pediatrics">Pediatrics</Link></FooterLink>
            <FooterLink><Link to="/services/orthopedics">Orthopedics</Link></FooterLink>
            <FooterLink><Link to="/services/dentistry">Dentistry</Link></FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact Info</FooterHeading>
          <ContactInfo>
            <ContactItem>
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Health Avenue, Medical District, City, Country</p>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-phone-alt"></i>
              <p>+1 (555) 123-4567</p>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-envelope"></i>
              <p>info@healthcare-clinic.com</p>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-clock"></i>
              <p>Mon-Fri: 8:00 AM - 8:00 PM<br />Sat-Sun: 9:00 AM - 5:00 PM</p>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} HealthCare Medical Clinic. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
