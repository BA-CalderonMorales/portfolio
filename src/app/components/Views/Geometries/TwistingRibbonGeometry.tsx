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

    // Create a more complex, flowing ribbon-like geometry
    const geometry = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-5, 0, 0),
            new THREE.Vector3(-2, 2, 2),
            new THREE.Vector3(0, 0, -2),
            new THREE.Vector3(2, -2, 2),
            new THREE.Vector3(5, 0, 0)
        ]);

        const points = curve.getPoints(200);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const positions = new Float32Array(points.length * 3 * 2);
        const uvs = new Float32Array(points.length * 2 * 2);

        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            const t = i / (points.length - 1);

            positions[i * 6] = point.x;
            positions[i * 6 + 1] = point.y;
            positions[i * 6 + 2] = point.z;
            positions[i * 6 + 3] = point.x;
            positions[i * 6 + 4] = point.y + 0.5;
            positions[i * 6 + 5] = point.z;

            uvs[i * 4] = t;
            uvs[i * 4 + 1] = 0;
            uvs[i * 4 + 2] = t;
            uvs[i * 4 + 3] = 1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

        const indices = [];
        for (let i = 0; i < points.length - 1; i++) {
            indices.push(i * 2, i * 2 + 1, (i + 1) * 2);
            indices.push((i + 1) * 2, i * 2 + 1, (i + 1) * 2 + 1);
        }

        geometry.setIndex(indices);
        geometry.computeVertexNormals();

        return geometry;
    }, []);

    useFrame((state) => {
        if (currentMeshRef.current) {
            const time = state.clock.getElapsedTime();
            const positions = currentMeshRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];
                const z = positions[i + 2];

                positions[i + 1] = y + Math.sin(time * 2 + x * 0.5) * 0.2;
                positions[i + 2] = z + Math.cos(time * 2 + x * 0.5) * 0.2;
            }

            currentMeshRef.current.geometry.attributes.position.needsUpdate = true;
            currentMeshRef.current.rotation.y = time * 0.2;
        }
    });

    return (
        <mesh ref={currentMeshRef} geometry={geometry}>
            <meshPhysicalMaterial 
                color={color} 
                side={THREE.DoubleSide}
                transparent={true}
                opacity={0.8}
                roughness={0.2}
                metalness={0.1}
            />
        </mesh>
    );
};

export default TwistingRibbon;