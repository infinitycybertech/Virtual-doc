// Doctors page constants
export const DOCTORS_PAGE = {
  HERO: {
    title: 'Meet Our Specialists',
    subtitle: 'Our team of board-certified specialists is committed to providing exceptional care using the latest medical advances and technology.'
  },

  SECTION: {
    title: 'Our Medical Team',
    subtitle: 'Experienced and Compassionate Specialists'
  },

  CATEGORIES: [
    { label: "All Specialists", value: "all" },
    { label: "Cardiology", value: "cardiology" },
    { label: "Neurology", value: "neurology" },
    { label: "Orthopedics", value: "orthopedics" },
    { label: "Pediatrics", value: "pediatrics" },
    { label: "Dermatology", value: "dermatology" },
    { label: "Family Medicine", value: "family-medicine" }
  ],

  DOCTORS: [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/src/assets/images/doctor1.jpg",
      bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
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
      specialty: "Neurologist",
      image: "/src/assets/images/doctor2.jpg",
      bio: "Dr. Chen specializes in neurological disorders and has pioneered several treatment techniques.",
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
      specialty: "Orthopedist",
      image: "/src/assets/images/doctor3.jpg",
      bio: "Dr. Rodriguez is an expert in sports medicine and joint replacements, with special focus on minimally invasive procedures.",
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
      specialty: "Pediatrician",
      image: "/src/assets/images/doctor4.jpg",
      bio: "Dr. Thompson has been providing compassionate care to children of all ages for over a decade.",
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
      specialty: "Dermatologist",
      image: "/src/assets/images/doctor1.jpg",
      bio: "Dr. Parker specializes in diagnosing and treating skin conditions with the latest approaches in dermatology.",
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
      specialty: "Family Physician",
      image: "/src/assets/images/doctor2.jpg",
      bio: "Dr. Wilson provides comprehensive primary care for patients of all ages, with a focus on preventative medicine.",
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
    role: "Chief Medical Officer",
    name: "Dr. Michael Chen",
    descriptions: [
      "Dr. Chen leads our medical team with over 20 years of experience in neurology. He has been recognized internationally for his research in neurological disorders and innovative treatment approaches.",
      "As our Chief Medical Officer, Dr. Chen ensures that all our specialists adhere to the highest standards of medical care and stay current with the latest advancements in their fields."
    ],
    badges: [
      "Board Certified",
      "Harvard Medical School", 
      "Research Published",
      "20+ Years Experience"
    ],
    button: {
      text: "Schedule a Consultation",
      icon: "fas fa-calendar-check"
    }
  }
};