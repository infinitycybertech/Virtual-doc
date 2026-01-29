import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { API_DOCS } from '../constants/api';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// Styled Components
const APIContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const HeroSection = styled(Section)`
  text-align: center;
  padding: 120px 0 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  @media (max-width: 768px) {
    padding: 80px 0 60px 0;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ffffff, #e3f2fd);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.8;
  opacity: 0.85;
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ContentSection = styled(Section)`
  background: white;
  color: #333;
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.5rem;
  }
`;

const StepCard = styled(motion.div)`
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a202c;
`;

const StepDescription = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CodeBlock = styled.pre`
  background: #1a202c;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
  border: 1px solid #2d3748;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.75rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.75rem;
    padding: 0.5rem;
  }
`;

const TabContainer = styled.div`
  margin-top: 3rem;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$active ? '#667eea' : '#e2e8f0'};
  background: ${props => props.$active ? '#667eea' : 'white'};
  color: ${props => props.$active ? 'white' : '#4a5568'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    background: ${props => props.$active ? '#5a67d8' : '#f7fafc'};
  }
`;

const EndpointCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const EndpointHeader = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
`;

const EndpointMethod = styled.span`
  background: ${props => props.method === 'POST' ? '#10b981' : props.method === 'GET' ? '#3b82f6' : '#6366f1'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 1rem;
`;

const EndpointPath = styled.code`
  background: #e5e7eb;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
`;

const EndpointContent = styled.div`
  padding: 1.5rem;
`;

const ParametersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  
  th, td {
    padding: 0.75rem;
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
  }
  
  th {
    background: #f8fafc;
    font-weight: 600;
    color: #374151;
  }
  
  td {
    color: #4b5563;
  }
`;

const ResponseCodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const ResponseCodeCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  
  .code {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => 
      props.code.startsWith('2') ? '#10b981' :
      props.code.startsWith('4') ? '#f59e0b' :
      props.code.startsWith('5') ? '#ef4444' : '#6b7280'
    };
  }
  
  .status {
    font-weight: 600;
    color: #374151;
    margin: 0.25rem 0;
  }
  
  .description {
    color: #6b7280;
    font-size: 0.9rem;
  }
`;

