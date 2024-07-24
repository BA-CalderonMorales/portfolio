// components/Geometries/DNAGeometry.tsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DNAGeometryProps {
    color?: THREE.Color | string;
    meshGroupRef?: React.RefObject<THREE.Group>;
}

const DNAGeometry: React.FC<DNAGeometryProps> = ({ color = 'lightblue', meshGroupRef }) => {
    const groupRef = useRef<THREE.Group>(meshGroupRef?.current || null);
    const strand1Ref = useRef<THREE.Mesh>(null);
    const strand2Ref = useRef<THREE.Mesh>(null);

    // Create a torus geometry for each strand
    const torusGeometry = useMemo(() => new THREE.TorusGeometry(1, 0.2, 16, 100), []);

    // Create connecting cylinders
    const cylinderGeometry = useMemo(() => new THREE.CylinderGeometry(0.05, 0.05, 2, 8), []);

    // Create material
    const material = useMemo(() => new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5,
        shininess: 100
    }), [color]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Rotate the entire DNA structure
            groupRef.current.rotation.y += delta * 0.5;

            // Animate individual strands
            const time = state.clock.getElapsedTime();
            if (strand1Ref.current && strand2Ref.current) {
                strand1Ref.current.position.y = Math.sin(time * 2) * 0.5;
                strand2Ref.current.position.y = Math.sin(time * 2 + Math.PI) * 0.5;
            }
        }
    });

    return (
        <group ref={groupRef}>
            <mesh ref={strand1Ref} geometry={torusGeometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh ref={strand2Ref} geometry={torusGeometry} material={material} rotation={[Math.PI / 2, 0, Math.PI]} />
            {[...Array(10)].map((_, index) => (
                <mesh
                    key={index}
                    geometry={cylinderGeometry}
                    material={material}
                    position={[0, index * 0.4 - 2, 0]}
                    rotation={[0, index * Math.PI / 5, Math.PI / 2]}
                />
            ))}
        </group>
    );
};

export default DNAGeometry;