import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import MedicalModelViewer from '../components/3d/MedicalModelViewer';
import { useTranslations } from '../hooks/useTranslations';

const ContactContainer = styled.div`
  padding-top: 2rem;
`;const HeroSection = styled.section`
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

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
    padding: 0 0.75rem;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.2rem;
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

const ContactDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ContactDetailsContainer = styled.div`
  margin-bottom: 2rem;
`;

const ContactDetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(30, 136, 229, 0.1);
  color: var(--primary);
  border-radius: 50%;
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const ContactDetail = styled.div``;

const ContactDetailTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
`;

const ContactDetailText = styled.p`
  color: var(--text-secondary);
  line-height: 1.5;
`;

const ContactBusinessHours = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(30, 136, 229, 0.1);
`;

const ContactBusinessHoursTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  
  span {
    color: var(--primary);
  }
`;

const ContactBusinessHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ContactBusinessHoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const ContactBusinessHoursDays = styled.span`
  font-weight: ${props => props.$emergency ? '600' : '500'};
  color: ${props => props.$emergency ? 'var(--primary)' : 'var(--text-primary)'};
`;

const ContactBusinessHoursTime = styled.span`
  color: ${props => props.$emergency ? 'var(--primary)' : 'var(--text-secondary)'};
  font-weight: ${props => props.$emergency ? '600' : 'normal'};
`;

