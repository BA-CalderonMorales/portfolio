// components/Geometries/SnakeGeometry.tsx
import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SnakeGeometry: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const pathRef = useRef<THREE.CatmullRomCurve3 | null>(null);
    const radius = 0.2; // Radius of the tube
    const tubularSegments = 200; // Number of segments along the path
    const radialSegments = 8; // Number of segments around the tube

    // Create a snake-like path
    const createPath = () => {
        const points = [];
        for (let i = 0; i < 20; i++) {
            const x = Math.sin(i * 0.5) * 5; // X position
            const y = Math.cos(i * 0.5) * 5; // Y position
            const z = i * 0.5; // Z position
            points.push(new THREE.Vector3(x, y, z));
        }
        return new THREE.CatmullRomCurve3(points);
    };

    useEffect(() => {
        pathRef.current = createPath(); // Set the path reference
    }, []);

    const tubeGeometry = useRef<THREE.BufferGeometry | undefined>(pathRef.current
        ? new THREE.BufferGeometry().setFromPoints(pathRef.current.getPoints(tubularSegments))
        : undefined);

    useFrame(() => {
        if (meshRef.current && pathRef.current) {
            // Update the path to simulate snake movement
            const time = Date.now() * 0.001; // Time variable for animation
            const points = pathRef.current.points;
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                point.x = Math.sin(i * 0.5 + time) * 5; // X position
                point.y = Math.cos(i * 0.5 + time) * 5; // Y position
                point.z = i * 0.5; // Z position
            }
            pathRef.current.updateArcLengths();

            // Update the geometry to follow the updated path
            if (tubeGeometry.current) {
                tubeGeometry.current.setFromPoints(pathRef.current.getPoints(tubularSegments));
                tubeGeometry.current.attributes.position.needsUpdate = true;
            }

            // Animate the position along the path
            const position = (time % (Math.PI * 2)) / (Math.PI * 2); // Normalize to [0, 1]
            const point = pathRef.current.getPointAt(position); // Get the point on the path
            meshRef.current.position.copy(point); // Set the position of the mesh

            // Rotate the mesh to align with the path direction
            const tangent = pathRef.current.getTangentAt(position);
            meshRef.current.lookAt(point.clone().add(tangent)); // Look in the direction of the path
        }
    });

    return (
        <mesh ref={meshRef} geometry={tubeGeometry.current || undefined}>
            <meshStandardMaterial color="lightblue" transparent opacity={0.8} />
        </mesh>
    );
};

export default SnakeGeometry;