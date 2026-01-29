import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  ContactShadows,
  Html,
  Float,
  PresentationControls,
  Text3D,
  Sparkles
} from '@react-three/drei';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mx_bilerp_0 } from 'three/src/nodes/materialx/lib/mx_noise.js';

// Styled container for the model viewer
const ModelViewerContainer = styled(motion.div)`
  width: 100%;
  height: 600px;
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: ${props => props.bgColor || 'transparent'};
  box-shadow: ${props => props.noShadow ? 'none' : 'var(--box-shadow)'};
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const ModelInfo = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  z-index: 10;
  max-width: 60%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  pointer-events: none;
`;

const ModelTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: var(--primary);
`;

const ModelDescription = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

// Model loading and display component
const Model = ({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();
  
  // Animate model rotation
  useFrame((state) => {
    if (modelRef.current) {
      const time = state.clock.getElapsedTime();
      modelRef.current.rotation.y = rotation[1] + Math.sin(time / 3) * 0.1;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

// Stethoscope model
const Stethoscope = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/stethoscope.glb" position={position} rotation={rotation} scale={scale} />;
};

// First Aid Kit model
const FirstAidKit = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/first_aid_kit.glb" position={position} rotation={rotation} scale={scale} />;
};

// Pills model
const Pills = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/variety_of_pills.glb" position={position} rotation={rotation} scale={scale} />;
};

// Medical Device model
const MedicalDevice = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/sci-fi_lab_machine.glb" position={position} rotation={rotation} scale={scale} />;
};
const MedicalDevice2 = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/bomba_medica_hubu.glb" position={position} rotation={rotation} scale={scale} />;
};
// Hospital Bed model
const HospitalBed = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/hospital_bed.glb" position={position} rotation={rotation} scale={scale} />;
};

// Doctor Office model
const DoctorOffice = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/office.glb" position={position} rotation={rotation} scale={scale} />;
};

// Skeleton model
const Skeleton = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/skeleton_pre-cut.glb" position={position} rotation={rotation} scale={scale} />;
};

// Doctor Avatar model
const DoctorAvatar = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  return <Model path="/models/doctor.glb" position={position} rotation={rotation} scale={scale} />;
};

// Create a floating text label that can be attached to models
const ModelLabel = ({ position, children }) => {
  return (
    <Html position={position} center>
      <div style={{
        backgroundColor: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#1E88E5',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        {children}
      </div>
    </Html>
  );
};

// Interactive floating particles
const InteractiveParticles = () => {
  return (
    <Sparkles 
      count={0} 
      scale={0} 
      size={2} 
      speed={0.3} 
      color="#26C6DA" 
    />
  );
};

const MedicalModelViewer = ({ 
  modelType, 
  title, 
  description, 
  bgColor, 
  noShadow, 
  showControls = true,
  height = '600px',
  interactive = true,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  cameraPosition = [0, 0, 10],
  fov = 45,
  autoRotate = false,
  autoRotateSpeed = 1,
  enableSparkles = false,
  minimalUI = false,
  intensity = 0.6
}) => {
  return (
    <ModelViewerContainer 
      bgColor={bgColor}
      noShadow={noShadow}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ height }}
    >
      {title && description && !minimalUI && (
        <ModelInfo>
          <ModelTitle>{title}</ModelTitle>
          <ModelDescription>{description}</ModelDescription>
        </ModelInfo>
      )}
      
      <Canvas 
        camera={{ position: cameraPosition, fov: fov }}
        style={{ height: '100%', width: '100%' }}
        shadows
      >
        <ambientLight intensity={intensity} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.2} 
          castShadow 
        />
        <directionalLight position={[-10, 0, -10]} intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={0.8} castShadow />
        <hemisphereLight intensity={0.3} groundColor="white" />
        
        {interactive ? (
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
          >
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              {modelType === 'stethoscope' && <Stethoscope position={position} rotation={rotation} scale={0.01} />}
              {modelType === 'first-aid-kit' && <FirstAidKit position={position} rotation={rotation} scale={scale} />}
              {modelType === 'pills' && <Pills position={position} rotation={rotation} scale={scale} />}
              {modelType === 'medical-device' && <MedicalDevice position={position} rotation={rotation} scale={1.2} />}
              {modelType === 'hospital-bed' && <HospitalBed position={position} rotation={rotation} scale={scale} />}
              {modelType === 'doctor-office' && <DoctorOffice position={position} rotation={[0,2*(Math.PI/4),0]}  scale={scale} />}
              {modelType === 'skeleton' && <Skeleton position={position} rotation={rotation} scale={scale} />}
              {modelType === 'doctor-avatar' && <DoctorAvatar position={position} rotation={rotation} scale={scale} />}
              {modelType === 'medical-device2' && <MedicalDevice2 position={position} rotation={rotation} scale={6} />}
            </Float>
          </PresentationControls>
        ) : (
          <>
            {modelType === 'stethoscope' && <Stethoscope position={position} rotation={rotation} scale={0.01} />}
            {modelType === 'first-aid-kit' && <FirstAidKit position={position} rotation={rotation} scale={scale} />}
            {modelType === 'pills' && <Pills position={position} rotation={rotation} scale={scale} />}
            {modelType === 'medical-device' && <MedicalDevice position={position} rotation={rotation} scale={1.2} />}
            {modelType === 'hospital-bed' && <HospitalBed position={position} rotation={rotation} scale={scale} />}
            {modelType === 'doctor-office' && <DoctorOffice position={position} rotation={[0,2*(Math.PI/4),0]} scale={scale} />}
            {modelType === 'skeleton' && <Skeleton position={[0,-2.9,0]} rotation={rotation} scale={2} />}
            {modelType === 'doctor-avatar' && <DoctorAvatar position={position} rotation={rotation} scale={5} />}
              {modelType === 'medical-device2' && <MedicalDevice2 position={[0,-1,0]} rotation={[0,Math.PI,0]} scale={6} />}
          </>
        )}
        
        {enableSparkles && <InteractiveParticles />}
        
        <Environment preset="city" />
        <ContactShadows
          position={[0, -3, 0]}
          opacity={0.6}
          scale={20}
          blur={2}
        />
        
        {showControls && (
          <OrbitControls 
            enablePan={false}
            minDistance={5}
            maxDistance={20}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
          />
        )}
      </Canvas>
    </ModelViewerContainer>
  );
};

export default MedicalModelViewer;
