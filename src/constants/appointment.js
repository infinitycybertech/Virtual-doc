// Appointment page constants - English
export const APPOINTMENT = {
  HERO: {
    title: "Book Your Healthcare Appointment",
    subtitle: "Schedule your appointment with MediCare's network of healthcare providers using our simple online form. Choose from virtual consultations, home visits, or clinic appointments."
  },

  FORM: {
    title: "Book Your Appointment",
    
    APPOINTMENT_TYPES: {
      inPerson: "In-Person Visit",
      virtual: "Virtual Consultation", 
      homeVisit: "Home Visit"
    },

    FIELDS: {
      fullName: {
        label: "Full Name*",
        placeholder: "Enter your full name"
      },
      email: {
        label: "Email Address*",
        placeholder: "Enter your email"
      },
      phone: {
        label: "Phone Number*",
        placeholder: "Enter your phone number"
      },
      dateOfBirth: {
        label: "Date of Birth"
      },
      preferredDate: {
        label: "Preferred Date*"
      },
      preferredTime: {
        label: "Preferred Time*",
        placeholder: "Select a time",
        options: {
          morning: "Morning (9AM - 12PM)",
          afternoon: "Afternoon (1PM - 5PM)",
          evening: "Evening (6PM - 8PM)"
        }
      },
      platform: {
        label: "Preferred Platform",
        options: {
          zoom: "Zoom",
          teams: "Microsoft Teams",
          googleMeet: "Google Meet",
          facetime: "FaceTime (iOS devices only)"
        }
      },
      nearbyDoctors: "Find Nearby Medical Centers & Doctors",
      homeVisitDoctors: "Select Nearby Doctor & Request Home Visit",
      homeAddress: {
        label: "Home Visit Address*",
        placeholder: "Please enter your complete address including street, city, and postal code",
        note: "Ensure the address is accurate for the doctor to locate you easily"
      },
      reasonForVisit: {
        label: "Reason for Visit",
        placeholder: "Please describe your symptoms or reason for appointment"
      }
    },

    DOCTOR_SELECTION: {
      selectedDoctor: "Selected Doctor:",
      specialty: "Specialty:",
      distance: "Distance:",
      inPersonConfirmation: "In-person appointment confirmed at medical center",
      homeVisitRequested: "Home visit requested - We'll contact you within 30 minutes to confirm!",
      homeVisitAlert: "Home visit requested with {doctorName}. We'll contact you within 30 minutes to confirm."
    },

    SUBMIT_BUTTON: "Book Appointment"
  },

  SIDE_INFO: {
    title: "Appointment Information",
    description: "Scheduling an appointment with MediCare's healthcare providers is quick and easy. Choose between an in-person visit to a nearby medical center, a virtual consultation from the comfort of your home, or request a home visit where a qualified doctor or nurse comes to you.",

    MODEL_TITLES: {
      inPerson: "In-Person Consultation",
      homeVisit: "Home Visit Service", 
      virtual: "Virtual Consultation"
    },

    MODEL_DESCRIPTIONS: {
      inPerson: "Visit a nearby medical facility in our network",
      homeVisit: "Healthcare provider comes to your location", 
      virtual: "Connect with licensed healthcare providers from your home"
    },

    HOW_IT_WORKS: {
      title: "How It Works",
      steps: [
        {
          number: 1,
          title: "Fill the Form",
          description: "Complete the appointment request form with your personal information and preferred date/time."
        },
        {
          number: 2,
          title: "Confirmation",
          description: "Receive a confirmation email with your appointment details and any pre-visit instructions."
        },
        {
          number: 3,
          title: "Reminder",
          description: "Get a reminder notification 24 hours before your scheduled appointment."
        },
        {
          number: 4,
          title: "Your Visit",
          description: "Arrive at the medical center, receive your home visit, or connect virtually at your scheduled time to meet with your assigned healthcare provider."
        }
      ]
    },

    INFO_BOXES: {
      insurance: {
        title: "Insurance Information",
        content: "MediCare partners with most major insurance plans. Please bring your insurance card to your appointment or have it available during your virtual consultation. Your medical records are securely stored in our platform for easy access."
      },
      policy: {
        title: "Late or Cancellation Policy",
        content: "Please notify us at least 24 hours in advance if you need to cancel or reschedule through the MediCare platform. Missed appointments without notice may incur a fee."
      }
    }
  },

  FAQ: {
    title: "Frequently Asked Questions",
    subtitle: "Common Questions About MediCare Appointments",
    items: [
      {
        question: "What should I bring to my appointment?",
        answer: "Please bring your ID and insurance card. Your medical records are securely stored in the MediCare platform, so your healthcare provider will have access to your complete medical history during the consultation."
      },
      {
        question: "How early should I arrive for my appointment?",
        answer: "For clinic visits, please arrive 15 minutes early for new patients and 5-10 minutes for returning patients. For home visits, please be available at your specified address 15 minutes before the scheduled time."
      },
      {
        question: "What if I need to reschedule my appointment?",
        answer: "You can easily reschedule through the MediCare platform at least 24 hours in advance. Simply log into your account and select a new time slot that works for you and your chosen healthcare provider."
      },
      {
        question: "How do virtual consultations work?",
        answer: "For virtual consultations, you'll receive a secure link to join a video call with your healthcare provider at your scheduled time. You'll need a device with internet access, camera, and microphone. Your consultation and medical records are securely stored in the MediCare platform."
      },
      {
        question: "How does the home visit service work?",
        answer: "Select a nearby doctor or nurse from our network, and they'll come to your specified address within your chosen radius. We'll contact you within 30 minutes to confirm the appointment and provide the provider's estimated arrival time."
      },
      {
        question: "Are my medical records secure?",
        answer: "Yes, MediCare uses advanced encryption and security measures to keep your medical records safe in our database. Your healthcare providers can access your complete medical history to provide better, more informed care."
      }
    ]
  }
};