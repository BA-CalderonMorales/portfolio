import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SphereGeometryProps {
    meshRef?: React.RefObject<THREE.Mesh>;
    color?: THREE.Color | string; // Accept either a THREE.Color or a string for color
};

const SphereGeometry = (props : SphereGeometryProps) => {
    const meshRef = React.useRef<THREE.Mesh>(props.meshRef?.current || new THREE.Mesh());

    useFrame(() => {
        if (meshRef.current) {
            // Pulsate effect
            const scaleFactor = 1 + Math.sin(Date.now() * 0.005) * 0.1; // Adjust the multiplier for amplitude
            meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color={props.color}
                opacity={0.6}
            />
        </mesh>
    );
};

export default SphereGeometry;