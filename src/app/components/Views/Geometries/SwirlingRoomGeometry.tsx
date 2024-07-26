// components/Geometries/SwirlingRoom.tsx
import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const SwirlingRoom: React.FC = () => {
    const roomRef = useRef<THREE.Mesh>(null);
    const { size } = useThree(); // Get the size of the canvas

    useEffect(() => {
        // Set the room size based on the viewport dimensions
        const roomSize = Math.max(size.width, size.height) * 1.5; // Adjust size to cover the screen
        if (roomRef.current) {
            roomRef.current.scale.set(roomSize, roomSize, roomSize);
        }
    }, [size]); // Recalculate when size changes

    useFrame(() => {
        if (roomRef.current) {
            // Spin the room very slowly around the Y-axis
            roomRef.current.rotation.y += 0.002; // Adjust the speed of rotation for comfort
        }
    });

    return (
        <mesh ref={roomRef}>
            <boxGeometry args={[1, 1, 1]} /> {/* Base size of 1, will be scaled */}
            <meshStandardMaterial color="lightblue" side={THREE.BackSide} /> {/* Use BackSide to render the inside */}
        </mesh>
    );
};

export default SwirlingRoom;