const ContactEmergencyHours = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin-top: 0.5rem;
  background-color: rgba(30, 136, 229, 0.05);
  border-radius: var(--border-radius);
  border-left: 3px solid var(--primary);
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${props => props.$bgColor || 'rgba(30, 136, 229, 0.1)'};
  color: ${props => props.$color || 'var(--primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactFormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormGroupRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const MapSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
`;

const MapContainer = styled.div`
  position: relative;
  height: 500px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
`;

const IframeMap = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const BusinessHoursSection = styled.section`
  padding: 5rem 0;
`;

const BusinessHoursContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BusinessHoursInfo = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HoursTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  span {
    color: var(--primary);
  }
`;

const HoursTable = styled.div`
  margin-top: 2rem;
`;

const HoursRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Day = styled.div`
  font-weight: 500;
  color: var(--text-primary);
`;

const Time = styled.div`
  color: var(--text-secondary);
`;

const BusinessHoursModel = styled.div`
  height: 500px;
  @media (max-width: 992px) {
    order: 1;
    height: 400px;
  }
`;

const Contact = () => {
  const { contact: contactContent } = useTranslations();
  
  return (
    <ContactContainer>
      <HeroSection>
        <HeroModelContainer>
          <MedicalModelViewer 
            modelType="bomba-medica"
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
          {contactContent.HERO.title}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactContent.HERO.subtitle}
        </HeroSubtitle>
      </HeroSection>
      
      <ContactSection>
        <ContactContent>
          <ContactInfo>
            <ContactTitle>
              {contactContent.CONTACT_SECTION.titlePrefix} <span>{contactContent.CONTACT_SECTION.highlightedWord}</span> {contactContent.CONTACT_SECTION.titleSuffix}
            </ContactTitle>
            <ContactDescription>
              {contactContent.CONTACT_SECTION.description}
            </ContactDescription>
            
            <ContactDetailsContainer>
              {contactContent.CONTACT_DETAILS.map((detail, index) => (
                <ContactDetailItem key={index}>
                  <ContactIcon>
                    <i className={detail.icon}></i>
                  </ContactIcon>
                  <ContactDetail>
                    <ContactDetailTitle>{detail.title}</ContactDetailTitle>
                    <ContactDetailText>
                      {detail.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < detail.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </ContactDetailText>
                  </ContactDetail>
                </ContactDetailItem>
              ))}
            </ContactDetailsContainer>
            
            {/* Business Hours Section */}
            <ContactBusinessHours>
              <ContactBusinessHoursTitle>
                {contactContent.BUSINESS_HOURS.titlePrefix} <span>{contactContent.BUSINESS_HOURS.titleSuffix}</span>
              </ContactBusinessHoursTitle>
              <ContactBusinessHoursContainer>
                {contactContent.BUSINESS_HOURS.schedule.map((schedule, index) => (
                  <ContactBusinessHoursItem key={index}>
                    <ContactBusinessHoursDays>{schedule.days}</ContactBusinessHoursDays>
                    <ContactBusinessHoursTime>{schedule.hours}</ContactBusinessHoursTime>
                  </ContactBusinessHoursItem>
                ))}
                <ContactEmergencyHours>
                  <ContactBusinessHoursDays $emergency>{contactContent.BUSINESS_HOURS.emergency.title}</ContactBusinessHoursDays>
                  <ContactBusinessHoursTime $emergency>{contactContent.BUSINESS_HOURS.emergency.hours}</ContactBusinessHoursTime>
                </ContactEmergencyHours>
              </ContactBusinessHoursContainer>
            </ContactBusinessHours>
            
            <SocialLinksContainer>
              {contactContent.SOCIAL_LINKS.map((social, index) => (
                <SocialLink 
                  key={index}
                  href={social.href} 
                  $bgColor={social.bgColor} 
                  $color={social.color}
                >
                  <i className={social.icon}></i>
                </SocialLink>
              ))}
            </SocialLinksContainer>
          </ContactInfo>
          
          <ContactFormContainer>
            <ContactForm>
              <FormGroupRow>
                <FormGroup>
                  <FormLabel>{contactContent.FORM.FIELDS.NAME.label}</FormLabel>
                  <FormInput 
                    type="text" 
                    placeholder={contactContent.FORM.FIELDS.NAME.placeholder} 
                    required={contactContent.FORM.FIELDS.NAME.required} 
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>{contactContent.FORM.FIELDS.EMAIL.label}</FormLabel>
                  <FormInput 
                    type="email" 
                    placeholder={contactContent.FORM.FIELDS.EMAIL.placeholder} 
                    required={contactContent.FORM.FIELDS.EMAIL.required} 
                  />
                </FormGroup>
              </FormGroupRow>
              
              <FormGroupRow>
                <FormGroup>
                  <FormLabel>{contactContent.FORM.FIELDS.PHONE.label}</FormLabel>
                  <FormInput 
                    type="tel" 
                    placeholder={contactContent.FORM.FIELDS.PHONE.placeholder} 
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>{contactContent.FORM.FIELDS.SUBJECT.label}</FormLabel>
                  <FormSelect>
                    {contactContent.FORM.FIELDS.SUBJECT.options.map((option, index) => (
                      <option key={index} value={option.value}>{option.text}</option>
                    ))}
                  </FormSelect>
                </FormGroup>
              </FormGroupRow>
              
              <FormGroup>
                <FormLabel>{contactContent.FORM.FIELDS.MESSAGE.label}</FormLabel>
                <FormTextarea 
                  placeholder={contactContent.FORM.FIELDS.MESSAGE.placeholder} 
                  required={contactContent.FORM.FIELDS.MESSAGE.required}
                ></FormTextarea>
              </FormGroup>
              
              <Button size="large" style={{ width: '100%' }}>
                {contactContent.FORM.SUBMIT_BUTTON.text} <i className={`${contactContent.FORM.SUBMIT_BUTTON.icon} ml-2`}></i>
              </Button>
            </ContactForm>
          </ContactFormContainer>
        </ContactContent>
      </ContactSection>
      
      <MapSection>
        <Section title={contactContent.MAP_SECTION.title} subtitle={contactContent.MAP_SECTION.subtitle} centered>
          <MapContainer>
            <IframeMap 
              src={contactContent.MAP_SECTION.mapSrc}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={contactContent.MAP_SECTION.title}
            />
          </MapContainer>
        </Section>
      </MapSection>
      
      <BusinessHoursSection>
        <BusinessHoursContent>
          <BusinessHoursInfo>
            <HoursTitle>
              <span>Business</span> Hours
            </HoursTitle>
            <ContactDescription>
              Our medical center is open for appointments and walk-ins according to the schedule below. For emergencies outside of regular hours, please call our emergency line.
            </ContactDescription>
            
            <HoursTable>
              <HoursRow>
                <Day>Monday - Friday</Day>
                <Time>8:00 AM - 7:00 PM</Time>
              </HoursRow>
              <HoursRow>
                <Day>Saturday</Day>
                <Time>9:00 AM - 5:00 PM</Time>
              </HoursRow>
              <HoursRow>
                <Day>Sunday</Day>
                <Time>10:00 AM - 2:00 PM</Time>
              </HoursRow>
              <HoursRow>
                <Day>Holidays</Day>
                <Time>Emergency Services Only</Time>
              </HoursRow>
            </HoursTable>
            
            <div style={{ marginTop: '2rem' }}>
              <Button 
                size="medium" 
                as="a" 
                href="/appointment"
                icon={<i className="fas fa-calendar-check"></i>}
              >
                Book an Appointment
              </Button>
            </div>
          </BusinessHoursInfo>
          
          <BusinessHoursModel>
            <MedicalModelViewer 
              modelType="stethoscope"
              enableSparkles={true}
              title="Medical Consultations"
              description="Schedule an appointment with our specialists"
              height="500px"
            />
          </BusinessHoursModel>
        </BusinessHoursContent>
      </BusinessHoursSection>
    </ContactContainer>
  );
};

export default Contact;
