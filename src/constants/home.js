// Home page constants
export const HOME_PAGE = {
  HERO: {
    badge: {
      icon: 'fas fa-stethoscope',
      text: 'Virtual Medical Consultation'
    },
    heading: 'Expert Healthcare with Medi.Care',
    highlightedWord: 'Medi.Care',
    subheading: 'Connect with qualified doctors and nurses online for personalized medical advice, book home visits, or schedule clinic appointments. Your health records are securely stored for seamless care.',
    buttons: {
      primary: {
        text: 'Start Consultation',
        icon: 'fas fa-comment-medical'
      },
      secondary: {
        text: 'Book Appointment',
        icon: 'fas fa-calendar-check',
        href: '/appointment'
      }
    }
  },

  DOCTOR_INFO: {
    titlePrefix: 'About',
    title: 'About Medi.Care Platform',
    highlightedWord: 'Medi.Care Platform',
    descriptions: [
      'MediCare is your comprehensive virtual healthcare solution that connects you with qualified doctors and nurses from anywhere. Our platform offers secure online consultations, convenient home visits, and clinic appointments all in one place.',
      'With MediCare, your medical records are safely stored in our secure database, making it easier for healthcare providers to access your history and provide personalized care. Experience healthcare that adapts to your lifestyle and needs.'
    ],
    specialties: [
      {
        icon: 'fas fa-video',
        text: 'Virtual Consultations'
      },
      {
        icon: 'fas fa-home',
        text: 'Home Visits'
      },
      {
        icon: 'fas fa-hospital',
        text: 'Clinic Appointments'
      },
      {
        icon: 'fas fa-database',
        text: 'Secure Medical Records'
      }
    ],
    button: {
      text: 'Learn More About MediCare',
      icon: 'fas fa-info-circle',
      href: '/about'
    }
  },

  SERVICES: {
    titlePrefix: 'Our',
    title: 'Healthcare Services',
    highlightedWord: 'Services',
    subtitle: 'MediCare offers comprehensive virtual healthcare services connecting you with qualified medical professionals for personalized care and convenient access to healthcare.',
    cards: [
      {
        icon: 'fas fa-video',
        title: 'Online Consultations',
        description: 'Connect with licensed doctors and nurses through secure chat for immediate medical advice and treatment recommendations.',
        modelType: 'stethoscope'
      },
      {
        icon: 'fas fa-home',
        title: 'Medical Visits',
        description: 'Book qualified healthcare professionals to visit your home within your radius for comprehensive medical examinations and treatments or go to the closest clinic.',
        modelType: 'medical-device'
      },
      {
        icon: 'fas fa-file-medical-alt',
        title: 'Digital Health Records',
        description: 'Your complete medical history securely stored in our database and accessible to your healthcare providers for continuous care.',
        modelType: 'skeleton'
      }
    ]
  },

  COMMON: {
    consultButton: 'Consult Now',
    learnMoreButton: 'Learn More'
  }
};