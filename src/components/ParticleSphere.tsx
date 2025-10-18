import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function DotParticle({ position, delay, mousePos }: { position: [number, number, number], delay: number, mousePos: THREE.Vector2 }) {
  const ref = useRef<THREE.Mesh>(null);
  const originalPos = useMemo(() => new THREE.Vector3(...position), [position]);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      const baseY = originalPos.y + Math.sin(time * 0.5 + delay) * 0.1;
      
      // Calculate distance from mouse (in 2D screen space)
      const particleScreenPos = ref.current.position.clone().project(state.camera);
      const distance = mousePos.distanceTo(new THREE.Vector2(particleScreenPos.x, particleScreenPos.y));
      
      // Apply mouse influence
      const influence = Math.max(0, 1 - distance * 2);
      const pushStrength = influence * 0.3;
      
      const direction = new THREE.Vector3(
        originalPos.x - mousePos.x * 2,
        originalPos.y - mousePos.y * 2,
        originalPos.z
      ).normalize();
      
      ref.current.position.x = originalPos.x + direction.x * pushStrength;
      ref.current.position.y = baseY + direction.y * pushStrength;
      ref.current.position.z = originalPos.z + direction.z * pushStrength;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#ffffff"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ParticleCloud({ mousePos }: { mousePos: THREE.Vector2 }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const particlesCount = 1500;
    const particlesArray = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const radius = 1.5 + Math.random() * 0.2;
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

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <DotParticle
          key={i}
          position={particle.position}
          delay={particle.delay}
          mousePos={mousePos}
        />
      ))}
    </group>
  );
}

export const ParticleSphere = () => {
  const [mousePos, setMousePos] = useState(new THREE.Vector2(0, 0));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePos(new THREE.Vector2(x, y));
  };

  return (
    <div 
      className="relative w-full h-[700px] opacity-60"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <ParticleCloud mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