const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const LibraryCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const API = () => {
  const [activeTab, setActiveTab] = useState('health');
  const [activeExample, setActiveExample] = useState(0);
  
  // Get translations from the hook
  const translations = useTranslations();
  const { api } = translations;
  
  // Fallback object for when translations are undefined
  const fallbackApiDocs = API_DOCS;

  const apiDocs = api || fallbackApiDocs;

  return (
    <APIContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {apiDocs.HERO.title}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {apiDocs.HERO.subtitle}
        </HeroSubtitle>
        <HeroDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {apiDocs.HERO.description}
        </HeroDescription>
        
        <FeatureGrid
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {apiDocs.HERO.features.map((feature, index) => (
            <FeatureCard
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ {feature}
            </FeatureCard>
          ))}
        </FeatureGrid>
      </HeroSection>

      {/* Getting Started Section */}
      <ContentSection>
        <SectionTitle>{apiDocs.GETTING_STARTED.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.GETTING_STARTED.subtitle}</SectionSubtitle>
        
        <StepsGrid>
          {apiDocs.GETTING_STARTED.steps.map((step, index) => (
            <StepCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <StepNumber>{index + 1}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              <CodeBlock>{step.code}</CodeBlock>
            </StepCard>
          ))}
        </StepsGrid>
      </ContentSection>

      {/* Authentication Section */}
      <ContentSection style={{ background: '#f8fafc' }}>
        <SectionTitle>{apiDocs.AUTHENTICATION.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.AUTHENTICATION.subtitle}</SectionSubtitle>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#4a5568' }}>
            {apiDocs.AUTHENTICATION.description}
          </p>
          
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginBottom: '1rem', color: '#1a202c' }}>{apiDocs.AUTHENTICATION.example.title}</h3>
            <CodeBlock>{apiDocs.AUTHENTICATION.example.code}</CodeBlock>
          </div>
        </div>
      </ContentSection>

      {/* API Endpoints Section */}
      <ContentSection>
        <SectionTitle>{apiDocs.ENDPOINTS.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.ENDPOINTS.subtitle}</SectionSubtitle>
        
        <TabContainer>
          <TabButtons>
            {apiDocs.ENDPOINTS.categories.map((category, index) => (
              <TabButton
                key={index}
                $active={activeTab === category.name.toLowerCase().replace(' ', '')}
                onClick={() => setActiveTab(category.name.toLowerCase().replace(' ', ''))}
              >
                {category.name}
              </TabButton>
            ))}
          </TabButtons>
          
          {apiDocs.ENDPOINTS.categories.map((category, categoryIndex) => (
            activeTab === category.name.toLowerCase().replace(' ', '') && (
              <div key={categoryIndex}>
                <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '2rem' }}>
                  {category.description}
                </p>
                
                {category.endpoints.map((endpoint, endpointIndex) => (
                  <EndpointCard key={endpointIndex}>
                    <EndpointHeader>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <EndpointMethod method={endpoint.method}>{endpoint.method}</EndpointMethod>
                        <EndpointPath>{endpoint.path}</EndpointPath>
                      </div>
                      <h3 style={{ color: '#1a202c', fontSize: '1.2rem', fontWeight: '600' }}>
                        {endpoint.title}
                      </h3>
                    </EndpointHeader>
                    
                    <EndpointContent>
                      <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                        {endpoint.description}
                      </p>
                      
                      {endpoint.parameters && (
                        <>
                          <h4 style={{ color: '#1a202c', marginBottom: '1rem' }}>Parameters</h4>
                          <ParametersTable>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Required</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {endpoint.parameters.map((param, paramIndex) => (
                                <tr key={paramIndex}>
                                  <td><code>{param.name}</code></td>
                                  <td>{param.type}</td>
                                  <td>{param.required ? '✅' : '❌'}</td>
                                  <td>{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </ParametersTable>
                        </>
                      )}
                      
                      {endpoint.response && (
                        <>
                          <h4 style={{ color: '#1a202c', marginBottom: '1rem' }}>Response</h4>
                          <CodeBlock>
                            {JSON.stringify(endpoint.response, null, 2)}
                          </CodeBlock>
                        </>
                      )}
                    </EndpointContent>
                  </EndpointCard>
                ))}
              </div>
            )
          ))}
        </TabContainer>
      </ContentSection>

      {/* Code Examples Section */}
      <ContentSection style={{ background: '#f8fafc' }}>
        <SectionTitle>{apiDocs.CODE_EXAMPLES.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.CODE_EXAMPLES.subtitle}</SectionSubtitle>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <TabButtons>
            {apiDocs.CODE_EXAMPLES.examples.map((example, index) => (
              <TabButton
                key={index}
                $active={activeExample === index}
                onClick={() => setActiveExample(index)}
              >
                {example.title}
              </TabButton>
            ))}
          </TabButtons>
          
          {apiDocs.CODE_EXAMPLES.examples.map((example, index) => (
            activeExample === index && (
              <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#1a202c' }}>{example.title}</h3>
                <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>{example.description}</p>
                <CodeBlock>{example.code}</CodeBlock>
              </div>
            )
          ))}
        </div>
      </ContentSection>

      {/* Response Codes Section */}
      <ContentSection>
        <SectionTitle>{apiDocs.RESPONSE_CODES.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.RESPONSE_CODES.subtitle}</SectionSubtitle>
        
        <ResponseCodeGrid>
          {apiDocs.RESPONSE_CODES.codes.map((code, index) => (
            <ResponseCodeCard key={index} code={code.code}>
              <div className="code">{code.code}</div>
              <div className="status">{code.status}</div>
              <div className="description">{code.description}</div>
            </ResponseCodeCard>
          ))}
        </ResponseCodeGrid>
      </ContentSection>

      {/* SDKs Section */}
      <ContentSection style={{ background: '#f8fafc' }}>
        <SectionTitle>{apiDocs.SDKs.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.SDKs.subtitle}</SectionSubtitle>
        
        <LibraryGrid>
          {apiDocs.SDKs.libraries.map((library, index) => (
            <LibraryCard key={index}>
              <h3 style={{ color: '#1a202c', marginBottom: '1rem' }}>{library.name}</h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>{library.description}</p>
              <CodeBlock style={{ textAlign: 'left', marginBottom: '1rem' }}>
                {library.installation}
              </CodeBlock>
              <Button 
                variant="primary" 
                onClick={() => window.open(library.github, '_blank')}
                style={{ marginTop: '1rem' }}
              >
                View on GitHub
              </Button>
            </LibraryCard>
          ))}
        </LibraryGrid>
      </ContentSection>

      {/* Rate Limits Section */}
      <ContentSection>
        <SectionTitle>{apiDocs.RATE_LIMITS.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.RATE_LIMITS.subtitle}</SectionSubtitle>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ParametersTable>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Monthly Requests</th>
                <th>Rate Limit</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              {apiDocs.RATE_LIMITS.limits.map((limit, index) => (
                <tr key={index}>
                  <td><strong>{limit.tier}</strong></td>
                  <td>{limit.requests}</td>
                  <td>{limit.rate}</td>
                  <td>{limit.features}</td>
                </tr>
              ))}
            </tbody>
          </ParametersTable>
        </div>
      </ContentSection>

      {/* Support Section */}
      <ContentSection style={{ background: '#f8fafc' }}>
        <SectionTitle>{apiDocs.SUPPORT.title}</SectionTitle>
        <SectionSubtitle>{apiDocs.SUPPORT.subtitle}</SectionSubtitle>
        
        <LibraryGrid>
          {apiDocs.SUPPORT.resources.map((resource, index) => (
            <LibraryCard key={index}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {resource.icon === 'book' && '📚'}
                {resource.icon === 'code' && '💻'}
                {resource.icon === 'users' && '👥'}
                {resource.icon === 'help-circle' && '❓'}
              </div>
              <h3 style={{ color: '#1a202c', marginBottom: '1rem' }}>{resource.title}</h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>{resource.description}</p>
              <Button 
                variant="outline" 
                onClick={() => window.open(resource.link, '_blank')}
              >
                Learn More
              </Button>
            </LibraryCard>
          ))}
        </LibraryGrid>
      </ContentSection>
    </APIContainer>
  );
};

export default API;