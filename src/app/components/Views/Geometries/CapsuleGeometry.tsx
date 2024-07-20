import React from 'react';
import * as THREE from 'three';
import { BufferGeometry, CapsuleGeometry as CapsuleGeometryThree, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three';
import { useFrame } from '@react-three/fiber';

const CapsuleGeometry: React.FC<{
    scale?: (x: number, y: number, z: number) => void,
    color?: THREE.Color
}> = ({ scale, color }) => {
    const geometryRef = React.useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap> | null>(null);

    // Animate the capsule shape
    useFrame(() => {
        if (geometryRef.current) {
            // Pulsate effect
            const scaleFactor = 1 + Math.sin(Date.now() * 0.002) * 0.1; // Adjust the multiplier for amplitude
            geometryRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
            geometryRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.5;
            geometryRef.current.rotation.y = Math.cos(Date.now() * 0.001) * 0.5;
            geometryRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.5;
        }
    });

    return (
        <mesh ref={geometryRef}>
            <capsuleGeometry args={[1, 1, 8, 8]} />
            <meshStandardMaterial color={color} transparent opacity={0.6} />
        </mesh>
    );
};

export default CapsuleGeometry;