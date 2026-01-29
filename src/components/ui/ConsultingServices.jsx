import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MedicalModelViewer from '../3d/MedicalModelViewer';
import Button from './Button';

const ServicesContainer = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesSubtitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ServicesDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceModelContainer = styled.div`
  height: 250px;
  position: relative;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ServiceFeatures = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

const ServiceFeature = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  
  i {
    color: var(--primary);
    margin-right: 0.5rem;
  }
`;

const ServiceFooter = styled.div`
  margin-top: auto;
`;

// Define service data with appropriate 3D models
const services = [
  {
    title: "Virtual Consultations",
    description: "Connect with our specialists from the comfort of your home via secure video calls.",
    features: [
      "24/7 availability for urgent care",
      "Encrypted, HIPAA-compliant platform",
      "Same quality care as in-person visits"
    ],
    model: "doctor-avatar",
    scale: 1.8,
    position: [0, -1, 0]
  },
  {
    title: "Medical Diagnostics",
    description: "Comprehensive diagnostic services using cutting-edge technology for accurate results.",
    features: [
      "Lab test interpretation",
      "Medical imaging review",
      "Personalized health assessments"
    ],
    model: "medical-device",
    scale: 1.5,
    position: [0, -1.5, 0]
  },
  {
    title: "Medication Management",
    description: "Get prescriptions and manage your medications online with expert pharmacist support.",
    features: [
      "Digital prescription services",
      "Medication interaction checks",
      "Automatic refill reminders"
    ],
    model: "pills",
    scale: 3,
    position: [0, -2, 0]
  },
  {
    title: "Specialist Referrals",
    description: "Access to our network of specialists for advanced medical care when needed.",
    features: [
      "Quick appointment scheduling",
      "Electronic medical record sharing",
      "Coordinated care approach"
    ],
    model: "stethoscope",
    scale: 2,
    position: [0, -1, 0]
  },
  {
    title: "Emergency Guidance",
    description: "Immediate medical guidance during emergencies before hospital care.",
    features: [
      "Triage and assessment",
      "First aid instructions",
      "Emergency service coordination"
    ],
    model: "first-aid-kit",
    scale: 2.5,
    position: [0, -1.5, 0]
  },
  {
    title: "Hospital Coordination",
    description: "We coordinate with hospitals when in-person care is necessary for seamless treatment.",
    features: [
      "Hospital admission support",
      "Transfer of medical records",
      "Post-discharge follow-up care"
    ],
    model: "hospital-bed",
    scale: 0.8,
    position: [0, -1, 0]
  }
];

const ConsultingServices = () => {
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
    <ServicesContainer>
      <ServicesContent>
        <ServicesHeader>
          <ServicesSubtitle>Our Services</ServicesSubtitle>
          <ServicesTitle>Comprehensive Medical Consulting Services</ServicesTitle>
          <ServicesDescription>
            We offer a wide range of virtual medical consulting services delivered by board-certified
            specialists using state-of-the-art technology to ensure you receive the highest quality care.
          </ServicesDescription>
        </ServicesHeader>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesGrid>
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <ServiceCard>
                  <ServiceModelContainer>
                    <MedicalModelViewer 
                      modelType={service.model} 
                      height="250px" 
                      noShadow 
                      showControls={false}
                      scale={service.scale}
                      position={service.position}
                    />
                  </ServiceModelContainer>
                  <ServiceContent>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceFeatures>
                      {service.features.map((feature, idx) => (
                        <ServiceFeature key={idx}>
                          <i className="fas fa-check-circle"></i> {feature}
                        </ServiceFeature>
                      ))}
                    </ServiceFeatures>
                    <ServiceFooter>
                      <Button variant="outline" size="medium" fullWidth>Learn More</Button>
                    </ServiceFooter>
                  </ServiceContent>
                </ServiceCard>
              </motion.div>
            ))}
          </ServicesGrid>
        </motion.div>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default ConsultingServices;
