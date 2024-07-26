// components/Geometries/MorphingCube.tsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MorphingCubeProps {
    color?: THREE.Color | string;
    meshRef?: React.RefObject<THREE.Mesh | null>;
    shadow?: boolean;
}

const MorphingCube = ({ color = 'lightblue', meshRef, shadow }: MorphingCubeProps) => {
    const currentMeshRef = useRef<THREE.Mesh | null>(meshRef?.current || null);

    // Create a cube geometry with morph targets
    const geometry = useMemo(() => {
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const sphereGeometry = new THREE.SphereGeometry(1, 12, 24);
        cubeGeometry.setAttribute(
            'morphTarget0',
            new THREE.Float32BufferAttribute(sphereGeometry.attributes.position.array, Math.random() * 0.1)
        );
        return cubeGeometry;
    }, []);

    useFrame((state) => {
        if (currentMeshRef.current) {
            const time = state.clock.getElapsedTime();

            // Morph between cube and sphere
            currentMeshRef.current.morphTargetDictionary = {
                morphTarget0: Math.abs(Math.sin(time * 0.5))
            };

            // Rotate the cube
            currentMeshRef.current.rotation.x += 0.01;
            currentMeshRef.current.rotation.y += 0.02;

            // scale the cube
            currentMeshRef.current.scale.x = 1 + Math.abs(Math.sin(time * 0.5)) * 0.5;
            currentMeshRef.current.scale.y = 1 + Math.abs(Math.sin(time * 0.5)) * 0.5;
            currentMeshRef.current.scale.z = 1 + Math.abs(Math.sin(time * 0.5)) * 0.5;
        }
    });

    return (
        <mesh ref={currentMeshRef} geometry={geometry}>
            <meshPhongMaterial
                color={color}
                shininess={100}
                shadowSide={shadow ? THREE.FrontSide : undefined}
            />
        </mesh>
    );
};

export default MorphingCube;