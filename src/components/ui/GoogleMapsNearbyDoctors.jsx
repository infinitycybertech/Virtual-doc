import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Use environment variable for Google Maps API key
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  box-shadow: var(--box-shadow);
  background-color: #f5f5f5;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DoctorsList = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const DoctorCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }
  
  ${props => props.$selected && `
    border-color: var(--primary);
    background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);
  `}
`;

const DoctorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DoctorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const DoctorDetails = styled.div`
  flex: 1;
`;

const DoctorName = styled.h4`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.1rem;
`;

const DoctorSpecialty = styled.p`
  margin: 0.25rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const DistanceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
`;

const ActionButton = styled(motion.button)`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 136, 229, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--text-secondary);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--error);
  background: #fff5f5;
  border-radius: var(--border-radius);
  border: 1px solid #fed7d7;
`;

// Mock data for nearby doctors
const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'General Medicine',
    avatar: 'SJ',
    lat: -25.7461,
    lng: 28.1881,
    homeVisitAvailable: true,
    rating: 4.9,
    distance: '2.1 km'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    avatar: 'MC',
    lat: -25.7531,
    lng: 28.1921,
    homeVisitAvailable: true,
    rating: 4.8,
    distance: '3.5 km'
  },
  {
    id: 3,
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrics',
    avatar: 'EW',
    lat: -25.7391,
    lng: 28.1791,
    homeVisitAvailable: false,
    rating: 4.7,
    distance: '4.2 km'
  },
  {
    id: 4,
    name: 'Dr. James Thompson',
    specialty: 'Dermatology',
    avatar: 'JT',
    lat: -25.7581,
    lng: 28.1951,
    homeVisitAvailable: true,
    rating: 4.6,
    distance: '5.1 km'
  }
];

const GoogleMapsNearbyDoctors = ({ 
  onDoctorSelect, 
  onHomeVisitRequest, 
  selectedDoctorId, 
  appointmentType = 'homeVisit' 
}) => {
  const [nearbyDoctors, setNearbyDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    // Load doctors immediately
    setNearbyDoctors(mockDoctors);
    
    // Try to load map
    loadMap();
    
    // Set timeout to stop loading after 5 seconds regardless
    const timeout = setTimeout(() => {
      setLoading(false);
      if (!mapLoaded) {
        console.log('Map loading timed out, showing doctors list only');
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const loadMap = async () => {
    try {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initMap();
        return;
      }

      // Load Google Maps script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      
      // Global callback for Google Maps
      window.initGoogleMap = () => {
        initMap();
      };
      
      script.onerror = () => {
        console.error('Failed to load Google Maps');
        setLoading(false);
      };
      
      document.head.appendChild(script);
    } catch (error) {
      console.error('Error loading map:', error);
      setLoading(false);
    }
  };

  const initMap = () => {
    if (!mapRef.current) {
      setLoading(false);
      return;
    }

    try {
      const center = { lat: -25.7479, lng: 28.2293 }; // Pretoria, South Africa
      
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      // Add user location marker
      new window.google.maps.Marker({
        position: center,
        map,
        title: 'Your Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#1E88E5',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3,
          scale: 10
        }
      });

      // Add doctor markers
      mockDoctors.forEach(doctor => {
        new window.google.maps.Marker({
          position: { lat: doctor.lat, lng: doctor.lng },
          map,
          title: doctor.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: '#26C6DA',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
            scale: 8
          }
        });
      });

      setMapLoaded(true);
      setLoading(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      setLoading(false);
    }
  };

  const handleDoctorAction = (doctor) => {
    if (appointmentType === 'homeVisit') {
      onHomeVisitRequest(doctor);
    } else {
      onDoctorSelect(doctor);
    }
  };

  return (
    <div>
      <MapContainer>
        {!mapLoaded && loading && (
          <LoadingSpinner>
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Loading map...
          </LoadingSpinner>
        )}
        {!mapLoaded && !loading && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            background: '#f0f0f0',
            color: '#666'
          }}>
            <i className="fas fa-map-marked-alt mr-2"></i>
            Map unavailable - showing doctors list below
          </div>
        )}
        <MapWrapper ref={mapRef} />
      </MapContainer>

      <DoctorsList>
        {nearbyDoctors.map(doctor => (
          <DoctorCard
            key={doctor.id}
            $selected={selectedDoctorId === doctor.id}
            onClick={() => onDoctorSelect(doctor)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <DoctorInfo>
              <DoctorAvatar>{doctor.avatar}</DoctorAvatar>
              <DoctorDetails>
                <DoctorName>{doctor.name}</DoctorName>
                <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
                <DistanceInfo>
                  <i className="fas fa-map-marker-alt"></i>
                  {doctor.distance} away
                  <span style={{ marginLeft: '1rem' }}>
                    <i className="fas fa-star" style={{ color: '#ffd700' }}></i>
                    {doctor.rating}
                  </span>
                </DistanceInfo>
              </DoctorDetails>
            </DoctorInfo>
            
            {appointmentType === 'homeVisit' && doctor.homeVisitAvailable && (
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleDoctorAction(doctor);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-home mr-2"></i>
                Request Home Visit
              </ActionButton>
            )}
            
            {appointmentType === 'inPerson' && (
              <ActionButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleDoctorAction(doctor);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Book In-Person Visit
              </ActionButton>
            )}
          </DoctorCard>
        ))}
      </DoctorsList>
    </div>
  );
};

export default GoogleMapsNearbyDoctors;