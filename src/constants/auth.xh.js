// Authentication constants - isiXhosa
export const AUTH_XH = {
  // Login Page
  LOGIN: {
    title: "Wamkelekile Kwakhona",
    subtitle: "Ngena kwi-akhawunti yakho ukuze ufikelele kwi-dashboard yakho yonyango",
    
    FORM: {
      email: {
        label: "I-email Address",
        placeholder: "Faka i-email yakho"
      },
      password: {
        label: "I-password",
        placeholder: "Faka i-password yakho"
      },
      rememberMe: "Ndikhumbule",
      forgotPassword: "Uyalibala i-Password?",
      submit: "Ngena"
    },
    
    FOOTER: {
      noAccount: "Awunayo i-akhawunti?",
      signUpLink: "Zibhalise apha",
      backToHome: "Buyela Ekhaya"
    }
  },
  
  // Signup Page
  SIGNUP: {
    title: "Yenza i-Akhawunti",
    subtitle: "Joyina iqonga lethu lempilo ukuze ufikelele kwiinkonzo zonyango ezikhethekileyo",
    
    FORM: {
      firstName: {
        label: "Igama Lokuqala",
        placeholder: "Faka igama lakho lokuqala"
      },
      lastName: {
        label: "Ifani",
        placeholder: "Faka ifani yakho"
      },
      email: {
        label: "I-email Address",
        placeholder: "Faka i-email yakho"
      },
      phone: {
        label: "Inombolo Yomnxeba",
        placeholder: "Faka inombolo yakho yomnxeba"
      },
      password: {
        label: "I-password",
        placeholder: "Yenza i-password"
      },
      confirmPassword: {
        label: "Qinisekisa i-Password",
        placeholder: "Qinisekisa i-password yakho"
      },
      preferredLanguage: {
        label: "Ulwimi Oludulweyo",
        options: {
          en: "IsiNgesi",
          xh: "isiXhosa",
          ts: "XiTsonga"
        }
      },
      terms: "Ndiyavuma iMigaqo yeNkonzo kunye nePolisi yaBucala",
      submit: "Yenza i-Akhawunti"
    },
    
    FOOTER: {
      hasAccount: "Sele unayo i-akhawunti?",
      signInLink: "Ngena apha",
      backToHome: "Buyela Ekhaya"
    }
  },
  
  // Dashboard Page
  DASHBOARD: {
    welcome: {
      title: "Wamkelekile kwakhona, {name}!",
      subtitle: "Nanku uburhweqe bwe-dashboard yakho yempilo"
    },
    
    CARDS: {
      appointments: {
        title: "Ii-Appointments",
        content: "I-appointment elandelayo"
      },
      prescriptions: {
        title: "Imiyalelo Yoorongrrha", 
        content: "imiyalelo esebenzayo"
      },
      reports: {
        title: "Iingxelo Zonyango",
        content: "iingxelo ziyafumaneka"
      },
      health: {
        title: "Isimo Sempilo",
        content: "Zonke iimpawu eziphilayo zikulungileyo"
      }
    },
    
    profile: {
      title: "Ulwazi Lweprofayili",
      fields: {
        fullName: "Igama Elipheleleyo",
        email: "I-email", 
        phone: "Umnxeba",
        language: "Ulwimi Oludulweyo",
        memberSince: "Ilungu Ukusukela",
        lastVisit: "Ukutyelela Kokugqibela",
        bloodType: "Uhlobo Lwegazi",
        emergencyContact: "Unxibelelwano Lwengxanyangwa"
      },
      languages: {
        english: "IsiNgesi",
        xhosa: "isiXhosa",
        tsonga: "Xitsonga", 
        englishDefault: "IsiNgesi (Okuzenzekelayo)"
      },
      notProvided: "Alunikiwe",
      unknown: "Alwaziwa"
    },
    
    actions: {
      editProfile: "Hlela Iprofayili",
      medicalHistory: "Imbali Yonyango", 
      bookAppointment: "Bhuka I-Appointment",
      logout: "Phuma"
    },
    
    MODALS: {
      editProfile: {
        title: "Hlela Iprofayili",
        save: "Gcina Utshintsho",
        cancel: "Rhoxisa",
        saving: "Iyagcina..."
      },
      
      medicalHistory: {
        title: "Imbali Yonyango",
        close: "Vala",
        allergies: "Izinto Ezingavumelaniyo",
        medications: "Amayeza Okwangoku",
        conditions: "Iimeko Zonyango",
        insurance: "I-insurance",
        emergencyContact: "Unxibelelwano Lwengxanyangwa",
        noData: {
          allergies: "Akukho zinto zingavumelaniyo zirekhodiwe",
          medications: "Akukho mayeza arekhodiwe",
          conditions: "Akukho meko zirekhodiwe",
          insurance: "Akukho lwazi lwe-insurance",
          emergencyContact: "Akukho nxibelelwano lwengxanyangwa"
        }
      },
      
      bookAppointment: {
        title: "Bhukisha i-Appointment",
        book: "Bhukisha i-Appointment",
        cancel: "Rhoxisa",
        
        FIELDS: {
          date: "Umhla",
          time: "Ixesha",
          type: "Uhlobo lwe-Appointment",
          notes: "Amanqaku",
          notesPlaceholder: "Naziphi na iinkxalabo ezithile okanye amanqaku..."
        },
        
        TYPES: {
          consultation: "Ingxoxo Jikelele",
          checkup: "Ukujonga Rhoqo",
          followup: "Ukulandela",
          emergency: "Ingxanyangwa"
        }
      }
    },
    
    MEDICAL_FORMS: {
      title: "Ulwazi Lonyango",
      subtitle: "Hlaziya ulwazi lwakho lonyango",
      
      TABS: {
        basic: "Ulwazi Olusisiseko",
        medical: "Imbali Yonyango",
        emergency: "Ingxanyangwa ne-Insurance",
        lifestyle: "Indlela Yokuphila"
      },
      
      MESSAGES: {
        success: "Ulwazi lonyango luhlaziywe ngempumelelo!",
        authRequired: "Kufuneka ube ufakile igama lakho ukuze uhlaziye ulwazi lonyango. Nceda ungene uze uzame kwakhona.",
        sessionExpired: "Iseshoni yakho iphelelwe lixesha. Nceda ungene kwakhona.",
        userNotFound: "Umsebenzisi akafumaneki. Nceda unxibelelane nenkxaso.",
        networkError: "Impazamo yenethiwekhi. Nceda uzame kwakhona.",
        serverError: "Impazamo yeseva:"
      },
      
      BUTTONS: {
        save: "Gcina Ulwazi",
        saving: "Iyagcina...",
        cancel: "Rhoxisa"
      }
    }
  },
  
  // Common Messages
  MESSAGES: {
    loading: "Iyalowuda...",
    error: "Kwenzeke impazamo",
    success: "Impumelelo",
    networkError: "Impazamo yonxibelelwano lwenethiwekhi",
    serverError: "Impazamo yeseva",
    validationError: "Nceda ujonge into oyifakileyo",
    unauthorized: "Akuvumelekanga ukufikelela",
    sessionExpired: "Iseshoni yakho iphelelwe lixesha. Nceda ungene kwakhona."
  }
};