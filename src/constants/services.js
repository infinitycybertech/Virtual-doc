// Services page constants
export const SERVICES_PAGE = {
  HERO: {
    title: "MediCare Virtual Healthcare Services",
    subtitle: 'Connect with licensed healthcare providers through virtual consultations, home visits, and clinic appointments - all with secure medical record storage.'
  },

  SECTION: {
    title: 'MediCare Healthcare Services',
    subtitle: 'Virtual Consultations, Home Visits & Secure Medical Records'
  },

  SERVICES: [
    {
      title: "Cardiology",
      description: "Connect with cardiology specialists through MediCare's virtual platform for heart health consultations, monitoring, and treatment plans via video calls or home visits.",
      modelType: "stethoscope",
      icon: "fa-heart",
      features: [
        "Virtual heart consultations",
        "Remote cardiac monitoring",
        "Home visit cardiologists",
        "Digital treatment plans"
      ],
      chatButton: true
    },
    {
      title: "Neurology",
      description: "Access neurology specialists through MediCare for neurological assessments, headache management, and nerve disorder consultations via our virtual platform.",
      modelType: "medical-device2",
      icon: "fa-brain",
      features: [
        "Virtual neurological evaluations",
        "Online headache consultations",
        "Home visit neurologists",
        "Digital prescriptions"
      ],
      chatButton: true
    },
    {
      title: "Orthopedics",
      description: "Consult with orthopedic specialists through MediCare for bone and joint issues, sports injuries, and rehabilitation guidance via virtual consultations or home visits.",
      modelType: "skeleton",
      icon: "fa-bone",
      features: [
        "Virtual orthopedic consultations",
        "Sports injury assessments",
        "Home visit specialists",
        "Digital rehabilitation plans"
      ],
      chatButton: true
    },
    {
      title: "Pediatrics",
      description: "Connect with pediatric specialists through MediCare's platform for child healthcare consultations, developmental assessments, and family health guidance.",
      modelType: "first-aid-kit",
      icon: "fa-baby",
      features: [
        "Virtual pediatric consultations",
        "Child development assessments",
        "Home visit pediatricians",
        "Family health guidance"
      ],
      chatButton: true
    },
    {
      title: "Dermatology Services",
      description: "Virtual dermatology consultations for skin conditions, acne management, rashes, allergies and general skin health all from the comfort of your home.",
      modelType: "doctor-avatar",
      icon: "fa-video",
      features: [
        "Skin condition assessments",
        "Acne and eczema treatment",
        "Allergy and rash consultations",
        "Follow-up skin health management"
      ],
      chatButton: true
    },
    {
      title: "Clinical Pharmacology Services",
      description: "Expert guidance on safe and effective medication use, drug interactions and personalized pharmacotherapy plans.",
      modelType: "pills",
      icon: "fa-vial",
      features: [
        "Medication reviews",
        "Drug interaction checks",
        "Personalized dosage adjustments",
        "Therapeutic drug monitoring"
      ],chatButton: true
    }
  ],

  DETAILED_SECTIONS: [
    {
      title: "Virtual Healthcare Platform",
      highlightedWord: "Virtual",
      descriptions: [
        "MediCare's virtual healthcare platform connects you with licensed healthcare providers through secure, encrypted video consultations. Our network includes doctors, nurses, and specialists available 24/7 to provide medical advice, diagnoses, and treatment plans from the comfort of your home.",
        "Using advanced telemedicine technology, we ensure high-quality healthcare delivery while maintaining patient privacy and security. All consultations are recorded and stored in your secure medical records for continuity of care across all healthcare providers in our network."
      ],
      modelType: "medical-device",
      modelTitle: "Virtual Consultation Technology",
      modelDescription: "Secure video calls with healthcare providers"
    },
    {
      title: "Comprehensive Care Network",
      highlightedWord: "Comprehensive",
      descriptions: [
        "Our extensive network of healthcare providers offers complete medical services including virtual consultations, home visits within your radius, and appointments at nearby medical centers. Whether you need urgent care, routine check-ups, or specialist consultations, MediCare connects you with the right provider.",
        "Your medical records are securely stored in our HIPAA-compliant database, allowing any healthcare provider in our network to access your complete medical history instantly. This ensures continuity of care and better health outcomes through informed medical decisions."
      ],
      modelType: "doctor-office",
      modelTitle: "Healthcare Provider Network",
      modelDescription: "Comprehensive care through our provider network"
    }
  ],

  CHAT_BUTTON: {
    text: "Chat with Healthcare Provider",
    description: "Get instant medical advice through our secure chat platform"
  }
};