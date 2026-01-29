// Appointment page constants - Tsonga Translation  
export const APPOINTMENT_TS = {
  HERO: {
    title: "Buka nkarhi wa wena wa nhlayiso wa rihanyo .",
    subtitle: "Hlela ku hlangana ka wena hi netiweke ya Medicare ya vaphakeri va nhlayiso wa rihanyo hi ku tirhisa fomo ya hina yo olova ya inthanete. Hlawula eka ku burisana ka xiviri, ku endzela ekaya, kumbe ku hlela ka tliliniki."
  },

  FORM: {
    title: "Buka Nkarhi wa Wena",
    
    APPOINTMENT_TYPES: {
      inPerson: "Ku endzela ka munhu hi yexe",
      virtual: "Ku burisana hi vidiyo", 
      homeVisit: "Ku endzela ekaya"
    },

    FIELDS: {
      fullName: {
        label: "Vito leri heleleke*",
        placeholder: "Nghenisa vito ra wena leri heleleke"
      },
      email: {
        label: "Adirese ya imeyili*",
        placeholder: "Nghenisa imeyili ya wena"
      },
      phone: {
        label: "Nomboro ya riqingho*",
        placeholder: "Nghenisa nomboro ya wena ya riqingho"
      },
      dateOfBirth: {
        label: "Siku ra ku velekiwa*"
      },
      preferredDate: {
        label: "Siku leri u ri Lavaka"
      },
      preferredTime: {
        label: "Nkarhi lowu u wu Lavaka*",
        placeholder: "Hlawula nkarhi",
        options: {
          morning: "Mixo (9AM - 12PM)",
          afternoon: "Nhlekani (1PM - 5PM)",
          evening: "Madyambu (6PM - 8PM)"
        }
      },
      platform: {
        label: "Xitandi lexi u xi Lavaka",
        options: {
          zoom: "Zoom",
          teams: "Microsoft Teams",
          googleMeet: "Google Meet",
          facetime: "FaceTime (switirhisiwa swa iOS ntsena)"
        }
      },
      nearbyDoctors: "Kuma tisenthara ta swa vutshunguri leti nga ekusuhi na madokodela .",
      homeVisitDoctors: "Hlawula Dokotela wa Kona & Kombela kiri aku endzela ekaya",
      homeAddress: {
        label: "Adirese ya Ku endzela ekaya*",
        placeholder: "Hi kombela u nghenisa adirese ya wena yo hetiseka ku katsa na xitarata, doroba, na kodi ya poso",
        note: "Tiyiseka leswaku adirese yi lulamile ku leswaku dokotela a ta kota ku ku kuma hi ku olova"
      },
      reasonForVisit: {
        label: "Hikokwalaho ka yini u lava ku endzeriwa",
        placeholder: "Hi kombela u hlamusela swivangelo kumbe xikongomelo xa ku buka"
      }
    },

    DOCTOR_SELECTION: {
      selectedDoctor: "Dokotela loyi a Hlawuleke:",
      specialty: "Ntolovelo:",
      distance: "Mpfuka:",
      inPersonConfirmation: "Ku vonana hi munhu ku tiyisisekile eka xikolo xa rihanyo",
      homeVisitRequested: "Ku etlela ekhaya ku kombetiwile - hi ta ku fonela ehenhla ka 30 ta miniti ku tiyisisa!",
      homeVisitAlert: "Ku etlela ekhaya ku kombetiwile na {doctorName}. Hi ta ku fonela ehenhla ka 30 ta miniti ku tiyisisa."
    },

    SUBMIT_BUTTON: "Buka Nkarhi"
  },

  SIDE_INFO: {
    title: "Vuxokoxoko bya hlengeletano",
    description: "Ku hlela nkarhi na vaphakeri va nhlayiso wa rihanyo va Medicare swa hatlisa naswona swa olova. Hlawula exikarhi ka riendzo ra munhu hi xiyexe eka senthara ya swa vutshunguri ya le kusuhi, ku vulavurisana ka xiviri ku suka eka vuhlayiseki bya le kaya ra wena, kutani u kombela ku endzela ekaya laha dokodela kumbe muongori la fanelekaka a taka eka wena.",

    MODEL_TITLES: {
      inPerson: "Ku endzela ka munhu hi yexe",
      homeVisit: "Ku endzela ekaya", 
      virtual: "Burisano hi vidiyo"
    },

    MODEL_DESCRIPTIONS: {
      inPerson: "Endzela ndhwawu ya hina ya swa rihanyo xa xiyimo xa le henhla",
      homeVisit: "Dokotela u ta endzela wena", 
      virtual: "Hlangana na rinwana rama madokodela ya hina uri karhi u tirhisa vidiyo uri ekanwina"
    },

    HOW_IT_WORKS: {
      title: "Ndlela leyi Switirhaka hi yona",
      steps: [
        {
          number: 1,
          title: "Tata Fomo",
          description: "Tata fomo ya ku kombela nkarhi na mahungu ya wena ya munhu na siku/nkarhi lowu u wu lavaka."
        },
        {
          number: 2,
          title: "Ku Tiyisisa",
          description: "Amukela email ya ku tiyisisa na mahungu ya nkarhi wa wena na swileriso swo ya emahlweni."
        },
        {
          number: 3,
          title: "Ku Tsundzuxa",
          description: "Amukela nhlamuselo ya ku tsundzuxa ka dimawe ra 24 ku ya emahlweni ka nkarhi lowu u wu hlawuleke."
        },
        {
          number: 4,
          title: "Ku endzela ka Wena",
          description: "Fika xiyimisiwa xa hina kumbe uti hlanganisana hi video eka nkarhi lowu u wu hlawuleke ku hlangana na rinwana ra madokodela"
        }
      ]
    },

    INFO_BOXES: {
      insurance: {
        title: "Mahungu ya Insurance",
        content: "Hi amukela tipulani to tala ta insurance ta nkoka. Hi kombela u tlhela na khadi ya wena ya insurance eka nkarhi wa wena kumbe u yi endla leswaku yi kumeka loko u ri na vulamuriwa bya video."
      },
      policy: {
        title: "Puliseni ya ku Nongolosela kumbe ku Kandziyisa",
        content: "Hi kombela u hi tivisa kambe dimawe ra 24 loko u lava ku kandziyisa kumbe ku cinca nkarhi. Minkarhi leyi mi nongolosiweke handle ka nhlamuselo yi nga va na xiphemu."
      }
    }
  },

  FAQ: {
    title: "Mibuzo leyi Buziwaka Ngopfu",
    subtitle: "Mibuzo ya Ntolovelo mayelana na Minkarhi",
    items: [
      {
        question: "Xana ndzi fanele ku tlhela na yini eka nkarhi wa mina?",
        answer: "Hi kombela u tlhela na ID ya wena, khadi ya insurance, nxaxamelo wa mirhi leyi u yi tirhisaka sweswi, na minuku ya rihanyo kumbe mbuyelo wa timhaka ku suka eka van'wana lava nyikaka vukorhokeri."
      },
      {
        question: "Xana ndzi fanele ku fika hakandza kwihi eka nkarhi wa mina?",
        answer: "Eka vayingisi lavantshwa, hi kombela u fika ka timiniiti ta 15 ku ya emahlweni ka nkarhi lowu u wu hlawuleke ku hetisa maphepha hinkwawo lama lavekaka. Vayingisi lava vuyaka va fanele ku fika ka timiniiti ta 5-10 hakandza."
      },
      {
        question: "Xana loko ndzi lava ku cinca nkarhi wa mina?",
        answer: "Hi kombela u fonela hofisi ya hina kambe dimawe ra 24 ku ya emahlweni ku cinca nkarhi. U nga ha tirhisa na portal ya hina ya online ku cinca nkarhi wa wena loko wu kumeka."
      },
      {
        question: "Xana vulamuriwa bya video byi tirhaka njhani?",
        answer: "Eka vulamuriwa bya video, u ta amukela link yo nghena eka ku bulelana ka video ko sirheleka eka nkarhi lowu u wu hlawuleke. U ta lava xitirhisiwa lexi nga na internet, khamara, na microphone."
      }
    ]
  }
};