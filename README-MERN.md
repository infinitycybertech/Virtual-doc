# Doctor Web - MERN Stack Application

A modern medical consulting website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, health information management, and multi-language support.

## 🌟 Features

### Frontend (React)
- **Modern UI/UX**: Professional medical website design
- **3D Interactive Models**: Three.js powered medical visualizations
- **Multi-language Support**: English, isiXhosa, and Xitsonga
- **Responsive Design**: Mobile-first approach
- **Authentication Pages**: Login and signup with form validation
- **Protected Routes**: Dashboard accessible only to authenticated users
- **Real-time Chat**: Stream Chat integration for doctor communication

### Backend (Node.js + Express)
- **User Authentication**: JWT-based login/signup system
- **Password Security**: Bcrypt password hashing
- **MongoDB Integration**: User and health data storage
- **API Endpoints**: RESTful API for frontend communication
- **CORS Enabled**: Cross-origin resource sharing configured
- **Input Validation**: Server-side form validation

### Database (MongoDB Atlas)
- **User Management**: Comprehensive user profiles
- **Health Records**: Medical history, allergies, medications
- **Secure Storage**: Encrypted password storage
- **Cloud Database**: MongoDB Atlas integration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (connection string provided)

### Installation & Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd DoctorWeb
```

2. **Quick Start (Recommended)**
```bash
./start-mern.sh
```
This script will:
- Install all dependencies
- Start the backend server (port 5001)
- Start the frontend development server (port 5173)
- Display all available URLs and features

3. **Manual Setup**

**Backend Setup:**
```bash
cd backend
npm install
npm start
```

**Frontend Setup:**
```bash
npm install
npm run dev
```

## 🌐 Application URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001/api
- **Login Page**: http://localhost:5173/login
- **Signup Page**: http://localhost:5173/signup
- **Dashboard**: http://localhost:5173/dashboard (requires authentication)

## 🔐 Authentication System

### User Registration
- First name, last name, email, password
- Password strength validation
- Email uniqueness validation
- Automatic login after registration

### User Login
- Email and password authentication
- JWT token generation (7-day expiration)
- Persistent login state
- Secure logout functionality

### Protected Routes
- Dashboard access requires authentication
- Automatic redirect to login if not authenticated
- User profile management
- Health information storage

## 📊 Database Schema

### User Model
```javascript
{
  // Basic Information
  firstName: String (required)
  lastName: String (required)
  email: String (required, unique)
  password: String (required, hashed)
  phone: String
  dateOfBirth: Date
  gender: String (enum: male, female, other)
  
  // Address
  address: {
    street: String
    city: String
    state: String
    zipCode: String
    country: String
  }
  
  // Emergency Contact
  emergencyContact: {
    name: String
    relationship: String
    phone: String
  }
  
  // Medical History
  medicalHistory: {
    allergies: [String]
    medications: [String]
    conditions: [String]
    surgeries: [{
      procedure: String
      date: Date
      hospital: String
    }]
  }
  
  // Insurance
  insurance: {
    provider: String
    policyNumber: String
    groupNumber: String
  }
  
  // Preferences
  preferredLanguage: String (enum: en, xh, ts)
  
  // Timestamps
  createdAt: Date
  updatedAt: Date
}
```

## 🛠 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Health & Utilities
- `GET /api/health` - Health check
- `GET /api/test-db` - Database connection test

## 🎨 Frontend Features

### Pages
- **Home**: Landing page with medical services overview
- **About**: Doctor information and facility details
- **Services**: Medical services offered
- **Doctors**: Staff profiles
- **Contact**: Contact information with business hours
- **Portfolio**: Medical work showcase
- **Login**: User authentication
- **Signup**: User registration
- **Dashboard**: User profile and health information

### Components
- **Header**: Navigation with language toggle and auth buttons
- **Footer**: Site information and links
- **3D Models**: Interactive medical visualizations
- **Forms**: Validated input forms with error handling
- **Protected Routes**: Authentication-required page wrapper

### Language Support
- **English (EN)**: Default language
- **isiXhosa (XH)**: South African language
- **Xitsonga (TS)**: South African language

## 🔧 Development

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development
```bash
npm start            # Start production server
npm run dev          # Start with nodemon (auto-restart)
```

### Environment Variables

**Backend (.env)**
```env
PORT=5001
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:5173
```

## 🔒 Security Features

- **Password Hashing**: Bcrypt with 12 salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Both client and server-side validation
- **CORS Configuration**: Properly configured cross-origin requests
- **Protected Routes**: Authentication-required pages
- **Secure Headers**: Security best practices implemented

## 📱 Mobile Responsive

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🌍 Multi-language Support

### Supported Languages
1. **English (EN)**: Primary language
2. **isiXhosa (XH)**: South African official language
3. **Xitsonga (TS)**: South African official language

### Translation Features
- Dynamic language switching
- Persistent language preference
- Complete UI translation
- Medical terminology localization

## 🚀 Deployment

### Frontend Deployment
- Build optimized for production
- Static file deployment ready
- Environment configuration for production API URLs

### Backend Deployment
- Express server ready for cloud deployment
- MongoDB Atlas cloud database
- Environment variables for production secrets
- PM2 or Docker deployment ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test authentication flow
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For support or questions about the MERN stack implementation:
- Check the API health endpoint: http://localhost:5001/api/health
- Review server logs for authentication issues
- Ensure MongoDB connection is successful
- Verify environment variables are correctly set

## 🎯 Next Steps

After successful setup, you can:
1. Create user accounts via the signup page
2. Login and access the protected dashboard
3. Explore the multi-language features
4. Test the authentication flow
5. Customize health information fields
6. Integrate additional medical features

---

**Built with ❤️ for modern healthcare solutions**