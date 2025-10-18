import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const codeSymbols = ['{', '}', '(', ')', '[', ']', '<', '>', '/', '*', '=', '+', '-', ';', ':', '.', ','];

function CodeParticle({ position, delay, symbol }: { position: [number, number, number], delay: number, symbol: string }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(time * 0.5 + delay) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text
        fontSize={0.1}
        color="#2254F6"
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </group>
  );
}

function ConnectionLines({ particles }: { particles: Array<{ position: [number, number, number] }> }) {
  const lines = useMemo(() => {
    const connections = [];
    const maxDistance = 0.4; // Only connect particles within this distance
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].position[0] - particles[j].position[0];
        const dy = particles[i].position[1] - particles[j].position[1];
        const dz = particles[i].position[2] - particles[j].position[2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < maxDistance) {
          connections.push({
            start: particles[i].position,
            end: particles[j].position,
            opacity: 1 - (distance / maxDistance)
          });
        }
      }
    }
    
    return connections;
  }, [particles]);

  return (
    <>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.start, ...line.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#2254F6" 
            opacity={line.opacity * 0.3}
            transparent
          />
        </line>
      ))}
    </>
  );
}

function ParticleCloud() {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const particlesCount = 100; // Reduced count for better performance with text
    const particlesArray = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const radius = 1.5 + Math.random() * 0.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      particlesArray.push({
        position: [x, y, z] as [number, number, number],
        delay: Math.random() * Math.PI * 2,
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
      });
    }
    
    return particlesArray;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ConnectionLines particles={particles} />
      {particles.map((particle, i) => (
        <CodeParticle
          key={i}
          position={particle.position}
          delay={particle.delay}
          symbol={particle.symbol}
        />
      ))}
    </group>
  );
}

export const ParticleSphere = () => {
  return (
    <div className="relative w-full h-[700px] opacity-100 pointer-events-none animate-fade-in">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <ParticleCloud />
      </Canvas>
    </div>
  );
};
