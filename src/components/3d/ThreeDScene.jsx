import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

// This component will load and display a 3D model
const Model = ({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    modelRef.current.rotation.y = rotation[1] + Math.sin(time / 4) * 0.2;
    
    // Handle hover animation manually
    if (hovered) {
      modelRef.current.scale.lerp([scale * 1.05, scale * 1.05, scale * 1.05], 0.1);
    } else {
      modelRef.current.scale.lerp([scale, scale, scale], 0.1);
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

// A 3D medical symbol that rotates
const MedicalSymbol = () => {
  const symbolRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    symbolRef.current.rotation.y = time / 2;
  });
  
  return (
    <group ref={symbolRef}>
      {/* Rod */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4, 32]} />
        <meshStandardMaterial color="#1E88E5" />
      </mesh>
      
      {/* Snake */}
      <mesh position={[0, 1, 0]}>
        <torusGeometry args={[0.5, 0.1, 16, 100, Math.PI * 2]} />
        <meshStandardMaterial color="#26C6DA" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Top sphere */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#1E88E5" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
};

// Pulsing heart model
const PulsingHeart = () => {
  const heartRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(time * 3) * 0.05;
    heartRef.current.scale.set(scale, scale, scale);
  });
  
  return (
    <mesh ref={heartRef}>
      <sphereGeometry args={[0.7, 32, 32]} /> {/* Using sphere instead of heartGeometry */}
      <meshStandardMaterial color="#F44336" roughness={0.5} />
    </mesh>
  );
};

// DNA helix model
const DNAHelix = () => {
  const dnaRef = useRef();
  const numPoints = 20;
  const radius = 0.5;
  const height = 4;
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    dnaRef.current.rotation.y = time / 3;
  });
  
  return (
    <group ref={dnaRef}>
      {/* First strand */}
      {Array.from({ length: numPoints }).map((_, i) => (
        <mesh 
          key={`strand1-${i}`}
          position={[
            radius * Math.cos(i / numPoints * Math.PI * 4),
            height / 2 - i / numPoints * height,
            radius * Math.sin(i / numPoints * Math.PI * 4)
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#26C6DA" />
        </mesh>
      ))}
      
      {/* Second strand */}
      {Array.from({ length: numPoints }).map((_, i) => (
        <mesh 
          key={`strand2-${i}`}
          position={[
            radius * Math.cos(i / numPoints * Math.PI * 4 + Math.PI),
            height / 2 - i / numPoints * height,
            radius * Math.sin(i / numPoints * Math.PI * 4 + Math.PI)
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1E88E5" />
        </mesh>
      ))}
      
      {/* Connections between strands */}
      {Array.from({ length: numPoints }).map((_, i) => {
        // Calculate positions for cylinder ends
        const x1 = radius * Math.cos(i / numPoints * Math.PI * 4);
        const z1 = radius * Math.sin(i / numPoints * Math.PI * 4);
        const x2 = radius * Math.cos(i / numPoints * Math.PI * 4 + Math.PI);
        const z2 = radius * Math.sin(i / numPoints * Math.PI * 4 + Math.PI);
        const y = height / 2 - i / numPoints * height;
        
        return (
          <mesh key={`connect-${i}`}>
            <cylinderGeometry args={[0.02, 0.02, 1, 16]} />
            <meshStandardMaterial color="#FFFFFF" />
            <group position={[(x1 + x2) / 2, y, (z1 + z2) / 2]}>
              {/* Properly orient the cylinder to connect the points */}
              <group 
                rotation={[
                  Math.PI / 2,
                  Math.atan2(z2 - z1, x2 - x1),
                  0
                ]}
              />
            </group>
          </mesh>
        );
      })}
    </group>
  );
};

// Main 3D scene component
const ThreeDScene = ({ modelType = 'medical-symbol', modelPath = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 0.7,
        bounce: 0.2
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ 
          height: '100%', 
          width: '100%',
          minHeight: '300px' 
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {modelType === 'custom' && modelPath && (
          <Model path={modelPath} scale={1} position={[0, 0, 0]} />
        )}
        
        {modelType === 'medical-symbol' && <MedicalSymbol />}
        {modelType === 'dna-helix' && <DNAHelix />}
        
        <Environment preset="city" />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={1.5}
        />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </motion.div>
  );
};

export default ThreeDScene;
