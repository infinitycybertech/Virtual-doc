// Contact page constants
export const CONTACT_PAGE = {
  HERO: {
    title: 'Contact Dr. Johnson',
    subtitle: 'Have questions or need to schedule an appointment? Reach out directly to Dr. Johnson\'s office through any of these convenient methods.'
  },

  CONTACT_SECTION: {
    titlePrefix: 'Get in',
    titleSuffix: 'with Us',
    title: 'Get in Touch with Us',
    highlightedWord: 'Touch',
    description: 'Whether you have questions about our services, need to schedule an appointment, or want to learn more about our medical center, our team is ready to assist you.'
  },

  CONTACT_DETAILS: [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Location',
      text: '123 Medical Center Drive\nHealthville, CA 90210'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone Numbers',
      text: 'Appointments: +1 (555) 123-4567\nEmergency: +1 (555) 987-6543'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      text: 'info@doctors-clinic.com\nappointments@doctors-clinic.com'
    }
  ],

  BUSINESS_HOURS: {
    titlePrefix: 'Business',
    titleSuffix: 'Hours',
    schedule: [
      {
        days: 'Monday - Friday',
        hours: '8:00 AM - 6:00 PM'
      },
      {
        days: 'Saturday',
        hours: '9:00 AM - 2:00 PM'
      },
      {
        days: 'Sunday',
        hours: 'Closed'
      }
    ],
    emergency: {
      title: 'Emergency Care',
      hours: '24/7 Available'
    }
  },

  SOCIAL_LINKS: [
    {
      platform: 'facebook',
      href: '#',
      icon: 'fab fa-facebook-f',
      bgColor: '#3b5998',
      color: '#fff'
    },
    {
      platform: 'twitter',
      href: '#',
      icon: 'fab fa-twitter',
      bgColor: '#1da1f2',
      color: '#fff'
    },
    {
      platform: 'linkedin',
      href: '#',
      icon: 'fab fa-linkedin-in',
      bgColor: '#0e76a8',
      color: '#fff'
    },
    {
      platform: 'youtube',
      href: '#',
      icon: 'fab fa-youtube',
      bgColor: '#c4302b',
      color: '#fff'
    },
    {
      platform: 'whatsapp',
      href: '#',
      icon: 'fab fa-whatsapp',
      bgColor: '#25d366',
      color: '#fff'
    }
  ],

  FORM: {
    FIELDS: {
      NAME: {
        label: 'Full Name*',
        placeholder: 'Enter your name',
        required: true
      },
      EMAIL: {
        label: 'Email Address*',
        placeholder: 'Enter your email',
        required: true
      },
      PHONE: {
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        required: false
      },
      SUBJECT: {
        label: 'Subject',
        options: [
          { value: '', text: 'Select a subject' },
          { value: 'appointment', text: 'Appointment Request' },
          { value: 'inquiry', text: 'General Inquiry' },
          { value: 'feedback', text: 'Feedback' },
          { value: 'billing', text: 'Billing Question' },
          { value: 'other', text: 'Other' }
        ]
      },
      MESSAGE: {
        label: 'Your Message*',
        placeholder: 'Enter your message',
        required: true
      }
    },
    SUBMIT_BUTTON: {
      text: 'Send Message',
      icon: 'fas fa-paper-plane'
    }
  },

  MAP_SECTION: {
    title: 'Our Location',
    subtitle: 'Find Our Medical Center',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203503307!2d-118.49684628478652!3d34.06254498060347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cfde8de717%3A0x2e87255792082c56!2sSanta%20Monica%20Medical%20Center!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus',
    title: 'Medical Center Location'
  }
};