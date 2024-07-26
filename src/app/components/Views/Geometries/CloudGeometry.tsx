// components/Geometries/Clouds.tsx
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CloudsProps {
    meshGroupRef?: React.RefObject<THREE.Group>;
}

const Clouds: React.FC<CloudsProps> = (props) => {
    const groupRef = useRef<THREE.Group>(null);
    const cloudCount = 100; // Number of clouds

    // Create cloud data
    const clouds = useMemo(() => 
        Array.from({ length: cloudCount }, () => ({
            position: new THREE.Vector3(
                Math.random() * 20 - 10, // Random X position
                Math.random() * 5, // Random Y position
                Math.random() * 20 - 10 // Random Z position
            ),
            scale: Math.random() * 0.5 + 0.5, // Random scale between 0.5 and 1
            offset: Math.random() * Math.PI * 2 // Random offset for movement
        })),
    [cloudCount]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef.current?.children.forEach((child, index) => {
            if (child instanceof THREE.Mesh) {
                const cloud = clouds[index];
                // Update position to simulate rising effect
                child.position.y = cloud.position.y + Math.sin(time + cloud.offset) * 0.05; // Slight vertical movement
                child.position.z = cloud.position.z; // Keep the Z position constant

                // Move clouds higher based on scroll speed
                const scrollSpeed = window.scrollY * 0.001; // Adjust sensitivity as needed
                child.position.y += scrollSpeed; // Move clouds higher when scrolling
            }
        });
    });

    return (
        <group ref={groupRef}>
            {clouds.map((cloud, index) => (
                <mesh key={index} position={cloud.position} scale={[cloud.scale, cloud.scale, cloud.scale]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial 
                        color="white" 
                        transparent 
                        opacity={0.5} // Adjust opacity for semi-transparency
                        depthWrite={false} // Prevent depth writing for better transparency
                    />
                </mesh>
            ))}
        </group>
    );
};

export default Clouds;