// Home page constants - Tsonga Translation
export const HOME_PAGE_TS = {
  HERO: {
    badge: {
      icon: 'fas fa-stethoscope',
      text: 'Vulamuriwa bya vutshunguri '
    },
    heading: 'Vutivi wa Rihanyo wa Vutshila na Medi.Care.',
    highlightedWord: 'Medi.Care',
    subheading: 'Tihlanganisi na madokodela ni vaongori lava faneleke eka Inthanete leswaku va kuma switsundzuxo swa vutshunguri leswi endleriweke munhu hi xiyexe, buka maendzo ya le kaya kumbe ku hlela nkarhi wa kuya etliliniki. Tirhekhodo ta wena ta rihanyo ti hlayisiwa hi ndlela leyi sirhelelekeke leswaku u kuma vukorhokeri lebyi nga riki na swiphiqo. ',
    buttons: {
      primary: {
        text: 'Sungula ku burisana .',
        icon: 'fas fa-comment-medical'
      },
      secondary: {
        text: 'Buka nkarhi wo hlangana',
        icon: 'fas fa-calendar-check',
        href: '/appointment'
      }
    }
  },

  DOCTOR_INFO: {
    title: 'Mayelana na pulatifomo ya Medicare',
    highlightedWord: 'Mayelana na pilatifomo ya Medicare',
    descriptions: [
      'Medicare i xitshunxo xa wena xa nhlayiso wa rihanyo wa xiviri lexi heleleke lexi ku hlanganisaka na madokodela na vaongori lava faneleke ku suka kunwana na kunwana. Pulatifomo ya hina yi nyika ku burisana loku sirhelelekeke eka inthanete, ku endzela ekaya loku olovaka, na ku hlangana ka titliliniki hinkwaswo endhawini yinwe.',
      'Hi Medicare tirhekhodo ta wena ta swa vutshunguri ti hlayisiwa hi ndlela leyi hlayisekeke eka database ya hina leyi sirhelelekeke, leswi endlaka leswaku swi olovela vaphakeri va nhlayiso wa rihanyo ku fikelela matimu ya wena na ku nyika vukorhokeri bya munhu hi xiyexe. Tiva nhlayiso wa rihanyo lowu pfumelelanaka na vutomi bya wena na swilaveko swa wena.'
    ],
    specialties: [
      {
        icon: 'fas fa-heart',
        text: 'Ku burisana hi xiviri .'
      },
      {
        icon: 'fas fa-brain',
        text: 'Ku Endzela Kaya .'
      },
      {
        icon: 'fas fa-lungs',
        text: 'Ku hlela ka tliliniki .'
      },
      {
        icon: 'fas fa-stethoscope',
        text: 'Tirhekhodo ta swa Vutshunguri leti Sirhelelekeke .'
      }
    ],
    button: {
      text: 'Dyondza swo tala hi Medicare .',
      icon: 'fas fa-user-md',
      href: '/about'
    }
  },

  SERVICES: {
    title: 'Vukorhokeri bya hina .',
    highlightedWord: 'Vukorhokeri bya hina .',
    subtitle: 'Medicare yi nyika vukorhokeri bya nhlayiso wa rihanyo bya xiviri lebyi heleleke lebyi ku hlanganisaka na vatirhi va swa vutshunguri lava faneleke eka nhlayiso wa munhu hi xiyexe na mfikelelo wo olova wa nhlayiso wa rihanyo.',
    cards: [
      {
        icon: 'fas fa-heartbeat',
        title: 'Ku burisana hi le ka inthanete .',
        description: 'Tihlanganise na madokodela na vaongori lava nga na layisense hi ku tirhisa burisano lebyi sirhelekeke ku kuma switsundzuxo swa vutshunguri swa xihatla na switsundzuxo swa vutshunguri.',
        modelType: 'stethoscope'
      },
      {
        icon: 'fas fa-bone',
        title: 'Ku endzela ka swa vutshunguri .',
        description:'Buka vatirhi va nhlayiso wa rihanyo lava faneleke ku endzela kaya ra wena endzeni ka rhediyasi ya wena ku kuma swikambelo swa vutshunguri leswi heleleke na vutshunguri kutani u ya etliliniki ya le kusuhi.',
        modelType: 'skeleton'
      },
      {
        icon: 'fas fa-brain',
        title: 'Tirhekhodo ta Rihanyo ra Dijitali.',
        description: 'Matimu ya wena ya swa vutshunguri lama heleleke lama hlayisiweke hi ndlela leyi sirhelelekeke eka database ya hina naswona ya fikeleleka eka vaphakeri va wena va nhlayiso wa rihanyo eka nhlayiso lowu yaka emahlweni.',
        modelType: 'medical-device'
      }
    ]
  },

  STATS: [
    { number: '500+', label: 'Vayingisi lava Pfumeleriweke' },
    { number: '15+', label: 'Malembe ya Ntokoto' },
    { number: '98%', label: 'Xiphemu xa Ku Tsakisiwa' },
    { number: '24/7', label: 'Ku Kumeka' }
  ],

  SERVICES_PREVIEW: {
    title: 'Mintirho ya Hina ya Nkoka',
    subtitle: 'Rihanyo ro tiyiseka na rihanyo ro hlayiseka',
    services: [
      {
        title: 'Rihanyo ra Mbilu',
        description: 'Rihanyo ro helela ra vuvabyi bya mbilu na ku kambisisa ko anama',
        icon: 'fa-heart'
      },
      {
        title: 'Rihanyo ra Byongo',
        description: 'Rihanyo ro hlayiseka ra vuvabyi bya byongo na swilo leswi hlanganaka na mianakanyo',
        icon: 'fa-brain' 
      },
      {
        title: 'Rihanyo ra Marambu',
        description: 'Rihanyo ro tiyiseka ra ku vava ka marambu na ku antswisa ka vayingisi',
        icon: 'fa-bone'
      }
    ]
  },

  ABOUT_PREVIEW: {
    title: 'Rihanyo ro Tiyiseka',
    subtitle: 'Xikongomelo xa Dr. Sarah Johnson',
    description: 'Hi malembe yo tala ya ntokoto hi vutshunguri, Dr. Johnson u tirhisana na vayingisi ku va nyika rihanyo ro hlayiseka ro humelela. Xikongomelo xa yena xi kombisa ntirhisano na rihanyo ro tiyiseka.',
    achievements: [
      'Ntokoto wa malembe ya 15+ eka vutshunguri',
      'Mutivi wa vutshunguri bya mbilu',
      'Mufundisi wa yunivesiti ya vutshunguri',
      'Murhangeri wa swikongomelo swa vutshunguri'
    ]
  },

  TESTIMONIALS_PREVIEW: {
    title: 'Leswi Vayingisi va Vulaka',
    subtitle: 'Tivonelo ta nkoka leti humaka eka vayingisi va hina'
  },

  CTA: {
    title: 'U lava ku hlanganisana na Dr. Johnson?',
    subtitle: 'Buka nkarhi wa wena lowu nga erivaleni hi ku tirhisa sisiteme ya hina yo olova yo buka',
    button: 'Buka Nkarhi'
  },

  COMMON: {
    consultButton: 'Vulavula Sweswi',
    learnMoreButton: 'Dyondza Swo Tala'
  }
};