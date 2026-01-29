import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './Button';
import { useAuth } from '../../contexts/AuthContext';

const MedicalFormsContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormTitle = styled.h2`
  color: var(--text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FormIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
  overflow-x: auto;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.$active ? 'var(--primary)' : 'var(--text-secondary)'};
  border-bottom: 2px solid ${props => props.$active ? 'var(--primary)' : 'transparent'};
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: var(--primary);
  }
`;

const FormContent = styled(motion.div)`
  min-height: 400px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(42, 157, 219, 0.1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(42, 157, 219, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(42, 157, 219, 0.1);
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  input[type="checkbox"] {
    width: auto;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SaveButton = styled(Button)`
  background: var(--primary);
  
  &:hover {
    background: #1a7bb8;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background: #6c757d;
  
  &:hover {
    background: #5a6268;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #c3e6cb;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
`;

const MedicalInfoForms = () => {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('basic');
  const [loading, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    // Basic Health Info
    dateOfBirth: user?.dateOfBirth || '',
    gender: user?.gender || '',
    bloodType: user?.bloodType || '',
    height: user?.height || '',
    weight: user?.weight || '',
    
    // Medical History
    allergies: user?.allergies || [],
    currentMedications: user?.currentMedications || [],
    medicalConditions: user?.medicalConditions || [],
    surgeries: user?.surgeries || [],
    familyHistory: user?.familyHistory || '',
    
    // Insurance & Emergency
    insuranceProvider: user?.insuranceProvider || '',
    insurancePolicyNumber: user?.insurancePolicyNumber || '',
    emergencyContactName: user?.emergencyContactName || '',
    emergencyContactPhone: user?.emergencyContactPhone || '',
    emergencyContactRelation: user?.emergencyContactRelation || '',
    
    // Additional Info
    smokingStatus: user?.smokingStatus || '',
    alcoholConsumption: user?.alcoholConsumption || '',
    exerciseFrequency: user?.exerciseFrequency || '',
    dietaryRestrictions: user?.dietaryRestrictions || '',
    notes: user?.notes || ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    const authToken = localStorage.getItem('authToken');
    console.log('Sending medical data:', formData);
    console.log('Auth token exists:', !!authToken);

    // Check if user is authenticated
    if (!authToken) {
      setMessage({ 
        type: 'error', 
        text: 'You must be logged in to update medical information. Please log in and try again.' 
      });
      setSaving(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/update-medical-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        updateUser(updatedUser);
        setMessage({ type: 'success', text: 'Medical information updated successfully!' });
      } else {
        console.error('Response not ok:', response.status, response.statusText);
        let errorMessage;
        try {
          const error = await response.json();
          
          // Handle specific error cases
          if (response.status === 401 || response.status === 403) {
            errorMessage = 'Your session has expired. Please log in again.';
          } else if (response.status === 404) {
            errorMessage = 'User not found. Please contact support.';
          } else {
            errorMessage = error.message || 'Failed to update medical information';
          }
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        setMessage({ type: 'error', text: errorMessage });
      }
    } catch (error) {
      console.error('Error updating medical info:', error);
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: '👤' },
    { id: 'medical', label: 'Medical History', icon: '🏥' },
    { id: 'emergency', label: 'Emergency & Insurance', icon: '🆘' },
    { id: 'lifestyle', label: 'Lifestyle', icon: '🌱' }
  ];

  const renderBasicInfo = () => (
    <FormGrid>
      <FormGroup>
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          type="date"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="gender">Gender</Label>
        <Select
          id="gender"
          value={formData.gender}
          onChange={(e) => handleInputChange('gender', e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="bloodType">Blood Type</Label>
        <Select
          id="bloodType"
          value={formData.bloodType}
          onChange={(e) => handleInputChange('bloodType', e.target.value)}
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="height">Height (cm)</Label>
        <Input
          type="number"
          id="height"
          value={formData.height}
          onChange={(e) => handleInputChange('height', e.target.value)}
          placeholder="170"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="weight">Weight (kg)</Label>
        <Input
          type="number"
          id="weight"
          value={formData.weight}
          onChange={(e) => handleInputChange('weight', e.target.value)}
          placeholder="70"
        />
      </FormGroup>
    </FormGrid>
  );

  const renderMedicalHistory = () => (
    <div>
      <FormGroup>
        <Label>Allergies</Label>
        {formData.allergies.map((allergy, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Input
              value={allergy}
              onChange={(e) => handleArrayChange('allergies', index, e.target.value)}
              placeholder="Enter allergy"
            />
            <Button
              type="button"
              onClick={() => removeArrayItem('allergies', index)}
              style={{ background: '#ff4757', minWidth: 'auto', padding: '0.5rem' }}
            >
              ×
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => addArrayItem('allergies')}
          style={{ background: '#2ed573', marginTop: '0.5rem' }}
        >
          Add Allergy
        </Button>
      </FormGroup>

      <FormGroup>
        <Label>Current Medications</Label>
        {formData.currentMedications.map((medication, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Input
              value={medication}
              onChange={(e) => handleArrayChange('currentMedications', index, e.target.value)}
              placeholder="Medication name and dosage"
            />
            <Button
              type="button"
              onClick={() => removeArrayItem('currentMedications', index)}
              style={{ background: '#ff4757', minWidth: 'auto', padding: '0.5rem' }}
            >
              ×
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => addArrayItem('currentMedications')}
          style={{ background: '#2ed573', marginTop: '0.5rem' }}
        >
          Add Medication
        </Button>
      </FormGroup>

      <FormGroup>
        <Label>Medical Conditions</Label>
        {formData.medicalConditions.map((condition, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Input
              value={condition}
              onChange={(e) => handleArrayChange('medicalConditions', index, e.target.value)}
              placeholder="Medical condition"
            />
            <Button
              type="button"
              onClick={() => removeArrayItem('medicalConditions', index)}
              style={{ background: '#ff4757', minWidth: 'auto', padding: '0.5rem' }}
            >
              ×
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => addArrayItem('medicalConditions')}
          style={{ background: '#2ed573', marginTop: '0.5rem' }}
        >
          Add Condition
        </Button>
      </FormGroup>

      <FormGroup>
        <Label>Previous Surgeries</Label>
        {formData.surgeries.map((surgery, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Input
              value={surgery}
              onChange={(e) => handleArrayChange('surgeries', index, e.target.value)}
              placeholder="Surgery type and date"
            />
            <Button
              type="button"
              onClick={() => removeArrayItem('surgeries', index)}
              style={{ background: '#ff4757', minWidth: 'auto', padding: '0.5rem' }}
            >
              ×
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => addArrayItem('surgeries')}
          style={{ background: '#2ed573', marginTop: '0.5rem' }}
        >
          Add Surgery
        </Button>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="familyHistory">Family Medical History</Label>
        <Textarea
          id="familyHistory"
          value={formData.familyHistory}
          onChange={(e) => handleInputChange('familyHistory', e.target.value)}
          placeholder="Describe any relevant family medical history..."
        />
      </FormGroup>
    </div>
  );

  const renderEmergencyInfo = () => (
    <FormGrid>
      <FormGroup>
        <Label htmlFor="insuranceProvider">Insurance Provider</Label>
        <Input
          id="insuranceProvider"
          value={formData.insuranceProvider}
          onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
          placeholder="Insurance company name"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="insurancePolicyNumber">Policy Number</Label>
        <Input
          id="insurancePolicyNumber"
          value={formData.insurancePolicyNumber}
          onChange={(e) => handleInputChange('insurancePolicyNumber', e.target.value)}
          placeholder="Policy number"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
        <Input
          id="emergencyContactName"
          value={formData.emergencyContactName}
          onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
          placeholder="Full name"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="emergencyContactPhone">Emergency Contact Phone</Label>
        <Input
          type="tel"
          id="emergencyContactPhone"
          value={formData.emergencyContactPhone}
          onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
          placeholder="+27 XX XXX XXXX"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="emergencyContactRelation">Relationship</Label>
        <Select
          id="emergencyContactRelation"
          value={formData.emergencyContactRelation}
          onChange={(e) => handleInputChange('emergencyContactRelation', e.target.value)}
        >
          <option value="">Select Relationship</option>
          <option value="spouse">Spouse</option>
          <option value="parent">Parent</option>
          <option value="child">Child</option>
          <option value="sibling">Sibling</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </Select>
      </FormGroup>
    </FormGrid>
  );

  const renderLifestyleInfo = () => (
    <FormGrid>
      <FormGroup>
        <Label htmlFor="smokingStatus">Smoking Status</Label>
        <Select
          id="smokingStatus"
          value={formData.smokingStatus}
          onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="never">Never smoked</option>
          <option value="former">Former smoker</option>
          <option value="current">Current smoker</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="alcoholConsumption">Alcohol Consumption</Label>
        <Select
          id="alcoholConsumption"
          value={formData.alcoholConsumption}
          onChange={(e) => handleInputChange('alcoholConsumption', e.target.value)}
        >
          <option value="">Select Frequency</option>
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="occasionally">Occasionally</option>
          <option value="regularly">Regularly</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="exerciseFrequency">Exercise Frequency</Label>
        <Select
          id="exerciseFrequency"
          value={formData.exerciseFrequency}
          onChange={(e) => handleInputChange('exerciseFrequency', e.target.value)}
        >
          <option value="">Select Frequency</option>
          <option value="none">No exercise</option>
          <option value="1-2">1-2 times per week</option>
          <option value="3-4">3-4 times per week</option>
          <option value="5+">5+ times per week</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
        <Input
          id="dietaryRestrictions"
          value={formData.dietaryRestrictions}
          onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
          placeholder="Vegetarian, vegan, gluten-free, etc."
        />
      </FormGroup>

      <FormGroup style={{ gridColumn: '1 / -1' }}>
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
          placeholder="Any additional medical information or notes..."
        />
      </FormGroup>
    </FormGrid>
  );

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return renderBasicInfo();
      case 'medical':
        return renderMedicalHistory();
      case 'emergency':
        return renderEmergencyInfo();
      case 'lifestyle':
        return renderLifestyleInfo();
      default:
        return renderBasicInfo();
    }
  };

  return (
    <MedicalFormsContainer>
      <FormHeader>
        <FormTitle>
          <FormIcon>🏥</FormIcon>
          Medical Information
        </FormTitle>
      </FormHeader>

      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} {tab.label}
          </Tab>
        ))}
      </TabsContainer>

      <form onSubmit={handleSubmit}>
        {message.text && (
          message.type === 'success' ? (
            <SuccessMessage>{message.text}</SuccessMessage>
          ) : (
            <ErrorMessage>{message.text}</ErrorMessage>
          )
        )}

        <FormContent
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderActiveTabContent()}
        </FormContent>

        <ActionButtons>
          <CancelButton
            type="button"
            onClick={() => setFormData({
              dateOfBirth: user?.dateOfBirth || '',
              gender: user?.gender || '',
              bloodType: user?.bloodType || '',
              height: user?.height || '',
              weight: user?.weight || '',
              allergies: user?.allergies || [],
              currentMedications: user?.currentMedications || [],
              medicalConditions: user?.medicalConditions || [],
              surgeries: user?.surgeries || [],
              familyHistory: user?.familyHistory || '',
              insuranceProvider: user?.insuranceProvider || '',
              insurancePolicyNumber: user?.insurancePolicyNumber || '',
              emergencyContactName: user?.emergencyContactName || '',
              emergencyContactPhone: user?.emergencyContactPhone || '',
              emergencyContactRelation: user?.emergencyContactRelation || '',
              smokingStatus: user?.smokingStatus || '',
              alcoholConsumption: user?.alcoholConsumption || '',
              exerciseFrequency: user?.exerciseFrequency || '',
              dietaryRestrictions: user?.dietaryRestrictions || '',
              notes: user?.notes || ''
            })}
          >
            Reset Form
          </CancelButton>
          <SaveButton type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Medical Information'}
          </SaveButton>
        </ActionButtons>
      </form>
    </MedicalFormsContainer>
  );
};

export default MedicalInfoForms;