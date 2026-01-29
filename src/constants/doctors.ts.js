// Doctors page constants - Tsonga Translation
export const DOCTORS_PAGE_TS = {
  HERO: {
    title: "Hlangani na Vativi va Hina",
    subtitle: "Timi ya hina ya vativi lava tiyisisisiweke hi Board yi tshembela ku nyika rihanyo ro hlawuleka hi ku tirhisa ku angarhela ka vutshunguri ka sweswi na theknoloji."
  },

  SECTION: {
    title: "Timi ya Hina ya vutshunguri",
    subtitle: "Vativi lava nga na Ntokoto na Ku Vilela"
  },

  CATEGORIES: [
    { label: "Vativi Hinkwavo", value: "all" },
    { label: "vutshunguri bya Mbilu", value: "cardiology" },
    { label: "vutshunguri bya Byongo", value: "neurology" },
    { label: "vutshunguri bya Marambu", value: "orthopedics" },
    { label: "vutshunguri bya Vana", value: "pediatrics" },
    { label: "vutshunguri bya Riya", value: "dermatology" },
    { label: "vutshunguri bya Ndyangu", value: "family-medicine" }
  ],

  DOCTORS: [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Mutivi wa Mbilu",
      image: "/src/assets/images/doctor1.jpg",
      bio: "Dr. Johnson i mutivi wa mbilu loyi a tiyisisisiweke hi Board na malembe ya ku tlula 15 ya ntokoto hi ku alavisisa swivutiso swa mbilu.",
      modelType: "stethoscope",
      category: "cardiology",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:sarah.johnson@example.com"
      }
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Mutivi wa Byongo",
      image: "/src/assets/images/doctor2.jpg",
      bio: "Dr. Chen u tiketeke hi swivutiso swa byongo naswona u endlile matirhelo yo tala ya rihanyo.",
      modelType: "medical-device",
      category: "neurology",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:michael.chen@example.com"
      }
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Mutivi wa Marambu",
      image: "/src/assets/images/doctor3.jpg",
      bio: "Dr. Rodriguez i mutivi wa vutshunguri bya mitambo na ku antswisa ka swikwambu, hi ku kongomisa eka matirhelo lama nga na ku tsanduka lokukulu.",
      modelType: "skeleton",
      category: "orthopedics",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:emily.rodriguez@example.com"
      }
    },
    {
      name: "Dr. Robert Thompson",
      specialty: "Mutivi wa Vana",
      image: "/src/assets/images/doctor4.jpg",
      bio: "Dr. Thompson u ve a nyika rihanyo ro vilela eka vana va malembe hinkwawo ku tlula lemalembe ra khume.",
      modelType: "first-aid-kit",
      category: "pediatrics",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:robert.thompson@example.com"
      }
    },
    {
      name: "Dr. Amelia Parker",
      specialty: "Mutivi wa Riya",
      image: "/src/assets/images/doctor1.jpg",
      bio: "Dr. Parker u tiketeke hi ku kambisisa na ku alavisisa swivutiso swa riya hi matirhelo ya sweswi ya vutshunguri bya riya.",
      modelType: "doctor-avatar",
      category: "dermatology",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:amelia.parker@example.com"
      }
    },
    {
      name: "Dr. James Wilson",
      specialty: "Dokotela wa Ndyangu",
      image: "/src/assets/images/doctor2.jpg",
      bio: "Dr. Wilson u nyika rihanyo ro helela ra ku rhangisa eka vayingisi va malembe hinkwawo, hi ku kongomisa eka vutshunguri bya ku sivela.",
      modelType: "pills",
      category: "family-medicine",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:james.wilson@example.com"
      }
    }
  ],

  FEATURED_DOCTOR: {
    role: "Muongozi wa Vativi va vutshunguri",
    name: "Dr. Michael Chen",
    descriptions: [
      "Dr. Chen u rhangeri wa timi ya hina ya vutshunguri hi malembe ya ku tlula 20 ya ntokoto hi vutshunguri bya byongo. U tshembisiwile hi makumu eka ndzavisiso wa yena wa swivutiso swa byongo na matirhelo ya vutumbuluxi ya rihanyo.",
      "Tanihi Muongozi wa hina wa Vativi va vutshunguri, Dr. Chen u tiyisisa leswaku vativi va hina hinkwavo va landzelela swiyimo swa le henhla swa rihanyo ra vutshunguri na ku tshama va twile ku angarhela ka sweswi eka matirhelo ya vona."
    ],
    badges: [
      "U Tiyisisisiwile hi Board",
      "Harvard Medical School", 
      "Ndzavisiso lowu Kandziyisiweke",
      "Malembe ya 20+ ya Ntokoto"
    ],
    button: {
      text: "Xiyimiso xa Burisala",
      icon: "fas fa-calendar-check"
    }
  },

  DOCTOR: {
    name: "Dr. Michael Johnson",
    specialty: "Dokotela wa Rirho ra Mbilu na vutshunguri bya Ntolovelo",
    experience: "Malembe ya 15+ ya Ntokoto hi vutshunguri",
    description: "Dr. Johnson i mutivi wa vutshunguri loyi a tiketeke hi ku nyika rihanyo ro hlawuleka na ro hlayiseka. A swi kombile ku tirhisana na ku antswisa vutomi bya vayingisi va yena hi ku tirhisa matsatsingo ya kisasa na ku pfuna hi mbilu.",

    qualifications: [
      "Doctor of Medicine (MD) - Harvard Medical School",
      "Board Certified hi Internal Medicine",
      "Board Certified hi Cardiology", 
      "Fellow of American College of Cardiology",
      "Master's hi Public Health - Johns Hopkins"
    ],

    experience_details: [
      "Chief of Cardiology - Cape Town General Hospital (2015-2020)",
      "Senior Cardiologist - Groote Schuur Hospital (2012-2015)",
      "Cardiology Fellow - Mayo Clinic, USA (2010-2012)",
      "Internal Medicine Resident - University of Cape Town (2008-2010)",
      "Research Fellow - Harvard T.H. Chan School of Public Health (2007-2008)"
    ],

    specializations: [
      "vutshunguri bya Mbilu bya Vaxindzha",
      "Ku Antswisa ka Mbilu",
      "Rihanyo ra Sikovelo na Cholesterol",
      "Ku Langutera ka Vuvabyi bya Mbilu",
      "vutshunguri bya Ku Sivela",
      "Vulamuriwa bya Telemedicine"
    ],

    languages: ["Xinghezi", "Afrikaans", "isiXhosa", "Xitsonga"],

    philosophy: "Ndzi tshemba eka ku tirhisana na vayingisi ku endla swiboho swa rihanyo leswi endleriweke ku ya hi swilaveko swa vona swo hlawuleka. Xikongomelo xa mina i ku nyika rihanyo ro tiyisa, ro saseka naswona ro fikeleka eka munhu hinkwawo."
  },

  SERVICES: {
    title: "Mintirho ya vutshunguri",
    subtitle: "Mintirho yo angarhela ya vutshunguri leyi kombiweke hi Dr. Johnson",
    items: [
      {
        icon: "fa-heartbeat",
        title: "Ku Kamberiwa ka Mbilu",
        description: "Ku kamberiwa ko helela ka rihanyo ra mbilu na ku languteriwa ka swikombelo swa mbilu"
      },
      {
        icon: "fa-user-md", 
        title: "Ku Kamberiwa ka Rihanyo ra Ntolovelo",
        description: "Ku kamberiwa ka malembe hinkwawo na ku languteriwa ka rihanyo ra ntolovelo"
      },
      {
        icon: "fa-pills",
        title: "Nkanelo wa Mirhi",
        description: "Ku antswisiwa ka mirhi na ku languteriwa ka vuvabyi bya nkarhi hinkwawo"
      },
      {
        icon: "fa-video",
        title: "Vulamuriwa bya Telemedicine",
        description: "Vulamuriwa bya online byo hlayiseka na vativi va vutshunguri"
      },
      {
        icon: "fa-clipboard-list",
        title: "Nkanelo wa Rihanyo",
        description: "Minkanelo yo endleriwa ku hlawula ya rihanyo na vutomi byo saseka"
      },
      {
        icon: "fa-phone-alt",
        title: "Ndhavuko wa Xiphemu",
        description: "Ndhavuko wa 24/7 eka swiphemu swa vutshunguri"
      }
    ]
  },

  APPOINTMENT: {
    title: "Buka Nkarhi na Dr. Johnson",
    subtitle: "Hlawula siku na nkarhi lowu u wu lavaka eka vulamuriwa bya wena",
    
    form: {
      personalInfo: "Mahungu ya Munhu",
      firstName: "Vito ra Kurhula",
      lastName: "Vito ra Nkoka", 
      email: "Emeyili",
      phone: "Nomboro ya Rifoni",
      dateOfBirth: "Siku ra ku Velekiwa",
      
      appointmentDetails: "Vuxokoxoko bya Nkarhi",
      preferredDate: "Siku leri Laviwaka",
      preferredTime: "Nkarhi lowu Laviwaka",
      appointmentType: "Mhaka ya Nkarhi",
      reasonForVisit: "Ntiyiso lowu Etlela",
      
      emergencyContact: "Hlanganisi wa Xiphemu",
      emergencyName: "Vito ra Hlanganisi wa Xiphemu",
      emergencyPhone: "Nomboro ya Rifoni ya Xiphemu",
      relationship: "Vuxaka",
      
      medicalHistory: "Matimu ya vutshunguri",
      currentMedications: "Mirhi leyi Tirhisiwaka Sweswi",
      allergies: "Swilo leswi Nga Pfumaleki",
      previousSurgeries: "Ku Antswisiwa ko Hundza",
      
      insurance: "Insurance",
      insuranceProvider: "Munyikeli wa Insurance",
      policyNumber: "Nomboro ya Policy",
      
      additionalNotes: "Matsalwa yo Engetela"
    },

    timeSlots: {
      morning: "Nimixo (8:00 AM - 12:00 PM)",
      afternoon: "Rifu (1:00 PM - 5:00 PM)", 
      evening: "Madyambu (6:00 PM - 8:00 PM)"
    },

    appointmentTypes: [
      "Ku Kamberiwa ka Ntolovelo",
      "Vulamuriwa bya Ku Landzelela", 
      "Ku Kamberiwa ka Mbilu",
      "Vulamuriwa bya Telemedicine",
      "Xiphemu xa vutshunguri",
      "Ku Kamberiwa ka vutshunguri bya Vana",
      "Vulamuriwa bya Vusiwana"
    ]
  },

  CONTACT: {
    title: "Hlanganisani na Dr. Johnson",
    subtitle: "Hi ri laha ku ku pfuna. Hlanganisani na hina hi ndlela leyi landzelaka",
    
    office: {
      title: "Hofisi ya Nkoka",
      address: "123 Medical Centre Drive, Cape Town, 8001",
      phone: "(021) 123-4567",
      email: "info@drjohnson.co.za",
      hours: "Musumbhunuku - Ravuntlhanu: 8:00 AM - 6:00 PM"
    },

    emergency: {
      title: "Xiphemu xa vutshunguri",
      description: "Eka swiphemu swa vutshunguri, fonela ndhavuko wa xiphemu hi ku hatlisa",
      phone: "10177",
      note: "Eka ku nga ri ka xiphemu, tirhisa minomboro ya ntolovelo ya hofisi"
    }
  },

  TESTIMONIALS: {
    title: "Leswi Vayingisi va Hina va Vulaka",
    subtitle: "Dyondza hi vutshila bya Dr. Johnson ku suka eka vayingisi va yena"
  }
};