import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DodecahedronGeometryProps {
    dodecahedronRef?: React.RefObject<THREE.Mesh>;
    color?: THREE.Color | string; // Accept either a THREE.Color or a string for color
};

const DodecahedronGeometry = (props : DodecahedronGeometryProps) => {
    const meshRef = React.useRef<THREE.Mesh>(props.dodecahedronRef?.current || new THREE.Mesh());

    useFrame(() => {
        if (meshRef.current) {
            // Pulsate effect
            const scaleFactor = 1 + Math.sin(Date.now() * 0.002) * 0.1; // Adjust the multiplier for amplitude
            meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
        }
    });

    return (
        <mesh ref={meshRef}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={props.color} transparent opacity={0.6} />
        </mesh>
    );
};

export default DodecahedronGeometry;