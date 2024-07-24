// components/Geometries/TorusKnotGeometry.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TorusKnotGeometryProps {
    color?: THREE.Color | string;
    meshRef?: React.RefObject<THREE.Mesh>;
}

const TorusKnotGeometry: React.FC<TorusKnotGeometryProps> = ({ color = 'lightblue', meshRef }) => {
    const currentMeshRef = useRef<THREE.Mesh>(meshRef?.current || null);

    // Create a torus knot geometry
    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);

    useFrame((state, delta) => {
        if (currentMeshRef.current) {
            // Complex rotation
            currentMeshRef.current.rotation.x += delta * 0.5;
            currentMeshRef.current.rotation.y += delta * 0.7;
            currentMeshRef.current.rotation.z += delta * 0.3;

            // Oscillating movement
            const time = state.clock.getElapsedTime();
            currentMeshRef.current.position.x = Math.sin(time * 0.8) * 2;
            currentMeshRef.current.position.y = Math.cos(time * 1.2) * 2;
            currentMeshRef.current.position.z = Math.sin(time * 1.5) * 2;

            // Pulsating scale
            const scale = 1 + Math.sin(time * 3) * 0.1;
            currentMeshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh ref={currentMeshRef} geometry={geometry}>
            <meshPhongMaterial 
                color={color} 
                emissive={color} 
                emissiveIntensity={0.5} 
                shininess={100}
            />
        </mesh>
    );
};

export default TorusKnotGeometry;