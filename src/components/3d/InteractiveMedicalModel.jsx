import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: #f0f9ff;
`;

const Annotation = styled.div`
  position: absolute;
  color: var(--primary);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: var(--box-shadow);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
`;

// Brain anatomy model with interactive parts
const Brain = ({ setHoverPoint }) => {
  const brainRef = useRef();
  const prefrontalRef = useRef();
  const temporalRef = useRef();
  const parietalRef = useRef();
  const cerebellumRef = useRef();
  
  // Animation rotation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    brainRef.current.rotation.y = Math.sin(time / 4) * 0.2;
  });

  return (
    <group ref={brainRef}>
      {/* Main brain body */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#f5d0c5" 
          metalness={0.1} 
          roughness={0.6} 
        />
      </mesh>
      
      {/* Cerebral cortex texture */}
      <mesh>
        <sphereGeometry args={[1.05, 24, 24]} />
        <meshStandardMaterial 
          color="#e1a99a" 
          wireframe 
          transparent
          opacity={0.5}
        />
      </mesh>
      
      {/* Prefrontal cortex - decision making */}
      <mesh 
        ref={prefrontalRef}
        position={[0.7, 0.5, 0.5]}
        onPointerOver={() => setHoverPoint('prefrontal')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color="#e57373" 
          metalness={0.3} 
          roughness={0.7} 
        />
      </mesh>
      
      {/* Temporal lobe - memory */}
      <mesh 
        ref={temporalRef}
        position={[0.6, -0.2, 0.7]}
        onPointerOver={() => setHoverPoint('temporal')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color="#64b5f6" 
          metalness={0.3} 
          roughness={0.7} 
        />
      </mesh>
      
      {/* Parietal lobe - sensory processing */}
      <mesh 
        ref={parietalRef}
        position={[0, 0.8, 0.5]}
        onPointerOver={() => setHoverPoint('parietal')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color="#81c784" 
          metalness={0.3} 
          roughness={0.7} 
        />
      </mesh>
      
      {/* Cerebellum - motor control */}
      <mesh 
        ref={cerebellumRef}
        position={[-0.6, -0.6, 0.2]}
        onPointerOver={() => setHoverPoint('cerebellum')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial 
          color="#ffb74d" 
          metalness={0.3} 
          roughness={0.7} 
        />
      </mesh>
    </group>
  );
};

// Heart model with chambers
const Heart = ({ setHoverPoint }) => {
  const heartRef = useRef();
  const leftAtriumRef = useRef();
  const rightAtriumRef = useRef();
  const leftVentricleRef = useRef();
  const rightVentricleRef = useRef();
  
  // Beating animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(time * 2) * 0.05;
    heartRef.current.scale.set(scale, scale, scale);
    heartRef.current.rotation.y = Math.sin(time / 3) * 0.2;
  });

  return (
    <group ref={heartRef}>
      {/* Main heart shape */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.4, 16, 100, Math.PI * 1.5]} />
        <meshStandardMaterial 
          color="#e53935" 
          metalness={0.1} 
          roughness={0.8} 
        />
      </mesh>
      
      {/* Left Atrium */}
      <mesh 
        ref={leftAtriumRef}
        position={[0.5, 0.7, 0]}
        onPointerOver={() => setHoverPoint('leftAtrium')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color="#ef9a9a" 
          metalness={0.2} 
          roughness={0.7} 
        />
      </mesh>
      
      {/* Right Atrium */}
      <mesh 
        ref={rightAtriumRef}
        position={[-0.5, 0.7, 0]}
        onPointerOver={() => setHoverPoint('rightAtrium')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color="#7986cb" 
          metalness={0.2} 
          roughness={0.7} 
        />
      </mesh>
      
      {/* Left Ventricle */}
      <mesh 
        ref={leftVentricleRef}
        position={[0.3, -0.5, 0]}
        onPointerOver={() => setHoverPoint('leftVentricle')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial 
          color="#ef5350" 
          metalness={0.2} 
          roughness={0.7} 
        />
      </mesh>
      
      {/* Right Ventricle */}
      <mesh 
        ref={rightVentricleRef}
        position={[-0.3, -0.5, 0]}
        onPointerOver={() => setHoverPoint('rightVentricle')}
        onPointerOut={() => setHoverPoint(null)}
      >
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial 
          color="#5c6bc0" 
          metalness={0.2} 
          roughness={0.7} 
        />
      </mesh>
      
      {/* Aorta */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
        <meshStandardMaterial 
          color="#c62828" 
          metalness={0.3} 
          roughness={0.6} 
        />
      </mesh>
    </group>
  );
};

// Interactive medical model with annotations
const InteractiveMedicalModel = ({ modelType = 'brain' }) => {
  const [hoverPoint, setHoverPoint] = useState(null);
  const [annotations, setAnnotations] = useState({});
  
  // Define annotation content
  const annotationContent = {
    // Brain annotations
    prefrontal: {
      title: 'Prefrontal Cortex',
      text: 'Decision making, personality expression'
    },
    temporal: {
      title: 'Temporal Lobe',
      text: 'Memory, speech, auditory processing'
    },
    parietal: {
      title: 'Parietal Lobe',
      text: 'Sensory perception and integration'
    },
    cerebellum: {
      title: 'Cerebellum',
      text: 'Motor control, coordination, precision'
    },
    
    // Heart annotations
    leftAtrium: {
      title: 'Left Atrium',
      text: 'Receives oxygenated blood from lungs'
    },
    rightAtrium: {
      title: 'Right Atrium',
      text: 'Receives deoxygenated blood from body'
    },
    leftVentricle: {
      title: 'Left Ventricle',
      text: 'Pumps oxygenated blood to the body'
    },
    rightVentricle: {
      title: 'Right Ventricle',
      text: 'Pumps deoxygenated blood to the lungs'
    }
  };

  return (
    <CanvasContainer>
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ height: '100%', width: '100%' }}
        onCreated={({ gl, camera, scene }) => {
          gl.setClearColor('#f0f9ff');
          gl.physicallyCorrectLights = true;
          camera.updateProjectionMatrix();
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
        
        {modelType === 'brain' && <Brain setHoverPoint={setHoverPoint} />}
        {modelType === 'heart' && <Heart setHoverPoint={setHoverPoint} />}
        
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
        />
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {hoverPoint && annotationContent[hoverPoint] && (
        <Annotation
          style={{
            top: '20px',
            left: '50%',
          }}
        >
          <strong>{annotationContent[hoverPoint].title}:</strong> {annotationContent[hoverPoint].text}
        </Annotation>
      )}
    </CanvasContainer>
  );
};

export default InteractiveMedicalModel;
