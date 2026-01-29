# 🏥 Virtual-Doc - Virtual Medical Consultation Platform

A modern, responsive virtual medical consultation platform built with React, Three.js, and real-time chat capabilities. This platform enables seamless patient-doctor communication with multilingual support (English, Xhosa, Tsonga).

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Node](https://img.shields.io/badge/Node-18+-green)

## ✨ Features

### 🎯 Core Features
- **Real-time Consultation**: Stream Chat integration for instant patient-doctor messaging
- **3D Medical Models**: Interactive Three.js medical visualizations
- **Multilingual Support**: English, Xhosa, and Tsonga translations
- **Authentication System**: Secure user registration and login
- **Doctor Profiles**: Comprehensive specialist information
- **Appointment Booking**: Integrated scheduling system
- **Medical Records**: Secure patient health information storage
- **Responsive Design**: Mobile-first approach with modern UI/UX

### 💬 Communication
- Patient-to-Doctor real-time messaging
- Secure authentication and authorization
- Cross-platform support (web and mobile)
- AI-powered medical assistance (ChatGPT integration)

### 🌍 Internationalization
- English (default)
- Xhosa (isiXhosa)
- Tsonga (Xitsonga)
- Easy language switching

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB database (Atlas or local)
- Stream Chat account (optional, for real-time chat)
- OpenAI API key (optional, for AI consultation)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/infinitycybertech/Virtual-doc.git
cd Virtual-doc
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

4. **Configure environment variables**

**Frontend (.env):**
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_API_URL=http://localhost:5001
```

**Backend (backend/.env):**
```env
PORT=5001
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:5173
```

5. **Start the development servers**
```bash
# Terminal 1: Start the backend server
cd backend
npm start

# Terminal 2: Start the frontend
npm run dev
```

6. **Open your browser**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001

## 🏗️ Project Structure

```
virtual-doc/
├── 📁 public/                  # Static assets
│   ├── models/                # 3D models (.glb files)
│   └── images/                # Medical imagery
├── 📁 src/                     # Frontend source
│   ├── components/            # React components
│   │   ├── 3d/               # Three.js 3D components
│   │   ├── layout/           # Layout components
│   │   ├── ui/               # UI components
│   │   └── auth/             # Authentication components
│   ├── pages/                 # Page components
│   ├── contexts/              # React contexts
│   │   ├── AuthContext.jsx   # Authentication context
│   │   ├── LanguageContext.jsx # i18n context
│   │   └── StreamChatContext.jsx # Chat context
│   ├── constants/             # Translations & constants
│   ├── services/              # API services
│   ├── hooks/                 # Custom hooks
│   └── styles/                # Global styles
├── 📁 backend/                 # Backend server
│   ├── server.js              # Express server
│   └── package.json           # Backend dependencies
├── package.json               # Frontend dependencies
├── vite.config.js             # Vite configuration
├── LICENSE                    # MIT License
└── README.md                  # This file
```

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **Three.js**: 3D graphics rendering
- **Styled Components**: CSS-in-JS styling
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations
- **Stream Chat**: Real-time messaging

### Backend
- **Node.js & Express**: REST API server
- **MongoDB & Mongoose**: Database
- **JWT**: Authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin support

## 📱 Key Features

### 🏠 Home Page
- Hero section with 3D medical models
- Service overview
- Doctor profiles
- Patient testimonials

### 👤 Authentication
- User registration with medical information
- Secure login system
- JWT-based authentication
- Password encryption

### 💬 Consultation
- Real-time chat with doctors
- AI-powered medical assistant
- Appointment scheduling
- Medical record access

### 🌐 Multilingual
- Dynamic language switching
- Comprehensive translations
- Cultural adaptation

## 🔧 Configuration

### Environment Variables

**Frontend:**
- `VITE_OPENAI_API_KEY`: OpenAI API key for AI consultation
- `VITE_API_URL`: Backend API URL

**Backend:**
- `PORT`: Server port (default: 5001)
- `NODE_ENV`: Environment (development/production)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `FRONTEND_URL`: Frontend URL for CORS

### MongoDB Setup

1. Create a MongoDB Atlas account or use local MongoDB
2. Create a database named `doctorweb`
3. Get your connection string
4. Add to `backend/.env`

## 📦 Available Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend
```bash
cd backend
npm start            # Start server
npm run dev          # Start with nodemon
```

## 🌐 Deployment

### Vercel (Frontend)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Vercel (Backend)
1. Add `vercel.json` configuration
2. Deploy backend separately
3. Update frontend API URL

### Environment Variables in Production
- Add all required environment variables in your hosting platform
- Never commit `.env` files to Git
- Use secure, strong secrets in production

## 🔒 Security

- Passwords hashed with bcrypt
- JWT token authentication
- CORS configured for specific origins
- Environment variables for sensitive data
- Input validation and sanitization

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Infinity Cyber Tech**
- GitHub: [@infinitycybertech](https://github.com/infinitycybertech)

## 🙏 Acknowledgments

- Three.js for 3D graphics
- Stream Chat for real-time messaging
- OpenAI for AI consultation
- React community for amazing tools

## 📞 Support

For support and inquiries:
- GitHub Issues: [Report an issue](https://github.com/infinitycybertech/Virtual-doc/issues)
- Email: support@infinitycybertech.com

---

**Built with ❤️ for modern healthcare communication**

*Making healthcare accessible through technology*
