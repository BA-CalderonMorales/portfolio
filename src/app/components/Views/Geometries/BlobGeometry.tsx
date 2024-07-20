// components/Geometries/BlobGeometry.tsx
import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BlobGeometryProps {
    blobRef?: React.RefObject<THREE.Mesh>;
    color?: THREE.Color | string; // Accept either a THREE.Color or a string for color
}

const BlobGeometry: React.FC<BlobGeometryProps> = ({ color = 'lightpink', blobRef = null }) => {
    const meshRef = React.useRef<THREE.Mesh>(blobRef?.current || new THREE.Mesh());

    // Create a more organic blob-like geometry
    const geometryRef = React.useRef<THREE.BufferGeometry>(new THREE.SphereGeometry(1, 1, 1));

    useFrame(() => {
        if (meshRef.current) {
            // Pulsate effect with a higher minimum scale
            const scaleFactor = 0.95 + Math.sin(Date.now() * 0.002) * 0.05; // Pulsate between 0.95 and 1.0
            meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

            // Float effect - limit the floating to a smaller range
            meshRef.current.position.z += 0.005; // Move slightly away in the z-axis
            if (meshRef.current.position.z > 1.5) {
                meshRef.current.position.z = 0; // Reset position after reaching a certain distance
            }

            // Randomly displace vertices for a blob effect
            const positionArray = geometryRef.current.attributes.position.array;
            for (let i = 0; i < positionArray.length; i += 3) {
                const x = positionArray[i];
                const y = positionArray[i + 1];
                const z = positionArray[i + 2];

                // Displace vertices randomly for a smoother blob effect
                positionArray[i] += Math.sin(Date.now() * 0.001 + x) * 0.03; // X displacement
                positionArray[i + 1] += Math.cos(Date.now() * 0.001 + y) * 0.03; // Y displacement
                positionArray[i + 2] += Math.sin(Date.now() * 0.001 + z) * 0.03; // Z displacement
            }
            geometryRef.current.attributes.position.needsUpdate = true; // Update the geometry
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometryRef.current}>
            <meshStandardMaterial color={color} transparent opacity={0.6} />
        </mesh>
    );
};

export default BlobGeometry;