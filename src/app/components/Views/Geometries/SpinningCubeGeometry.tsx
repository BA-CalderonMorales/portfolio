// components/Geometries/SpinningCube.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SpinningCubeProps {
    meshRef?: React.RefObject<THREE.Mesh>;
    color: THREE.Color | string;
}

const SpinningCube = (props : SpinningCubeProps) => {
    const cubeRef = useRef<THREE.Mesh>(props.meshRef?.current!);

    useFrame(() => {
        if (cubeRef.current) {
            // Spin the cube around the Y-axis
            cubeRef.current.rotation.y += 0.01; // Adjust the speed of rotation
        }
    });

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[6, 6, 6]} />
            <meshStandardMaterial color={props.color} side={THREE.BackSide} /> {/* Use BackSide to render the inside */}
        </mesh>
    );
};

export default SpinningCube;