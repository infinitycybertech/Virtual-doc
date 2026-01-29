// Contact page constants - Xhosa Translation
export const CONTACT_PAGE_XH = {
  HERO: {
    title: 'Qhagamshelana noGqirha Johnson',
    subtitle: 'Unemibuzo okanye ufuna ukucwangcisa indibano? Qhagamshelana ngqo neofisi kaGqirha Johnson ngazo ezi ndlela zilula.'
  },

  CONTACT_SECTION: {
    titlePrefix: 'Qhagamshelana',
    titleSuffix: 'Nathi',
    title: 'Qhagamshelana Nathi',
    highlightedWord: 'Nathi',
    description: 'Nokuba unemibuzo malunga neenkonzo zethu, ufuna ukucwangcisa indibano, okanye ufuna ukufunda ngakumbi ngeziko lethu lezonyango, iqela lethu likulungele ukukunceda.'
  },

  CONTACT_DETAILS: [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Indawo Yethu',
      text: '123 Medical Center Drive\nHealthville, CA 90210'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Iinombolo Zefowuni',
      text: 'Amadinga: +1 (555) 123-4567\nKongxaki: +1 (555) 987-6543'
    },
    {
      icon: 'fas fa-envelope',
      title: 'I-imeyili',
      text: 'info@doctors-clinic.com\nappointments@doctors-clinic.com'
    }
  ],

  BUSINESS_HOURS: {
    titlePrefix: 'Amaxesha',
    titleSuffix: 'oshishini',
    schedule: [
      {
        days: 'NgoMvulo - NgoLwesihlanu',
        hours: '8:00 AM - 6:00 PM'
      },
      {
        days: 'NgoMgqibelo',
        hours: '9:00 AM - 2:00 PM'
      },
      {
        days: 'NgeCawe',
        hours: 'Ivaliwe'
      }
    ],
    emergency: {
      title: 'Ukhathalelo lwangxaki',
      hours: 'Lufumaneka 24/7'
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
        label: 'Igama Elipheleleyo*',
        placeholder: 'Faka igama lakho',
        required: true
      },
      EMAIL: {
        label: 'Idilesi ye-Imeyili*',
        placeholder: 'Faka i-imeyili yakho',
        required: true
      },
      PHONE: {
        label: 'Inombolo Yefowuni',
        placeholder: 'Faka inombolo yakho yefowuni',
        required: false
      },
      SUBJECT: {
        label: 'Isihloko',
        options: [
          { value: '', text: 'Khetha isihloko' },
          { value: 'appointment', text: 'Isicelo Sendibano' },
          { value: 'inquiry', text: 'Umbuzo Jikelele' },
          { value: 'feedback', text: 'Ingxelo' },
          { value: 'billing', text: 'Umbuzo Wokuhlawula' },
          { value: 'other', text: 'Okunye' }
        ]
      },
      MESSAGE: {
        label: 'Umyalezo Wakho*',
        placeholder: 'Faka umyalezo wakho',
        required: true
      }
    },
    SUBMIT_BUTTON: {
      text: 'Thumela Umyalezo',
      icon: 'fas fa-paper-plane'
    }
  },

  MAP_SECTION: {
    title: 'Indawo Yethu',
    subtitle: 'Fumana Iziko Lethu Lezonyango',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203503307!2d-118.49684628478652!3d34.06254498060347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cfde8de717%3A0x2e87255792082c56!2sSanta%20Monica%20Medical%20Center!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus',
    title: 'Indawo Yeziko Lezonyango'
  }
};