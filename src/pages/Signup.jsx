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
  max-width: 500px;
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
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

const PasswordStrengthIndicator = styled.div`
  height: 4px;
  width: 100%;
  background-color: #e1e8ed;
  border-radius: 2px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const PasswordStrengthBar = styled.div`
  height: 100%;
  width: ${props => props.$strength}%;
  background-color: ${props => {
    if (props.$strength < 25) return '#ff4757';
    if (props.$strength < 50) return '#ffa502';
    if (props.$strength < 75) return '#ff6348';
    return '#2ed573';
  }};
  transition: all 0.3s ease;
`;

const PasswordStrengthText = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: ${props => {
    if (props.$strength < 25) return '#ff4757';
    if (props.$strength < 50) return '#ffa502';
    if (props.$strength < 75) return '#ff6348';
    return '#2ed573';
  }};
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

const Signup = () => {
  const auth = useTranslations();
  
  // Fallback translations for when auth is not loaded
  const fallbackSignup = {
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
      }
    },
    FOOTER: {
      homeButton: "Return to Home",
      loginPrompt: "Already have an account?",
      loginLink: "Sign in here"
    }
  };
  
  // Safely access signup translations with fallback
  const signup = React.useMemo(() => {
    try {
      if (auth?.SIGNUP && 
          auth.SIGNUP?.title && 
          auth.SIGNUP?.FORM && 
          auth.SIGNUP?.FOOTER) {
        return auth.SIGNUP;
      }
      return fallbackSignup;
    } catch (error) {
      console.error('Error accessing signup translations:', error);
      return fallbackSignup;
    }
  }, [auth]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const { login } = useAuth();
  const navigate = useNavigate();

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const getPasswordStrengthText = (strength) => {
    if (strength < 25) return 'Weak';
    if (strength < 50) return 'Fair';
    if (strength < 75) return 'Good';
    return 'Strong';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Calculate password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
    
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

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setSuccess('Account created successfully! Signing you in...');
        await login(data.token, data.user);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setErrors({ general: data.message || 'Registration failed' });
      }
    } catch (error) {
      console.error('Signup error:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setErrors({ 
          general: 'Cannot connect to server. Backend status: The server is running on port 5001. Please check your network connection.' 
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
          <Title>{signup?.title || fallbackSignup.title}</Title>
          <Subtitle>{signup?.subtitle || fallbackSignup.subtitle}</Subtitle>
        </AuthHeader>

        <Form onSubmit={handleSubmit}>
          {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <FormRow>
            <FormGroup>
              <Label htmlFor="firstName">{signup?.FORM?.firstName?.label || fallbackSignup.FORM.firstName.label}</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={signup?.FORM?.firstName?.placeholder || fallbackSignup.FORM.firstName.placeholder}
                $error={errors.firstName}
                disabled={loading}
              />
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">{signup?.FORM?.lastName?.label || fallbackSignup.FORM.lastName.label}</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={signup?.FORM?.lastName?.placeholder || fallbackSignup.FORM.lastName.placeholder}
                $error={errors.lastName}
                disabled={loading}
              />
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="email">{signup?.FORM?.email?.label || fallbackSignup.FORM.email.label}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={signup?.FORM?.email?.placeholder || fallbackSignup.FORM.email.placeholder}
              $error={errors.email}
              disabled={loading}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">{signup?.FORM?.password?.label || fallbackSignup.FORM.password.label}</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={signup?.FORM?.password?.placeholder || fallbackSignup.FORM.password.placeholder}
              $error={errors.password}
              disabled={loading}
            />
            {formData.password && (
              <>
                <PasswordStrengthIndicator>
                  <PasswordStrengthBar $strength={passwordStrength} />
                </PasswordStrengthIndicator>
                <PasswordStrengthText $strength={passwordStrength}>
                  {getPasswordStrengthText(passwordStrength)}
                </PasswordStrengthText>
              </>
            )}
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">{signup?.FORM?.confirmPassword?.label || fallbackSignup.FORM.confirmPassword.label}</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder={signup?.FORM?.confirmPassword?.placeholder || fallbackSignup.FORM.confirmPassword.placeholder}
              $error={errors.confirmPassword}
              disabled={loading}
            />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
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
            {loading ? (signup?.FORM?.submitButton?.loading || fallbackSignup.FORM.submitButton.loading) : (signup?.FORM?.submitButton?.text || fallbackSignup.FORM.submitButton.text)}
          </SubmitButton>
        </Form>

        <AuthFooter>
          <HomeLink to="/">
            <i className="fas fa-home"></i>
            {signup?.FOOTER?.homeButton || fallbackSignup.FOOTER.homeButton}
          </HomeLink>
          <p>
            {signup?.FOOTER?.loginPrompt || fallbackSignup.FOOTER.loginPrompt}{' '}
            <AuthLink to="/login">{signup?.FOOTER?.loginLink || fallbackSignup.FOOTER.loginLink}</AuthLink>
          </p>
        </AuthFooter>
      </AuthCard>
    </AuthContainer>
  );
};

export default Signup;