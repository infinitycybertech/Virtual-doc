// Authentication constants - English
export const AUTH = {
  // Login Page
  LOGIN: {
    title: "Welcome Back",
    subtitle: "Sign in to your account to access your medical dashboard",
    
    FORM: {
      email: {
        label: "Email Address",
        placeholder: "Enter your email"
      },
      password: {
        label: "Password",
        placeholder: "Enter your password"
      },
      submitButton: {
        text: "Sign In",
        loading: "Signing In..."
      },
      rememberMe: "Remember me",
      forgotPassword: "Forgot Password?"
    },
    
    FOOTER: {
      homeButton: "Return to Home",
      signupPrompt: "Don't have an account?",
      signupLink: "Create one here"
    }
  },
  
  // Signup Page
  SIGNUP: {
    title: "Create Account",
    subtitle: "Join our healthcare platform to access personalized medical services",
    
    FORM: {
      firstName: {
        label: "First Name",
        placeholder: "Enter your first name"
      },
      lastName: {
        label: "Last Name",
        placeholder: "Enter your last name"
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email"
      },
      phone: {
        label: "Phone Number",
        placeholder: "Enter your phone number"
      },
      password: {
        label: "Password",
        placeholder: "Create a password"
      },
      confirmPassword: {
        label: "Confirm Password",
        placeholder: "Confirm your password"
      },
      submitButton: {
        text: "Create Account",
        loading: "Creating Account..."
      },
      preferredLanguage: {
        label: "Preferred Language",
        options: {
          en: "English",
          xh: "isiXhosa",
          ts: "Xitsonga"
        }
      },
      terms: "I agree to the Terms of Service and Privacy Policy"
    },
    
    FOOTER: {
      homeButton: "Return to Home",
      loginPrompt: "Already have an account?",
      loginLink: "Sign in here"
    }
  },
  
  // Dashboard Page
  DASHBOARD: {
    welcome: {
      title: "Welcome back, {name}!",
      subtitle: "Here's an overview of your health dashboard"
    },
    
    CARDS: {
      appointments: {
        title: "Appointments",
        content: "Next appointment"
      },
      prescriptions: {
        title: "Prescriptions", 
        content: "active prescriptions"
      },
      reports: {
        title: "Medical Reports",
        content: "reports available"
      },
      health: {
        title: "Health Status",
        content: "All vital signs normal"
      }
    },
    
    profile: {
      title: "Profile Information",
      fields: {
        fullName: "Full Name",
        email: "Email", 
        phone: "Phone",
        language: "Preferred Language",
        memberSince: "Member Since",
        lastVisit: "Last Visit",
        bloodType: "Blood Type",
        emergencyContact: "Emergency Contact"
      },
      languages: {
        english: "English",
        xhosa: "isiXhosa",
        tsonga: "Xitsonga", 
        englishDefault: "English (Default)"
      },
      notProvided: "Not provided",
      unknown: "Unknown"
    },
    
    actions: {
      editProfile: "Edit Profile",
      medicalHistory: "Medical History", 
      bookAppointment: "Book Appointment",
      logout: "Logout"
    },
    
    MODALS: {
      editProfile: {
        title: "Edit Profile",
        save: "Save Changes",
        cancel: "Cancel",
        saving: "Saving..."
      },
      
      medicalHistory: {
        title: "Medical History",
        close: "Close",
        allergies: "Allergies",
        medications: "Current Medications",
        conditions: "Medical Conditions",
        insurance: "Insurance",
        emergencyContact: "Emergency Contact",
        noData: {
          allergies: "No allergies recorded",
          medications: "No medications recorded",
          conditions: "No conditions recorded",
          insurance: "No insurance information",
          emergencyContact: "No emergency contact"
        }
      },
      
      bookAppointment: {
        title: "Book Appointment",
        book: "Book Appointment",
        cancel: "Cancel",
        
        FIELDS: {
          date: "Date",
          time: "Time",
          type: "Appointment Type",
          notes: "Notes",
          notesPlaceholder: "Any specific concerns or notes..."
        },
        
        TYPES: {
          consultation: "General Consultation",
          checkup: "Regular Checkup",
          followup: "Follow-up",
          emergency: "Emergency"
        }
      }
    },
    
    MEDICAL_FORMS: {
      title: "Medical Information",
      subtitle: "Update your medical information",
      
      TABS: {
        basic: "Basic Info",
        medical: "Medical History", 
        emergency: "Emergency & Insurance",
        lifestyle: "Lifestyle"
      },
      
      MESSAGES: {
        success: "Medical information updated successfully!",
        authRequired: "You must be logged in to update medical information. Please log in and try again.",
        sessionExpired: "Your session has expired. Please log in again.",
        userNotFound: "User not found. Please contact support.",
        networkError: "Network error. Please try again.",
        serverError: "Server error:"
      },
      
      BUTTONS: {
        save: "Save Information",
        saving: "Saving...",
        cancel: "Cancel"
      }
    }
  },
  
  // Common Messages
  MESSAGES: {
    loading: "Loading...",
    error: "An error occurred",
    success: "Success",
    networkError: "Network connection error",
    serverError: "Server error",
    validationError: "Please check your input",
    unauthorized: "Access denied",
    sessionExpired: "Your session has expired. Please log in again."
  }
};