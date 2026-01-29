// API Documentation constants
export const API_DOCS = {
  title: 'VirtualDoc AI API',
  subtitle: 'Integrate advanced medical AI capabilities into your applications',
  description: 'Comprehensive API documentation for developers to integrate with our medical AI system, including patient consultations, health assessments, and secure communication channels.',
  
  HERO: {
    title: 'VirtualDoc AI API',
    subtitle: 'Medical AI Integration Made Simple',
    description: 'Build the future of healthcare with our comprehensive medical AI API. Access advanced diagnostic tools, patient consultation systems, and secure medical communication channels.',
    features: [
      'Advanced AI-powered diagnostics',
      'Secure patient consultations',
      'Real-time medical chat',
      'Health assessment tools',
      'HIPAA-compliant infrastructure'
    ]
  },

  GETTING_STARTED: {
    title: 'Getting Started',
    subtitle: 'Start integrating in minutes',
    steps: [
      {
        title: 'Get API Key',
        description: 'Sign up for a developer account and obtain your API key from the developer dashboard.',
        code: 'const API_KEY = "your_api_key_here";'
      },
      {
        title: 'Install SDK',
        description: 'Install our JavaScript SDK for easy integration with your applications.',
        code: 'npm install @virtualdoc/medical-ai-sdk'
      },
      {
        title: 'Initialize Client',
        description: 'Initialize the VirtualDoc client with your API key and start making requests.',
        code: `import { VirtualDocClient } from '@virtualdoc/medical-ai-sdk';

const client = new VirtualDocClient({
  apiKey: process.env.VIRTUALDOC_API_KEY,
  environment: 'production' // or 'sandbox'
});`
      }
    ]
  },

  AUTHENTICATION: {
    title: 'Authentication',
    subtitle: 'Secure API access with token-based authentication',
    description: 'All API requests require authentication using API keys. Include your API key in the Authorization header of all requests.',
    example: {
      title: 'Authentication Example',
      code: `curl -X GET "https://api.virtualdoc.com/v1/health-check" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    }
  },

  ENDPOINTS: {
    title: 'API Endpoints',
    subtitle: 'Complete reference of available endpoints',
    categories: [
      {
        name: 'Health Assessment',
        description: 'AI-powered health assessment and symptom analysis',
        endpoints: [
          {
            method: 'POST',
            path: '/v1/health-assessment',
            title: 'Create Health Assessment',
            description: 'Submit patient symptoms and receive AI-powered health assessment recommendations.',
            parameters: [
              { name: 'symptoms', type: 'array', required: true, description: 'List of patient symptoms' },
              { name: 'age', type: 'number', required: true, description: 'Patient age' },
              { name: 'gender', type: 'string', required: true, description: 'Patient gender (male/female/other)' },
              { name: 'medical_history', type: 'array', required: false, description: 'Previous medical conditions' }
            ],
            response: {
              assessment_id: 'string',
              recommendations: 'array',
              urgency_level: 'string',
              confidence_score: 'number'
            }
          }
        ]
      },
      {
        name: 'Consultations',
        description: 'Manage patient-doctor consultations',
        endpoints: [
          {
            method: 'POST',
            path: '/v1/consultations',
            title: 'Create Consultation',
            description: 'Initialize a new patient consultation session.',
            parameters: [
              { name: 'patient_id', type: 'string', required: true, description: 'Unique patient identifier' },
              { name: 'doctor_id', type: 'string', required: true, description: 'Assigned doctor identifier' },
              { name: 'consultation_type', type: 'string', required: true, description: 'Type of consultation (general, specialist, emergency)' }
            ],
            response: {
              consultation_id: 'string',
              chat_channel_id: 'string',
              status: 'string',
              created_at: 'string'
            }
          },
          {
            method: 'GET',
            path: '/v1/consultations/{id}',
            title: 'Get Consultation Details',
            description: 'Retrieve details of a specific consultation.',
            parameters: [
              { name: 'id', type: 'string', required: true, description: 'Consultation ID' }
            ],
            response: {
              consultation_id: 'string',
              patient: 'object',
              doctor: 'object',
              status: 'string',
              messages: 'array'
            }
          }
        ]
      },
      {
        name: 'Chat & Messaging',
        description: 'Real-time secure medical communication',
        endpoints: [
          {
            method: 'POST',
            path: '/v1/chat/token',
            title: 'Generate Chat Token',
            description: 'Generate authentication token for real-time chat functionality.',
            parameters: [
              { name: 'user_id', type: 'string', required: true, description: 'User identifier' },
              { name: 'role', type: 'string', required: true, description: 'User role (patient/doctor)' }
            ],
            response: {
              token: 'string',
              expires_at: 'string',
              user_id: 'string'
            }
          },
          {
            method: 'POST',
            path: '/v1/chat/channels',
            title: 'Create Chat Channel',
            description: 'Create a secure communication channel between patient and doctor.',
            parameters: [
              { name: 'participants', type: 'array', required: true, description: 'List of participant user IDs' },
              { name: 'channel_type', type: 'string', required: true, description: 'Channel type (consultation, support)' }
            ],
            response: {
              channel_id: 'string',
              participants: 'array',
              created_at: 'string'
            }
          }
        ]
      }
    ]
  },

  CODE_EXAMPLES: {
    title: 'Code Examples',
    subtitle: 'Ready-to-use code snippets for common use cases',
    examples: [
      {
        title: 'Health Assessment',
        language: 'javascript',
        description: 'Submit patient symptoms for AI analysis',
        code: `const assessment = await client.healthAssessment.create({
  symptoms: ['headache', 'fever', 'fatigue'],
  age: 35,
  gender: 'female',
  medical_history: ['hypertension']
});

console.log('Assessment:', assessment.recommendations);
console.log('Urgency Level:', assessment.urgency_level);`
      },
      {
        title: 'Start Consultation',
        language: 'javascript',
        description: 'Initialize a patient-doctor consultation',
        code: `const consultation = await client.consultations.create({
  patient_id: 'patient_123',
  doctor_id: 'dr_sarah_johnson',
  consultation_type: 'general'
});

// Initialize chat for the consultation
const chatToken = await client.chat.generateToken({
  user_id: consultation.patient_id,
  role: 'patient'
});`
      },
      {
        title: 'Real-time Chat Integration',
        language: 'javascript',
        description: 'Set up real-time messaging between patient and doctor',
        code: `import { StreamChat } from 'stream-chat';

const chatClient = StreamChat.getInstance('your_stream_api_key');

// Connect user with generated token
await chatClient.connectUser({
  id: user.id,
  name: user.name,
  role: user.role
}, chatToken);

// Join consultation channel
const channel = chatClient.channel('consultation', consultation.chat_channel_id);
await channel.watch();`
      }
    ]
  },

  RESPONSE_CODES: {
    title: 'Response Codes',
    subtitle: 'HTTP status codes and error handling',
    codes: [
      { code: '200', status: 'OK', description: 'Request successful' },
      { code: '201', status: 'Created', description: 'Resource created successfully' },
      { code: '400', status: 'Bad Request', description: 'Invalid request parameters' },
      { code: '401', status: 'Unauthorized', description: 'Invalid or missing API key' },
      { code: '403', status: 'Forbidden', description: 'Insufficient permissions' },
      { code: '404', status: 'Not Found', description: 'Resource not found' },
      { code: '429', status: 'Rate Limited', description: 'Too many requests' },
      { code: '500', status: 'Server Error', description: 'Internal server error' }
    ]
  },

  SDKs: {
    title: 'SDKs & Libraries',
    subtitle: 'Official libraries for popular programming languages',
    libraries: [
      {
        name: 'JavaScript/Node.js',
        description: 'Full-featured SDK for JavaScript and Node.js applications',
        installation: 'npm install @virtualdoc/medical-ai-sdk',
        github: 'https://github.com/virtualdoc/medical-ai-js-sdk'
      },
      {
        name: 'Python',
        description: 'Python SDK for medical AI integration',
        installation: 'pip install virtualdoc-medical-ai',
        github: 'https://github.com/virtualdoc/medical-ai-python-sdk'
      },
      {
        name: 'PHP',
        description: 'PHP library for healthcare applications',
        installation: 'composer require virtualdoc/medical-ai-php',
        github: 'https://github.com/virtualdoc/medical-ai-php-sdk'
      },
      {
        name: 'React Components',
        description: 'Pre-built React components for medical UI',
        installation: 'npm install @virtualdoc/react-medical-ui',
        github: 'https://github.com/virtualdoc/react-medical-ui'
      }
    ]
  },

  RATE_LIMITS: {
    title: 'Rate Limits',
    subtitle: 'API usage limits and best practices',
    limits: [
      { tier: 'Free', requests: '1,000/month', rate: '10/minute', features: 'Basic health assessments' },
      { tier: 'Developer', requests: '10,000/month', rate: '100/minute', features: 'Health assessments + Chat' },
      { tier: 'Professional', requests: '100,000/month', rate: '1,000/minute', features: 'Full API access' },
      { tier: 'Enterprise', requests: 'Unlimited', rate: 'Custom', features: 'Custom integration support' }
    ]
  },

  SUPPORT: {
    title: 'Support & Resources',
    subtitle: 'Get help with your integration',
    resources: [
      {
        title: 'Developer Documentation',
        description: 'Comprehensive guides and tutorials',
        link: '/docs',
        icon: 'book'
      },
      {
        title: 'API Reference',
        description: 'Detailed endpoint documentation',
        link: '/api-reference',
        icon: 'code'
      },
      {
        title: 'Community Forum',
        description: 'Connect with other developers',
        link: '/community',
        icon: 'users'
      },
      {
        title: 'Support Tickets',
        description: '24/7 technical support',
        link: '/support',
        icon: 'help-circle'
      }
    ]
  }
};