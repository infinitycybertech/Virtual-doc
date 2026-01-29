// Appointment page constants - Xhosa Translation
export const APPOINTMENT_XH = {
  HERO: {
    title: "Bhuka udibano lonyango lwakho lwezempilo",
    subtitle: "Khetha ususku ozozdibana ngalo nge nethiwekhi ye-Medicare yababoneleli yempilo usebenzisa ifomu yethu elula kwi-intanethi. Khetha unxibelelwano olusemnxebeni, utyelelo lwasekhaya, ukubhuka i klinikhi."
  },

  FORM: {
    title: "Bhuka uDibano Lwakho",
    
    APPOINTMENT_TYPES: {
      inPerson: "Udibano Lobuqu",
      virtual: "Intetho ngeVidiyo", 
      homeVisit: "Utyelelo Ekhaya"
    },

    FIELDS: {
      fullName: {
        label: "Igama Elipheleleyo*",
        placeholder: "Ngenisa igama lakho elipheleleyo"
      },
      email: {
        label: "IDilesi ye-imeyili*",
        placeholder: "Ngenisa i-imeyili yakho"
      },
      phone: {
        label: "INombolo yoMnxeba*",
        placeholder: "Ngenisa inombolo yakho yomnxeba"
      },
      dateOfBirth: {
        label: "Umhla wokuzalwa"
      },
      preferredDate: {
        label: "Umhla oKhetha Wona*"
      },
      preferredTime: {
        label: "Ixesha oLikhetha*",
        placeholder: "Khetha ixesha",
        options: {
          morning: "Kusasa (9AM - 12PM)",
          afternoon: "Emva kwemini (1PM - 5PM)",
          evening: "Ngokuhlwa (6PM - 8PM)"
        }
      },
      platform: {
        label: "Iqonga oLikhetha",
        options: {
          zoom: "Zoom",
          teams: "Microsoft Teams",
          googleMeet: "Google Meet",
          facetime: "FaceTime (izixhobo ze-iOS kuphela)"
        }
      },
      nearbyDoctors: "Fumana amaZiko ezoNyango ooGqirha abasondeleyo",
      homeVisitDoctors: "Khetha uGqirha osondeleyo & Cela uTyelelo Ekhaya",
      homeAddress: {
        label: "IDilesi yoTyelelo Ekhaya*",
        placeholder: "Nceda ungenise idilesi yakho epheleleyo kubandakanya isitalato, isixeko, nekhowudi yeposi",
        note: "Qinisekisa ukuba idilesi ichanekile ukuze ugqirha akwazi ukukufumana ngokulula"
      },
      reasonForVisit: {
        label: "Isizathu soTyelelo",
        placeholder: "Nceda uchaze iimpawu zakho okanye isizathu sokubhuka"
      }
    },

    DOCTOR_SELECTION: {
      selectedDoctor: "UGqirha oKhethiweyo:",
      specialty: "Ubugcisa:",
      distance: "Umgama:",
      inPersonConfirmation: "Udibano lobuqu luqinisekisiwe kwiziko lonyango",
      homeVisitRequested: "Utyelelo ekhaya luceliwe - siya kuqhagamshelana nawe kwimizuzu engama-30 ukuqinisekisa!",
      homeVisitAlert: "Utyelelo ekhaya luceliwe no-{doctorName}. Siya kuqhagamshelana nawe kwimizuzu engama-30 ukuqinisekisa."
    },

    SUBMIT_BUTTON: "Bhuka uDibano"
  },

  SIDE_INFO: {
    title: "Ulwazi ngoDibano",
    description: "Ukucwangciswa ukudibana kunye nababoneleli ngezempilo kaMedicare ngokukhawuleza nobalula. Khetha phakathi kotyelelo lomntu kwiziko lezonyango elikufuphi, intetho ebonakalayo ukwi khaya lakho, okanye ucele utyelelo lwasekhaya apho ugqirha  okanye umongikazi aza kuwe.",

    MODEL_TITLES: {
      inPerson: "Intetho yoBuqu",
      homeVisit: "iNkonzo yoTyelelo Ekhaya", 
      virtual: "Intetho ngeVidiyo"
    },

    MODEL_DESCRIPTIONS: {
      inPerson: "Tyelela iziko lethu lonyango lesobuchule",
      homeVisit: "Ugqirha uza kuwe", 
      virtual: "Nxibelelana noDr. Johnson usekhaya lakho"
    },

    HOW_IT_WORKS: {
      title: "Indlela eSebenza Ngayo",
      steps: [
        {
          number: 1,
          title: "Gcwalisa iFomu",
          description: "Gcwalisa ifomu yesicelo sodibano nolwazi lwakho lobuqu nexesha olikhetha."
        },
        {
          number: 2,
          title: "Isiqinisekiso",
          description: "Fumana i-imeyili yesiqinisekiso eneenkcukacha zodibano lwakho nayo nayiphi na imiyalelo yangaphambi kotyelelo."
        },
        {
          number: 3,
          title: "Isikhumbuzo",
          description: "Fumana isaziso sesikhumbuzo kwiiyure ezingama-24 ngaphambi kodibano lwakho olucwangcisiweyo."
        },
        {
          number: 4,
          title: "uTyelelo Lwakho",
          description:"Fika kwiziko lezonyango, fumana utyelelo lwakho lwasekhaya, okanye uqhagamshele phantse ixesha lakho elicwangcisiweyo ukuze udibane nomboneleli wakho wezempilo obelweyo."
        }
      ]
    },

    INFO_BOXES: {
      insurance: {
        title: "Ulwazi ngeNshorensi",
        content: "Samkela uninzi lweeplani zeenshorensi eziphambili. Nceda uzise ikhadi lakho leenshorensi xa uza kudibana okanye ube nalo ngexesha lentetho yakho ngevidiyo."
      },
      policy: {
        title: "Umgaqo wokuFika Emva kweXesha okanye wokuRhoxisa",
        content: "Nceda usazise ubuncinane kwiiyure ezingama-24 ngaphambi kokuba ulufake okanye ulucwangcise kwakhona. Amadibano alahlekileyo ngaphandle kwesaziso anokubiza imali."
      }
    }
  },

  FAQ: {
    title: "Imibuzo eBuzwa Rhoqo",
    subtitle: "Imibuzo eQhelekileyo ngamaDibano",
    items: [
      {
        question: "Yintoni ekufuneka ndize nayo kudibano lwam?",
        answer: "Nceda uzise isazisi sakho, ikhadi leinshorensi, uluhlu lwamayeza akhoyo, nayo nayiphi na irekhodi yezonyango okanye iziphumo zovavanyo ezivela kwabanye ababoneleli."
      },
      {
        question: "Ndifanele ndifike kangakanani ngaphambi kodibano lwam?",
        answer: "Kwizigulane ezintsha, nceda ufike kwiminiti eli-15 ngaphambi kwexesha lakho lokucwangciswa ukugqiba nayiphi na iphepha elifunekayo. Izigulane ezibuyayo kufuneka zifike kwiminiti emi-5-10 ngaphambi."
      },
      {
        question: "Kuthekani ukuba ndifuna ukucwangcisa kwakhona udibano lwam?",
        answer: "Nceda ubize iofisi yethu ubuncinane kwiiyure ezingama-24 ngaphambi kokucwangcisa kwakhona. Unokusebenzisa neportal yethu ye-intanethi ukutshintsha ixesha lodibano lwakho ukuba liyafumaneka."
      },
      {
        question: "Iintetho ngevidiyo zisebenza njani?",
        answer: "Kwiintetho ngevidiyo, uya kufumana ikhongolose yokujoyina ucingo lwevidiyo olukhuselekileyo ngexesha lakho olucwangcisiweyo. Uya kufuna isixhobo esine-intanethi, ikhamera, nemicrofoni."
      }
    ]
  }
};