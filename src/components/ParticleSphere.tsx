import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function DotParticle({ position, delay }: { position: [number, number, number], delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(time * 0.5 + delay) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

function ParticleCloud() {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const particlesCount = 800;
    const particlesArray = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const radius = 2 + Math.random() * 0.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      particlesArray.push({
        position: [x, y, z] as [number, number, number],
        delay: Math.random() * Math.PI * 2,
        theta: theta,
        phi: phi
      });
    }
    
    return particlesArray;
  }, []);

  const connections = useMemo(() => {
    const connectionsArray = [];
    const maxDistance = 0.5;
    
    // Create horizontal wave-like connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].position[0] - particles[j].position[0];
        const dy = particles[i].position[1] - particles[j].position[1];
        const dz = particles[i].position[2] - particles[j].position[2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        // Connect particles that are close and at similar heights (for horizontal lines)
        const heightDiff = Math.abs(particles[i].position[1] - particles[j].position[1]);
        if (distance < maxDistance && heightDiff < 0.3) {
          connectionsArray.push({
            start: particles[i].position,
            end: particles[j].position,
            opacity: 1 - (distance / maxDistance)
          });
        }
      }
    }
    
    return connectionsArray;
  }, [particles]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {connections.map((connection, i) => (
        <Line
          key={`line-${i}`}
          points={[connection.start, connection.end]}
          color="#ffffff"
          lineWidth={1}
          transparent
          opacity={connection.opacity * 0.4}
        />
      ))}
      {particles.map((particle, i) => (
        <DotParticle
          key={i}
          position={particle.position}
          delay={particle.delay}
        />
      ))}
    </group>
  );
}

export const ParticleSphere = () => {
  return (
    <div className="relative w-full h-[700px] opacity-60 pointer-events-none">
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
