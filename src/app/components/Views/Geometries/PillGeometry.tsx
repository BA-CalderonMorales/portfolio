// components/Geometries/PillGeometry.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PillGeometryProps {
    color?: THREE.Color | string;
    meshRef?: React.RefObject<THREE.Mesh>;
}

const PillGeometry: React.FC<PillGeometryProps> = ({ color = 'lightblue', meshRef}) => {

    const pillRef = useRef<THREE.Mesh | null>(meshRef?.current || null);
    const radius = 0.2;
    const height = 1;

    // Create a pill-shaped geometry
    const geometry = new THREE.CapsuleGeometry(radius, height, 8, 16);

    useFrame((state, delta) => {

        if (pillRef.current) {

            // Complex rotation
            pillRef.current.rotation.x += delta * 0.5;
            pillRef.current.rotation.y += delta * 0.7;
            pillRef.current.rotation.z += delta * 0.3;

            // Oscillating movement
            const time = state.clock.getElapsedTime();
            pillRef.current.position.x = Math.sin(time * 0.8) * 2;
            pillRef.current.position.y = Math.cos(time * 1.2) * 2;
            pillRef.current.position.z = Math.sin(time * 1.5) * 2;

            // Pulsating scale
            const scale = 1 + Math.sin(time * 3) * 0.1;
            pillRef.current.scale.set(scale, scale, scale);

            pillRef.current.setRotationFromEuler(new THREE.Euler( Date.now() * 0.0008, Date.now() * 0.0008, Date.now() * 0.0008));

            pillRef.current.position.normalize(); 

            pillRef.current.quaternion.normalize();
        }

    });

    return (
        <mesh ref={pillRef} geometry={geometry}>
            <meshPhongMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                shininess={100}
            />
        </mesh>
    );
};

export default PillGeometry;