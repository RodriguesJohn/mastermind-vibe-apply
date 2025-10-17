import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const CODE_CHARS = ['<', '>', '{', '}', '(', ')', '[', ']', '/', '*', '+', '=', ';', ':', '.', ',', 'function', 'const', 'let', 'if', 'for', '0', '1', '&&', '||'];

function CodeParticle({ position, char, delay }: { position: [number, number, number], char: string, delay: number }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.y = time * 0.3 + delay;
      ref.current.position.y = position[1] + Math.sin(time * 0.5 + delay) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text
        fontSize={0.08}
        color="#2254F6"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.001}
        outlineColor="#5ba3ff"
      >
        {char}
      </Text>
    </group>
  );
}

function ParticleCloud() {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const particlesCount = 80;
    const particlesArray = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const radius = 2 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      particlesArray.push({
        position: [x, y, z] as [number, number, number],
        char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
        delay: Math.random() * Math.PI * 2
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
      {particles.map((particle, i) => (
        <CodeParticle
          key={i}
          position={particle.position}
          char={particle.char}
          delay={particle.delay}
        />
      ))}
    </group>
  );
}

export const ParticleSphere = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-60 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <ParticleCloud />
      </Canvas>
    </div>
  );
};
