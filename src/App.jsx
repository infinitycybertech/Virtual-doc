import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/layout/Layout'
import { StreamChatProvider } from './contexts/StreamChatContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import API from './pages/API'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <LanguageProvider>
          <StreamChatProvider>
            <BrowserRouter>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/services" element={<Layout><Services /></Layout>} />
                <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/doctors" element={<Layout><Doctors /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/appointment" element={<Layout><Appointment /></Layout>} />
                <Route path="/api" element={<Layout><API /></Layout>} />
                
                {/* Auth routes (no layout) */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="*" element={
                  <Layout>
                    <div style={{ 
                      height: "80vh", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      flexDirection: "column"
                    }}>
                      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404 - Page Not Found</h1>
                      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>The page you're looking for doesn't exist.</p>
                      <a 
                        href="/" 
                        style={{ 
                          background: "var(--primary)",
                          color: "white",
                          padding: "0.75rem 1.5rem",
                          borderRadius: "30px",
                          textDecoration: "none",
                          fontWeight: 500
                        }}
                      >
                        Go Home
                      </a>
                    </div>
                  </Layout>
                } />
              </Routes>
            </BrowserRouter>
          </StreamChatProvider>
        </LanguageProvider>
      </AuthProvider>
    </>
  )
}

export default App
