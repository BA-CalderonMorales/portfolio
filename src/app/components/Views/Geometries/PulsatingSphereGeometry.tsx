// components/Geometries/PulsatingSphere.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PulsatingSphereProps {
    color?: THREE.Color | string;
    meshRef?: React.RefObject<THREE.Mesh>;
}

const PulsatingSphere: React.FC<PulsatingSphereProps> = ({ color = 'lightblue', meshRef }) => {
    const currentMeshRef = useRef<THREE.Mesh>(meshRef?.current || null);

    // Create a sphere geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    useFrame((state) => {
        if (currentMeshRef.current) {
            const time = state.clock.getElapsedTime();

            // Pulsating scale
            const scale = 1 + Math.sin(time * 3) * 0.3;
            currentMeshRef.current.scale.set(scale, scale, scale);

            // Changing color
            const hue = (time * 0.1) % 1;
            const material = currentMeshRef.current.material as THREE.MeshPhongMaterial;
            material.color.setHSL(hue, 0.5, 0.5);
        }
    });

    return (
        <mesh ref={currentMeshRef} geometry={geometry}>
            <meshPhongMaterial color={color} shininess={100} />
        </mesh>
    );
};

export default PulsatingSphere;