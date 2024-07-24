// components/Geometries/TwistingRibbon.tsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TwistingRibbonProps {
    color?: THREE.Color | string;
    meshRef?: React.RefObject<THREE.Mesh>;
}

const TwistingRibbon: React.FC<TwistingRibbonProps> = ({ color = 'lightblue', meshRef }) => {
    const currentMeshRef = useRef<THREE.Mesh>(meshRef?.current || null);

    // Create a ribbon-like geometry
    const geometry = useMemo(() => {
        const path = new THREE.CurvePath();
        for (let i = 0; i < 10; i++) {
            const curve = new THREE.QuadraticBezierCurve3(
                new THREE.Vector3(i, Math.sin(i), 0),
                new THREE.Vector3(i + 0.5, Math.cos(i + 0.5), 0),
                new THREE.Vector3(i + 1, Math.sin(i + 1), 0)
            );
            path.add(curve);
        }
        return new THREE.TubeGeometry(path as THREE.Curve<THREE.Vector3>, 100, 0.1, 8, false);
    }, []);

    useFrame((state) => {
        if (currentMeshRef.current) {
            const time = state.clock.getElapsedTime();

            // Twisting rotation
            currentMeshRef.current.rotation.x = time * 0.5;
            currentMeshRef.current.rotation.y = time * 0.7;
        }
    });

    return (
        <mesh ref={currentMeshRef} geometry={geometry}>
            <meshPhongMaterial color={color} shininess={100} />
        </mesh>
    );
};

export default TwistingRibbon;