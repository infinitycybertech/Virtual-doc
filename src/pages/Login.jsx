import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTranslations } from '../hooks/useTranslations';
import Button from '../components/ui/Button';

const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const AuthCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
`;

const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid ${props => props.$error ? '#ff4757' : '#e1e8ed'};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$error ? '#ff4757' : 'var(--primary)'};
    box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(255, 71, 87, 0.1)' : 'rgba(30, 136, 229, 0.1)'};
  }
  
  &::placeholder {
    color: #a0a0a0;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4757;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  color: #2ed573;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-align: center;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
`;

const AuthFooter = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: var(--text-secondary);
`;

const HomeLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a7bb8;
    text-decoration: underline;
  }
  
  i {
    margin-right: 0.5rem;
  }
`;

const AuthLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Fallback object for when translations are undefined
const fallbackAuth = {
  LOGIN: {
    title: 'Login',
    subtitle: 'Welcome back! Please sign in to your account.',
    FORM: {
      email: {
        label: 'Email',
        placeholder: 'Enter your email'
      },
      password: {
        label: 'Password',
        placeholder: 'Enter your password'
      },
      submitButton: {
        text: 'Sign In',
        loading: 'Signing in...'
      }
    },
    FOOTER: {
      homeButton: 'Back to Home',
      signupPrompt: "Don't have an account?",
      signupLink: 'Sign up here'
    }
  }
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const { auth } = useTranslations();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});
    setSuccess('');

    try {
      console.log('Attempting to connect to backend...');
      const response = await fetch('http://localhost:5001/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setSuccess('Login successful! Redirecting...');
        await login(data.token, data.user);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setErrors({ general: data.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setErrors({ 
          general: 'Backend service unavailable. Please try again later. (The authentication backend needs to be deployed)' 
        });
      } else if (error.message.includes('CORS')) {
        setErrors({ 
          general: 'CORS error: Backend configuration issue. Please contact support.' 
        });
      } else {
        setErrors({ general: `Network error: ${error.message}` });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AuthHeader>
          <Title>{auth?.LOGIN?.title || fallbackAuth.LOGIN.title}</Title>
          <Subtitle>{auth?.LOGIN?.subtitle || fallbackAuth.LOGIN.subtitle}</Subtitle>
        </AuthHeader>

        <Form onSubmit={handleSubmit}>
          {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <FormGroup>
            <Label htmlFor="email">{auth?.LOGIN?.FORM?.email?.label || fallbackAuth.LOGIN.FORM.email.label}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={auth?.LOGIN?.FORM?.email?.placeholder || fallbackAuth.LOGIN.FORM.email.placeholder}
              $error={errors.email}
              disabled={loading}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">{auth?.LOGIN?.FORM?.password?.label || fallbackAuth.LOGIN.FORM.password.label}</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={auth?.LOGIN?.FORM?.password?.placeholder || fallbackAuth.LOGIN.FORM.password.placeholder}
              $error={errors.password}
              disabled={loading}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={loading}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {loading && <LoadingSpinner />}
            {loading ? 
              (auth?.LOGIN?.FORM?.submitButton?.loading || fallbackAuth.LOGIN.FORM.submitButton.loading) : 
              (auth?.LOGIN?.FORM?.submitButton?.text || fallbackAuth.LOGIN.FORM.submitButton.text)
            }
          </SubmitButton>
        </Form>

        <AuthFooter>
          <HomeLink to="/">
            <i className="fas fa-home"></i>
            {auth?.LOGIN?.FOOTER?.homeButton || fallbackAuth.LOGIN.FOOTER.homeButton}
          </HomeLink>
          <br />
          {auth?.LOGIN?.FOOTER?.signupPrompt || fallbackAuth.LOGIN.FOOTER.signupPrompt}{' '}
          <AuthLink to="/signup">{auth?.LOGIN?.FOOTER?.signupLink || fallbackAuth.LOGIN.FOOTER.signupLink}</AuthLink>
        </AuthFooter>
      </AuthCard>
    </AuthContainer>
  );
};

export default Login;