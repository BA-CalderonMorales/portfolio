// components/Geometries/BlackHole.tsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BlackHoleProps {
    meshRef?: React.RefObject<THREE.Mesh>;
    meshGroupRef?: React.RefObject<THREE.Group>;
    color?: THREE.Color | string;
}

interface DiamondProps {
    color?: THREE.Color | string;
}

const Diamond = (props: DiamondProps) => {

    const diamondGeometry = useMemo(() => new THREE.TetrahedronGeometry(0.12, 0), []); // Create a cone to represent a diamond shape

    const diamondMaterial = useMemo(() => new THREE.MeshStandardMaterial({

        color: props.color,
        transparent: true, opacity: 0.8

    }), [props.color]);

    return <mesh geometry={diamondGeometry} material={diamondMaterial} />;

};

const BlackHole = (props: BlackHoleProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const bubbleCount = 200; // Number of diamonds
    const tornadoHeight = 7;
    const tornadoTopRadius = 5;
    const tornadoBottomRadius = 0.5;

    const diamondData = useMemo(() => 
        Array.from({ length: bubbleCount }, () => ({
            speed: Math.random() * 0.03 + 0.02, // Random speed between 0.02 and 0.05
            startOffset: Math.random(), // Random start position
        })),
    [bubbleCount]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef.current?.children.forEach((child, index) => {
            if (child instanceof THREE.Mesh) {
                const { speed, startOffset } = diamondData[index];
                // Calculate diamond position
                const progress = ((time * speed + startOffset) % 1);
                const radius = THREE.MathUtils.lerp(tornadoBottomRadius, tornadoTopRadius, 1 - progress);
                const angle = time * 0.5 + index * 0.1; // Slowed down rotation speed
                
                // Set new position
                child.position.set(
                    Math.cos(angle) * radius,
                    THREE.MathUtils.lerp(-tornadoHeight / 2, tornadoHeight / 2, 1 - progress),
                    Math.sin(angle) * radius
                );

                // Set opacity
                if (child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.opacity = Math.sin(progress * Math.PI);
                }
            }
        });
    });

    return (
        <group ref={groupRef}>
            {diamondData.map((data, index) => (
                <Diamond key={index} />
            ))}
        </group>
    );
};

export default BlackHole;