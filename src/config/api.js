// API Configuration for different environments
const isDevelopment = import.meta.env.MODE === 'development';
const isProduction = import.meta.env.MODE === 'production';

// Backend API URLs
export const API_CONFIG = {
  // Authentication and user management API
  AUTH_BASE_URL: isDevelopment 
    ? 'http://localhost:5001' 
    : 'https://your-auth-backend.vercel.app', // TODO: Deploy backend and update this URL
  
  // Stream Chat API  
  STREAM_CHAT_BASE_URL: 'https://doctor-portal-server-beige.vercel.app',
  
  // Default timeout for requests
  REQUEST_TIMEOUT: 10000
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNIN: `${API_CONFIG.AUTH_BASE_URL}/api/auth/signin`,
  SIGNUP: `${API_CONFIG.AUTH_BASE_URL}/api/auth/signup`,
  PROFILE: `${API_CONFIG.AUTH_BASE_URL}/api/auth/profile`,
  UPDATE_MEDICAL_INFO: `${API_CONFIG.AUTH_BASE_URL}/api/auth/update-medical-info`,
  HEALTH_CHECK: `${API_CONFIG.AUTH_BASE_URL}/api/health`,
  
  // Stream Chat endpoints
  STREAM_TOKEN: `${API_CONFIG.STREAM_CHAT_BASE_URL}/api/stream-token`,
  CREATE_CHANNEL: `${API_CONFIG.STREAM_CHAT_BASE_URL}/api/create-channel`
};

// Helper function to make API requests with proper error handling and CORS
export const apiRequest = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.REQUEST_TIMEOUT);
    
    const response = await fetch(url, {
      ...defaultOptions,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    if (error.message.includes('CORS')) {
      throw new Error('CORS error - server configuration issue');
    }
    throw error;
  }
};