// components/Geometries/Fireflies.tsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FirefliesProps {
    meshRef?: React.RefObject<THREE.Points>;
    meshGroupRef?: React.RefObject<THREE.Group>;
    color?: THREE.Color | string;
}

const Fireflies: React.FC<FirefliesProps> = ({ meshRef, meshGroupRef, color = 'yellow' }) => {
    const localPointsRef = useRef<THREE.Points>(null);
    const localGroupRef = useRef<THREE.Group>(null);
    const pointsToUse = meshRef || localPointsRef;
    const groupToUse = meshGroupRef || localGroupRef;

    const count = 100;
    const positions = useMemo(() => new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 20), [count]);
    const colors = useMemo(() => {
        const colorObj = new THREE.Color(color);
        return new Float32Array(count * 3).map(() => colorObj.r + Math.random() * 0.1);
    }, [count, color]);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return geo;
    }, [positions, colors]);

    const material = useMemo(() => new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
    }), []);

    useFrame((state) => {
        if (pointsToUse.current) {
            const time = state.clock.getElapsedTime();
            const positions = pointsToUse.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                positions[i3 + 1] += Math.sin(time + i) * 0.01; // Move y position
                positions[i3] += Math.cos(time + i) * 0.01; // Move x position slightly
            }
            pointsToUse.current.geometry.attributes.position.needsUpdate = true;
        }
        if (groupToUse.current) {
            groupToUse.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    return (
        <group ref={groupToUse}>
            <points ref={pointsToUse} geometry={geometry} material={material} />
        </group>
    );
};

export default Fireflies;