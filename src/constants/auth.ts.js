// Authentication constants - Xitsonga
export const AUTH_TS = {
  // Login Page
  LOGIN: {
    title: "Ku Tiyamukelaki Kumbe",
    subtitle: "Ngena eka akhawunti ya wena ku kuma dashboard ya wena ya vutshunguri",
    
    FORM: {
      email: {
        label: "Adirese ya Email",
        placeholder: "Nghenisa email ya wena"
      },
      password: {
        label: "Password",
        placeholder: "Nghenisa password ya wena"
      },
      rememberMe: "Ndi tsundzuke",
      forgotPassword: "U ribalile Password?",
      submit: "Ngena"
    },
    
    FOOTER: {
      noAccount: "A wu na akhawunti?",
      signUpLink: "Tsarisela laha",
      backToHome: "Buyela Ekaya"
    }
  },
  
  // Signup Page
  SIGNUP: {
    title: "Endla Akhawunti",
    subtitle: "Joyina pulatifomo ya hina ya rihanyo ku kuma vukorhokeri bya munhu hi xiyexe",
    
    FORM: {
      firstName: {
        label: "Vito ra Sungula",
        placeholder: "Nghenisa vito ra wena ra sungula"
      },
      lastName: {
        label: "Vito ra Ribye",
        placeholder: "Nghenisa vito ra wena ra ribye"
      },
      email: {
        label: "Adirese ya Email",
        placeholder: "Nghenisa email ya wena"
      },
      phone: {
        label: "Nomboro ya Riqingho",
        placeholder: "Nghenisa nomboro ya wena ya riqingho"
      },
      password: {
        label: "Password",
        placeholder: "Endla password"
      },
      confirmPassword: {
        label: "Tiyisisa Password",
        placeholder: "Tiyisisa password ya wena"
      },
      preferredLanguage: {
        label: "Ririmi leri Rhandzekanaka",
        options: {
          en: "Xinghezi",
          xh: "XiXhosa",
          ts: "XiTsonga"
        }
      },
      terms: "Ndzi pfumelelana na Migingiriko ya Vukorhokeri na Politiki ya le Xihundleni",
      submit: "Endla Akhawunti"
    },
    
    FOOTER: {
      hasAccount: "Se u na akhawunti?",
      signInLink: "Ngena laha",
      backToHome: "Buyela Ekaya"
    }
  },
  
  // Dashboard Page
  DASHBOARD: {
    welcome: {
      title: "Ku tiyamukelaki kumbe, {name}!",
      subtitle: "Hi leswi ku kongoma ka dashboard ya wena ya rihanyo"
    },
    
    CARDS: {
      appointments: {
        title: "Swikombelo",
        content: "Nkombelo wo landzelaka"
      },
      prescriptions: {
        title: "Switsundzuxo swa Mirhi", 
        content: "switsundzuxo leswi tirhisaka"
      },
      reports: {
        title: "Swiviko swa Vutshunguri",
        content: "swiviko swi kumeka"
      },
      health: {
        title: "Rivilo ra Rihanyo",
        content: "Swikombiso hinkwaswo swa vutomi swi lulamile"
      }
    },
    
    profile: {
      title: "Mahungu ya Profayili",
      fields: {
        fullName: "Vito ra Kotsa",
        email: "Email", 
        phone: "Riqingho",
        language: "Ririmi leri Rhandzekanaka",
        memberSince: "Muaki kusukela",
        lastVisit: "Ku endzela ka Makumu",
        bloodType: "Muxaka wa Ngati",
        emergencyContact: "Vuhlanganisi bya Xihlamariso"
      },
      languages: {
        english: "Xinghezi",
        xhosa: "isiXhosa",
        tsonga: "Xitsonga", 
        englishDefault: "Xinghezi (Xitumbuluxo)"
      },
      notProvided: "A swi nyikiwangi",
      unknown: "A swi tiveki"
    },
    
    actions: {
      editProfile: "Lulamisa Profayili",
      medicalHistory: "Matimu ya Vutshunguri", 
      bookAppointment: "Hlaya Nkombelo",
      logout: "Huma"
    },
    
    MODALS: {
      editProfile: {
        title: "Lunghisa Profayili",
        save: "Hlayisa Ku Cinca",
        cancel: "Ku Herisa",
        saving: "Yi hlayisa..."
      },
      
      medicalHistory: {
        title: "Matimu ya Vutshunguri",
        close: "Pfala",
        allergies: "Swilo leswi nga Pfumelelangiki",
        medications: "Mirhi ya Sweswi",
        conditions: "Swiyimo swa Vutshunguri",
        insurance: "Inxurense",
        emergencyContact: "Vuhlanganisi bya Xihlamariso",
        noData: {
          allergies: "Ku hava swilo leswi nga pfumelelangiki leswi tsariweke",
          medications: "Ku hava mirhi leyi tsariweke",
          conditions: "Ku hava swiyimo leswi tsariweke",
          insurance: "Ku hava vumundzuku bya inxurense",
          emergencyContact: "Ku hava vuhlanganisi bya xihlamariso"
        }
      },
      
      bookAppointment: {
        title: "Buka Nkombelo",
        book: "Buka Nkombelo",
        cancel: "Ku Herisa",
        
        FIELDS: {
          date: "Siku",
          time: "Nkarhi",
          type: "Muxaka wa Nkombelo",
          notes: "Switsalwa",
          notesPlaceholder: "Swiphiqo swin'wana kumbe switsalwa..."
        },
        
        TYPES: {
          consultation: "Burisano ra Hinkwaro",
          checkup: "Ku Kambela ka Ntolovelo",
          followup: "Ku Landzelela",
          emergency: "Xihlamariso"
        }
      }
    },
    
    MEDICAL_FORMS: {
      title: "Vumundzuku bya Vutshunguri",
      subtitle: "Antswisisa vumundzuku bya wena bya vutshunguri",
      
      TABS: {
        basic: "Vumundzuku bya Vuswa",
        medical: "Matimu ya Vutshunguri",
        emergency: "Xihlamariso na Inxurense",
        lifestyle: "Mavabyi ya Vutomi"
      },
      
      MESSAGES: {
        success: "Vumundzuku bya vutshunguri byi antswisiwile hi ku humelela!",
        authRequired: "U fanele u nga kona u ta nghenisa vumundzuku bya vutshunguri. Hi kombela u ngena u ringeta nakambe.",
        sessionExpired: "Sesioni ya wena yi helerile. Hi kombela u ngena nakambe.",
        userNotFound: "Mutirhisi a nga kumeki. Hi kombela u hlanganisa na nseketelo.",
        networkError: "Xihoxo xa network. Hi kombela u ringeta nakambe.",
        serverError: "Xihoxo xa sevara:"
      },
      
      BUTTONS: {
        save: "Hlayisa Vumundzuku",
        saving: "Yi hlayisa...",
        cancel: "Ku Herisa"
      }
    }
  },
  
  // Common Messages
  MESSAGES: {
    loading: "Yi rowa...",
    error: "Ku humelele xihoxo",
    success: "Ku humelela",
    networkError: "Xihoxo xa vuhlanganisi bya network",
    serverError: "Xihoxo xa sevara",
    validationError: "Hi kombela u kambela leswi u swi ngheniseke",
    unauthorized: "A wu nga pfumeleriwangi ku ngena",
    sessionExpired: "Sesioni ya wena yi helerile. Hi kombela u ngena nakambe."
  }
};