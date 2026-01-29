// Doctors page constants - Xhosa Translation
export const DOCTORS_PAGE_XH = {
  HERO: {
    title: 'Dibana Noocwangciso-zonyango Bethu',
    subtitle: 'Iqela lethu loocwangciso-zonyango abagunyazisiweyo lizibophelele ekunikezeni ukhathalelo olungamiselwanga kusetyenziswa inkqubela phambili yezonyango nesayensi yethu.'
  },

  SECTION: {
    title: 'Iqela Lethu Lezonyango',
    subtitle: 'Oocwangciso-zonyango Abanamava Nabanobubele'
  },

  CATEGORIES: [
    { label: "Bonke Oocwangciso-zonyango", value: "all" },
    { label: "Unyango Lwentliziyo", value: "cardiology" },
    { label: "Unyango Lwengqondo", value: "neurology" },
    { label: "Unyango Lwamathambo", value: "orthopedics" },
    { label: "Unyango Lwabantwana", value: "pediatrics" },
    { label: "Unyango Lwesikhumba", value: "dermatology" },
    { label: "Unyango Lwentsapho", value: "family-medicine" }
  ],

  DOCTORS: [
    {
      name: "UGqirha Sarah Johnson",
      specialty: "Ugqirha Wentliziyo",
      image: "/src/assets/images/doctor1.jpg",
      bio: "UGqirha Johnson ngugqirha wentliziyo ogunyazisiweyo onamava angaphezu kweminyaka eli-15 ekunyangeni iimeko zentliziyo.",
      modelType: "stethoscope",
      category: "cardiology",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:sarah.johnson@example.com"
      }
    },
    {
      name: "UGqirha Michael Chen",
      specialty: "Ugqirha Wengqondo",
      image: "/src/assets/images/doctor2.jpg",
      bio: "UGqirha Chen ugxile kwiingxaki zengqondo kwaye uvule iindlela ezininzi zonyango.",
      modelType: "medical-device",
      category: "neurology",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:michael.chen@example.com"
      }
    },
    {
      name: "UGqirha Emily Rodriguez",
      specialty: "Ugqirha Wamathambo",
      image: "/src/assets/images/doctor3.jpg",
      bio: "UGqirha Rodriguez uyingcali kwinyango yezemidlalo kunye nokutshintsha amalungu, egxile kwiinkqubo ezingaphazamisi kakhulu.",
      modelType: "skeleton",
      category: "orthopedics",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:emily.rodriguez@example.com"
      }
    },
    {
      name: "UGqirha Robert Thompson",
      specialty: "Ugqirha Wabantwana",
      image: "/src/assets/images/doctor4.jpg",
      bio: "UGqirha Thompson ebenika ukhathalelo olunobubele ebantwaneni bayo yonke iminyaka ngaphezu kweshumi leminyaka.",
      modelType: "first-aid-kit",
      category: "pediatrics",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:robert.thompson@example.com"
      }
    },
    {
      name: "UGqirha Amelia Parker",
      specialty: "Ugqirha Wesikhumba",
      image: "/src/assets/images/doctor1.jpg",
      bio: "UGqirha Parker ugxile ekuxilongeni nasekunyangeni iimeko zesikhumba ngeendlela ezisandula ukuvela konyango lwesikhumba.",
      modelType: "doctor-avatar",
      category: "dermatology",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:amelia.parker@example.com"
      }
    },
    {
      name: "UGqirha James Wilson",
      specialty: "Ugqirha Wentsapho",
      image: "/src/assets/images/doctor2.jpg",
      bio: "UGqirha Wilson unika ukhathalelo olubanzi lokuqala lwezigulana zawo onke ubudala, egxile konyango lokuthintela.",
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
    role: "Umphathi Oyintloko Wezonyango",
    name: "UGqirha Michael Chen",
    descriptions: [
      "UGqirha Chen ukhokelela iqela lethu lezonyango ngeminyaka engaphezu kwamashumi amabini yamava konyango lwengqondo. Uye waqatshelwa kwihlabathi liphela ngophando lwakhe kwiingxaki zengqondo kunye neendlela zonyango ezintsha.",
      "NjengoMphathi wethu Oyintloko Wezonyango, uGqirha Chen uqinisekisa ukuba bonke oocwangciso-zonyango bethu babambelela kwimigangatho ephezulu yokhathalelo lwezonyango kwaye bahlale bamandla neenqubekela phambili ezisandula ukuvela kumacandelo abo."
    ],
    badges: [
      "Ogunyazisiweyo",
      "Isikolo Sobugqirha SaseHarvard",
      "Uphando Olupapashiweyo",
      "Amava Angaphezu Kweminyaka Engama-20"
    ],
    button: {
      text: "Cwangcisa Ucebiso",
      icon: "fas fa-calendar-check"
    }
  }
};