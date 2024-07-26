// components/Geometries/CelestialBodies.tsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CelestialBodyProps {
    radius?: number; // Radius of the celestial body
    speed?: number; // Speed of the movement
    color?: string; // Color of the celestial body
}

const CelestialBody: React.FC<CelestialBodyProps> = ({ radius = 1, speed = 0.02, color = 'blue' }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const orbitRadius = 5; // Distance from the center point

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();
            // Calculate new position based on a circular path
            meshRef.current.position.x = orbitRadius * Math.cos(time * speed);
            meshRef.current.position.z = orbitRadius * Math.sin(time * speed);
            meshRef.current.position.y = Math.sin(time * speed) * 0.5; // Optional: Add some vertical movement
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

const CelestialBodies: React.FC = () => {
    const bodiesCount = 5; // Number of celestial bodies

    return (
        <>
            {Array.from({ length: bodiesCount }).map((_, index) => (
                <CelestialBody 
                    key={index} 
                    radius={0.5 + Math.random() * 0.5} // Random radius between 0.5 and 1
                    speed={0.1 + Math.random() * 0.2} // Random speed between 0.1 and 0.3
                    color={`hsl(${Math.random() * 360}, 100%, 50%)`} // Random color
                />
            ))}
        </>
    );
};

export default CelestialBodies;