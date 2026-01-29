import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTranslations } from '../hooks/useTranslations';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import MedicalInfoForms from '../components/ui/MedicalInfoForms';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem;
  }
`;

const WelcomeSection = styled(motion.div)`
  background: linear-gradient(135deg, var(--primary) 0%, #4a90e2 100%);
  color: white;
  padding: 3rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const DashboardCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.$bgColor || 'var(--primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin: 0;
`;

const CardContent = styled.div`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ProfileSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ProfileTitle = styled.h2`
  color: var(--text-primary);
  margin: 0;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ProfileField = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
`;

const FieldLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FieldValue = styled.div`
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  color: var(--text-secondary);
  font-style: italic;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LogoutButton = styled(Button)`
  background: #ff4757;
  
  &:hover {
    background: #ff3838;
  }
`;

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const ModalTitle = styled.h2`
  color: var(--text-primary);
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const CancelButton = styled(Button)`
  background: #6c757d;
  
  &:hover {
    background: #5a6268;
  }
`;

const Dashboard = () => {
  const { user, logout, updateUser } = useAuth();
  const translations = useTranslations();
  const { auth } = translations;
  
  // Fallback constants for when translations are not loaded
  const fallbackDashboard = {
    welcome: {
      title: "Welcome back, {name}!",
      subtitle: "Here's an overview of your health dashboard"
    },
    CARDS: {
      appointments: { title: "Appointments", content: "Next appointment" },
      prescriptions: { title: "Prescriptions", content: "active prescriptions" },
      reports: { title: "Medical Reports", content: "reports available" },
      health: { title: "Health Status", content: "All vital signs normal" }
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
    }
  };
  
  // Use fallback if auth.DASHBOARD is not available
  const dashboard = auth?.DASHBOARD || fallbackDashboard;
  
  const [healthStats, setHealthStats] = useState({
    lastVisit: 'March 15, 2024',
    nextAppointment: 'April 20, 2024',
    prescriptions: 3,
    reports: 5
  });
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showMedicalHistory, setShowMedicalHistory] = useState(false);
  const [showBookAppointment, setShowBookAppointment] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load user's real health data from database
  useEffect(() => {
    const loadHealthData = async () => {
      if (user) {
        try {
          const token = localStorage.getItem('authToken');
          const response = await fetch('http://localhost:5001/api/auth/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            const data = await response.json();
            // Update health stats based on real user data
            setHealthStats(prev => ({
              ...prev,
              lastVisit: data.user.updatedAt ? new Date(data.user.updatedAt).toLocaleDateString() : 'No visits yet',
              // Add more real data mappings here
            }));
          }
        } catch (error) {
          console.error('Error loading health data:', error);
        }
      }
    };

    loadHealthData();
  }, [user]);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleMedicalHistory = () => {
    setShowMedicalHistory(true);
  };

  const handleBookAppointment = () => {
    setShowBookAppointment(true);
  };

  const dashboardCards = [
    {
      icon: '📅',
      title: dashboard?.CARDS?.appointments?.title || 'Appointments',
      content: `${dashboard?.CARDS?.appointments?.content || 'Next appointment'}: ${healthStats.nextAppointment}`,
      bgColor: '#4a90e2'
    },
    {
      icon: '💊',
      title: dashboard?.CARDS?.prescriptions?.title || 'Prescriptions',
      content: `${healthStats.prescriptions} ${dashboard?.CARDS?.prescriptions?.content || 'active prescriptions'}`,
      bgColor: '#2ed573'
    },
    {
      icon: '📋',
      title: dashboard?.CARDS?.reports?.title || 'Medical Reports',
      content: `${healthStats.reports} ${dashboard?.CARDS?.reports?.content || 'reports available'}`,
      bgColor: '#ffa502'
    },
    {
      icon: '❤️',
      title: dashboard?.CARDS?.health?.title || 'Health Status',
      content: dashboard?.CARDS?.health?.content || 'All vital signs normal',
      bgColor: '#ff4757'
    }
  ];  // Edit Profile Modal Component
  const EditProfileModal = () => {
    const [formData, setFormData] = useState({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      preferredLanguage: user?.preferredLanguage || 'en'
    });
    const [saving, setSaving] = useState(false);

    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
      setSaving(true);
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5001/api/auth/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const updatedUser = await response.json();
          updateUser(updatedUser);
          setShowEditProfile(false);
        } else {
          console.error('Failed to update profile');
        }
      } catch (error) {
        console.error('Error updating profile:', error);
      } finally {
        setSaving(false);
      }
    };

    return (
      <ModalOverlay onClick={() => setShowEditProfile(false)}>
        <ModalContent
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Edit Profile</ModalTitle>
            <CloseButton onClick={() => setShowEditProfile(false)}>×</CloseButton>
          </ModalHeader>

          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <FormInput
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Last Name</FormLabel>
            <FormInput
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Phone</FormLabel>
            <FormInput
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Preferred Language</FormLabel>
            <FormSelect
              value={formData.preferredLanguage}
              onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
            >
              <option value="en">English</option>
              <option value="xh">isiXhosa</option>
              <option value="ts">Xitsonga</option>
            </FormSelect>
          </FormGroup>

          <ButtonGroup>
            <CancelButton onClick={() => setShowEditProfile(false)}>Cancel</CancelButton>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </ButtonGroup>
        </ModalContent>
      </ModalOverlay>
    );
  };

  // Medical History Modal Component
  const MedicalHistoryModal = () => (
    <ModalOverlay onClick={() => setShowMedicalHistory(false)}>
      <ModalContent
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalTitle>Medical History</ModalTitle>
          <CloseButton onClick={() => setShowMedicalHistory(false)}>×</CloseButton>
        </ModalHeader>

        <div>
          <h3>Allergies</h3>
          <p>{user?.medicalHistory?.allergies?.join(', ') || 'No allergies recorded'}</p>

          <h3>Current Medications</h3>
          <p>{user?.medicalHistory?.medications?.join(', ') || 'No medications recorded'}</p>

          <h3>Medical Conditions</h3>
          <p>{user?.medicalHistory?.conditions?.join(', ') || 'No conditions recorded'}</p>

          <h3>Insurance</h3>
          <p>{user?.insurance?.provider || 'No insurance information'}</p>
          {user?.insurance?.policyNumber && <p>Policy: {user.insurance.policyNumber}</p>}

          <h3>Emergency Contact</h3>
          <p>{user?.emergencyContact?.name || 'No emergency contact'}</p>
          {user?.emergencyContact?.phone && <p>Phone: {user.emergencyContact.phone}</p>}
        </div>

        <ButtonGroup>
          <Button onClick={() => setShowMedicalHistory(false)}>Close</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );

  // Book Appointment Modal Component
  const BookAppointmentModal = () => {
    const [appointmentData, setAppointmentData] = useState({
      date: '',
      time: '',
      type: 'consultation',
      notes: ''
    });

    const handleInputChange = (field, value) => {
      setAppointmentData(prev => ({ ...prev, [field]: value }));
    };

    const handleBooking = () => {
      // For now, just show an alert - in a real app this would call an API
      alert(`Appointment booked for ${appointmentData.date} at ${appointmentData.time}`);
      setShowBookAppointment(false);
    };

    return (
      <ModalOverlay onClick={() => setShowBookAppointment(false)}>
        <ModalContent
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Book Appointment</ModalTitle>
            <CloseButton onClick={() => setShowBookAppointment(false)}>×</CloseButton>
          </ModalHeader>

          <FormGroup>
            <FormLabel>Date</FormLabel>
            <FormInput
              type="date"
              value={appointmentData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Time</FormLabel>
            <FormInput
              type="time"
              value={appointmentData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Appointment Type</FormLabel>
            <FormSelect
              value={appointmentData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
            >
              <option value="consultation">General Consultation</option>
              <option value="checkup">Regular Checkup</option>
              <option value="followup">Follow-up</option>
              <option value="emergency">Emergency</option>
            </FormSelect>
          </FormGroup>

          <FormGroup>
            <FormLabel>Notes</FormLabel>
            <FormInput
              as="textarea"
              rows="3"
              value={appointmentData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Any specific concerns or notes..."
            />
          </FormGroup>

          <ButtonGroup>
            <CancelButton onClick={() => setShowBookAppointment(false)}>Cancel</CancelButton>
            <Button onClick={handleBooking}>Book Appointment</Button>
          </ButtonGroup>
        </ModalContent>
      </ModalOverlay>
    );
  };

  return (
    <Layout>
      <DashboardContainer>
        <WelcomeSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <WelcomeTitle>
            {(dashboard?.welcome?.title || 'Welcome back, {name}!').replace('{name}', user?.firstName || 'User')} 👋
          </WelcomeTitle>
          <WelcomeSubtitle>
            {dashboard?.welcome?.subtitle || "Here's an overview of your health dashboard"}
          </WelcomeSubtitle>
        </WelcomeSection>

        <DashboardGrid>
          {dashboardCards.map((card, index) => (
            <DashboardCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <CardHeader>
                <CardIcon $bgColor={card.bgColor}>
                  {card.icon}
                </CardIcon>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>{card.content}</CardContent>
            </DashboardCard>
          ))}
        </DashboardGrid>

        <ProfileSection>
          <ProfileHeader>
            <ProfileTitle>{dashboard?.profile?.title || 'Profile Information'}</ProfileTitle>
          </ProfileHeader>
          
          <ProfileGrid>
            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.fullName || 'Full Name'}</FieldLabel>
              <FieldValue>
                {user?.firstName && user?.lastName 
                  ? `${user.firstName} ${user.lastName}`
                  : <EmptyState>{dashboard?.profile?.notProvided || 'Not provided'}</EmptyState>
                }
              </FieldValue>
            </ProfileField>

            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.email || 'Email'}</FieldLabel>
              <FieldValue>
                {user?.email || <EmptyState>{dashboard?.profile?.notProvided || 'Not provided'}</EmptyState>}
              </FieldValue>
            </ProfileField>

            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.phone || 'Phone'}</FieldLabel>
              <FieldValue>
                {user?.phone || <EmptyState>{dashboard?.profile?.notProvided || 'Not provided'}</EmptyState>}
              </FieldValue>
            </ProfileField>

            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.language || 'Preferred Language'}</FieldLabel>
              <FieldValue>
                {user?.preferredLanguage === 'en' && (dashboard?.profile?.languages?.english || 'English')}
                {user?.preferredLanguage === 'xh' && (dashboard?.profile?.languages?.xhosa || 'isiXhosa')}
                {user?.preferredLanguage === 'ts' && (dashboard?.profile?.languages?.tsonga || 'Xitsonga')}
                {!user?.preferredLanguage && <EmptyState>{dashboard?.profile?.languages?.englishDefault || 'English (Default)'}</EmptyState>}
              </FieldValue>
            </ProfileField>

            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.memberSince || 'Member Since'}</FieldLabel>
              <FieldValue>
                {user?.createdAt 
                  ? new Date(user.createdAt).toLocaleDateString()
                  : <EmptyState>{dashboard?.profile?.unknown || 'Unknown'}</EmptyState>
                }
              </FieldValue>
            </ProfileField>

            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.lastVisit || 'Last Visit'}</FieldLabel>
              <FieldValue>{healthStats.lastVisit}</FieldValue>
            </ProfileField>

            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.bloodType || 'Blood Type'}</FieldLabel>
              <FieldValue>
                {user?.bloodType || <EmptyState>{dashboard?.profile?.notProvided || 'Not provided'}</EmptyState>}
              </FieldValue>
            </ProfileField>

            <ProfileField>
              <FieldLabel>{dashboard?.profile?.fields?.emergencyContact || 'Emergency Contact'}</FieldLabel>
              <FieldValue>
                {user?.emergencyContact?.name || <EmptyState>{dashboard?.profile?.notProvided || 'Not provided'}</EmptyState>}
              </FieldValue>
            </ProfileField>
          </ProfileGrid>

          <ActionButtons>
            <Button onClick={handleEditProfile}>{dashboard?.actions?.editProfile || 'Edit Profile'}</Button>
            <Button onClick={handleMedicalHistory}>{dashboard?.actions?.medicalHistory || 'Medical History'}</Button>
            <Button onClick={handleBookAppointment}>{dashboard?.actions?.bookAppointment || 'Book Appointment'}</Button>
            <LogoutButton onClick={handleLogout}>
              {dashboard?.actions?.logout || 'Logout'}
            </LogoutButton>
          </ActionButtons>
        </ProfileSection>

        <MedicalInfoForms />
      </DashboardContainer>

      {/* Modals */}
      {showEditProfile && <EditProfileModal />}
      {showMedicalHistory && <MedicalHistoryModal />}
      {showBookAppointment && <BookAppointmentModal />}
    </Layout>
  );
};

export default Dashboard;