// Contact page constants - Tsonga Translation
export const CONTACT_PAGE_TS = {
  HERO: {
    title: "Hlanganisani na Hina",
    subtitle: "Hi ri laha ku ku pfuna. Hlanganisani na hina hi ndlela leyi u yi tsakelaka"
  },

  CONTACT_SECTION: {
    title: "Hlanganisani na Hina",
    highlightedWord: "Hlanganisa",
    description: "Hambi u nga ri na swivutiso swa vukorhokeri bya hina, u lava ku endla risibokriti, kumbe u lava ku dyondza swo tala hi senthara ya hina ya vutshunguri, timi ya hina yi ri laha ku ku pfuna."
  },

  CONTACT_DETAILS: [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ndhawu ya Hina',
      text: '123 Medical Center Drive\nCape Town, Western Cape 8001'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Tinomboro ta Rifoni',
      text: 'Tirisibokiti: +27 (021) 123-4567\nXiphemu: +27 (021) 987-6543'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Emeyili',
      text: 'info@drjohnson.co.za\nappointments@drjohnson.co.za'
    }
  ],

  BUSINESS_HOURS: {
    titlePrefix: 'Nkarhi',
    titleSuffix: 'wa bindzu',
    schedule: [
      {
        days: 'Musumbhunuku - Ravuntlhanu',
        hours: '8:00 AM - 6:00 PM'
      },
      {
        days: 'Mugqivela',
        hours: '9:00 AM - 2:00 PM'
      },
      {
        days: 'Sonto',
        hours: 'Ku pfaliwe'
      }
    ],
    emergency: {
      title: 'Ku languta ka ku hatlisa',
      hours: 'Ku kumeka 24/7'
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
        label: 'Vito ra ku Tala*',
        placeholder: 'Nghenisa vito ra wena',
        required: true
      },
      EMAIL: {
        label: 'Adirese ya Emeyili*',
        placeholder: 'Nghenisa emeyili ya wena',
        required: true
      },
      PHONE: {
        label: 'Nomboro ya Rifoni',
        placeholder: 'Nghenisa nomboro ya rifoni ya wena',
        required: false
      },
      SUBJECT: {
        label: 'Xivutiso',
        options: [
          { value: '', text: 'Hlawula xivutiso' },
          { value: 'appointment', text: 'Xikombelo xa Risibokriti' },
          { value: 'inquiry', text: 'Xivutiso xa Ntolovelo' },
          { value: 'feedback', text: 'Mavonelo' },
          { value: 'billing', text: 'Xivutiso xa Mbimbi' },
          { value: 'other', text: 'Swin\'wana' }
        ]
      },
      MESSAGE: {
        label: 'Marungula ya Wena*',
        placeholder: 'Nghenisa marungula ya wena',
        required: true
      }
    },
    SUBMIT_BUTTON: {
      text: 'Rhumela Marungula',
      icon: 'fas fa-paper-plane'
    }
  },

  CONTACT_INFO: {
    title: "Mahungu ya ku Hlanganisa",
    subtitle: "Tirhisa mahungu laya landzelaka ku hlanganisa na Dr. Johnson na timi ya yena",
    
    office: {
      title: "Hofisi ya Nkoka",
      address: "123 Medical Centre Drive\nCape Town, Western Cape 8001\nSouth Africa",
      phone: "(021) 123-4567",
      email: "info@drjohnson.co.za",
      website: "www.drjohnson.co.za"
    },

    hours: {
      title: "Tihawara ta Vukorhokeri",
      weekdays: "Musumbhunuku - Ravuntlhanu: 8:00 AM - 6:00 PM",
      saturday: "Mugqivela: 9:00 AM - 2:00 PM", 
      sunday: "Sonto: Ku Pfaliwile",
      emergency: "Ndhavuko wa Xiphemu wa 24/7: 10177"
    },

    emergency: {
      title: "Hlanganisi wa Xiphemu",
      description: "Eka swiphemu swa vutshunguri, u nga tirhisi fomo leyi. Fonela ndhavuko wa xiphemu hi ku hatlisa.",
      phone: "10177",
      note: "Eka ku nga ri ka xiphemu, tirhisa minomboro ya ntolovelo ya hofisi na emeyili"
    }
  },

  CONTACT_FORM: {
    title: "Rhumela Ritsongo",
    subtitle: "Hlaya fomo leyi eka vulavurisano. Hi ta ku hlamula eka tihawara ta 24.",

    form: {
      personalInfo: "Mahungu ya Munhu",
      firstName: "Vito ra Kurhula",
      lastName: "Vito ra Nkoka",
      email: "Adirese ya Emeyili",
      phone: "Nomboro ya Rifoni",
      
      inquiry: "Vulamuriwa",
      subject: "Xivutiso",
      message: "Marungula",
      preferredContact: "Ndlela leyi Laviwaka ya ku Hlanganisa",
      
      appointment: "Nkarhi wa ku Burisana",
      requestAppointment: "Ndzi lava ku buka nkarhi",
      preferredDate: "Siku leri Laviwaka",
      preferredTime: "Nkarhi lowu Laviwaka",
      reasonForVisit: "Ntiyiso lowu Etlela"
    },

    subjects: [
      "Nkarhi wa ku Burisana",
      "Ku Buza ka Ntolovelo",
      "Vulamuriwa bya Insurance",
      "Mirhi ya ku Talulariwa",
      "Ku Landzelela ka Rihanyo",
      "Xin'wana"
    ],

    contactMethods: [
      "Emeyili",
      "Rifoni",
      "SMS", 
      "Ku hava Preference"
    ],

    placeholders: {
      firstName: "Nghenisa vito ra wena ra kurhula",
      lastName: "Nghenisa vito ra wena ra nkoka", 
      email: "jina@example.com",
      phone: "+27 12 345 6789",
      message: "Tsala marungula ya wena laha...",
      reasonForVisit: "Tsundzuxa hi ku katsaka ntiyiso lowu u lavaka ku burisana ngaku na Dr. Johnson..."
    },

    buttons: {
      submit: "Rhumela Marungula",
      clear: "Sula Fomo",
      bookAppointment: "Buka Nkarhi"
    },

    validation: {
      required: "Nsimu lowu wu laveka",
      emailInvalid: "Hi kombeli u nghenisa adirese ya emeyili leyi tirhaka",
      phoneInvalid: "Hi kombeli u nghenisa nomboro ya rifoni leyi tirhaka",
      messageMin: "Marungula ya milawu yi fanele ku va na 10 ta maletere ku tlula"
    },

    success: {
      title: "Marungula yi Rhumelekile!",
      message: "Ku khensa! Marungula ya wena yi rhumelekile hi ku humelela. Hi ta ku hlamula eka tihawara ta 24.",
      backButton: "Famba Endzhaku eka Tluka ra Ku Hlanganisa"
    },

    error: {
      title: "Xiphazamiso",
      message: "Ku va na xiphazamiso hi ku rhumela marungula ya wena. Hi kombeli u ringeta nakambe.",
      retryButton: "Ringeta Nakambe"
    }
  },

  LOCATION: {
    title: "Ndhawu ya Hina",
    subtitle: "Kuma hina eka ndhawu ya Cape Town",
    description: "Vukorhokeri bya hina byi kona eka nkoka wa Cape Town, byi nga ri kule na switirhisiwa swa swiambulendi na swibedlele swo tala. Hi nyika ndhawu yo paka ya mahala na vuhlanganisi byo saseka bya swo famba.",
    
    directions: {
      title: "Tindlela",
      bycar: "Hi Movha: Tirhisa N2 Highway na u suka eka Medical Centre Drive",
      bytrain: "Hi Xitimela: Station ya Cape Town (15 ta timiniiti hi movha)",
      bybus: "Hi Bese: Swirini swa MyCiTi swi yimela kona na vukorhokeri"
    },

    parking: {
      title: "Ku Paka",
      description: "Ndhawu yo paka ya mahala yi kumeka eka vayingisi hinkwavo. Ku paka ka vusiku ku hlayisekile na ku languteriwa."
    }
  },

  FAQ: {
    title: "Mibuzo leyi Buziwaka Ngopfu",
    subtitle: "Kuma tinhlamuselo ta mibuzo leyi buziwaka ngopfu hi vayingisi",
    
    items: [
      {
        question: "Xana ndzi fanele ku buka nkarhi yini?",
        answer: "Ina, hi ringanyetela ku buka nkarhi hi ku hatlisa. Loko i xiphemu xa vutshunguri, fonela ndhavuko wa xiphemu wa 10177."
      },
      {
        question: "Xana ni amukela insurance yini?",
        answer: "Ina, hi tirhisana na vanyikeli vo tala va insurance. Fona ofisi ya hina ku tiyisisa loko scheme ya wena yi katsiwa."
      },
      {
        question: "Ndzi nga buka nkarhi hi ndlela yihi?",
        answer: "U nga buka nkarhi hi ku fona ofisi ya hina, ku tirhisa websayiti ya hina, kumbe ku ta eka ofisi hi ku kongoma."
      },
      {
        question: "Xana ku na ndhawu yo paka yini?",
        answer: "Ina, hi nyika ndhawu yo paka ya mahala eka vayingisi hinkwavo. Ku paka ku hlayisekile na ku languteriwa."
      },
      {
        question: "Xana Dr. Johnson u vulavula tindzimi tihi?",
        answer: "Dr. Johnson u vulavula Xinghezi, Afrikaans, isiXhosa, na Xitsonga hi ku saseka."
      },
      {
        question: "Xana ni nyika vulamuriwa bya telemedicine yini?",
        answer: "Ina, hi nyika vulamuriwa bya video na rifoni eka vayingisi lava nga swi lavaka. Buza ofisi eka vuxokoxoko."
      }
    ]
  },

  MAP_SECTION: {
    title: 'Ndhawu ya Hina',
    subtitle: 'Kuma Senthara ya Hina ya vutshunguri',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203503307!2d-118.49684628478652!3d34.06254498060347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cfde8de717%3A0x2e87255792082c56!2sSanta%20Monica%20Medical%20Center!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus',
    title: 'Ndhawu ya Senthara ya vutshunguri'
  }
};