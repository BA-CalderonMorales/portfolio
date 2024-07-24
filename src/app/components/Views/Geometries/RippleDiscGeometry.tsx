// components/Geometries/RippleDisc.tsx
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RippleDiscProps {
    color?: THREE.Color | string;
    meshRef?: React.RefObject<THREE.Mesh>;
}

const RippleDisc: React.FC<RippleDiscProps> = ({ color = 'lightblue', meshRef }) => {
    const discRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const timeRef = useRef(0);
    const scrollRef = useRef(0);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            scrollRef.current += event.deltaY * 0.01; // Adjust sensitivity as needed
        };

        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    useFrame(() => {
        if (discRef.current) {
            timeRef.current += 0.1; // Increment time for animation

            // Create a ripple effect by modifying the position of the vertices
            const scale = hovered ? 1.1 + Math.sin(timeRef.current * 10) * 0.1 : 1; // Scale effect
            discRef.current.scale.set(scale, scale, 1); // Apply scaling to the disc

            // Rotate the disc based on scroll input
            discRef.current.rotation.z += scrollRef.current; // Rotate around the Z-axis
            scrollRef.current *= 0.9; // Dampen the rotation effect
        }
    });

    return (
        <mesh
            ref={discRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <cylinderGeometry args={[1, 1, 0.1, 64]} />  {/* Use cylinder geometry for 3D effect */}
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default RippleDisc;