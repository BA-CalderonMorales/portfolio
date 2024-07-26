import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BubblingOrbProps {
    meshRef?: React.RefObject<THREE.Mesh>;
    color: THREE.Color | string;
}

const BubblingOrb = (props : BubblingOrbProps) => {
    const orbRef = useRef<THREE.Mesh>(props.meshRef?.current!);
    const bubbleRefs = useRef<THREE.Mesh[]>([]); // To hold the smaller bubble meshes
    const bubbleCount = 25; // Initial number of smaller bubbles
    const bubbleCreationInterval = 250; // Time in milliseconds to create a new bubble (increased for fewer bubbles)

    // Function to create a new bubble
    const createBubble = () => {
        const geometry = new THREE.SphereGeometry(Math.random() * 0.05 + 0.02, 24, 24); // Random size
        const material = new THREE.MeshStandardMaterial({ color: props.color, transparent: true, opacity: 0.8 });
        const bubble = new THREE.Mesh(geometry, material);

        // Position the bubble at the center initially
        bubble.position.set(0, 0, 0);
        
        // Set an initial velocity for the bubble
        bubble.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.02, // Random X direction
            (Math.random() - 0.5) * 0.02, // Random Y direction
            (Math.random() - 0.5) * 0.02  // Random Z direction
        );

        bubbleRefs.current.push(bubble);
        return bubble;
    };

    useEffect(() => {
        // Create initial bubbles
        for (let i = 0; i < bubbleCount; i++) {
            createBubble();
        }

        // Create new bubbles at intervals
        const interval = setInterval(() => {
            const newBubble = createBubble();
            // Add the new bubble to the scene
            if (orbRef.current) {
                orbRef.current.add(newBubble);
            }
        }, bubbleCreationInterval); // Increased interval for fewer bubbles

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useFrame(() => {
        // Update smaller bubbles
        bubbleRefs.current.forEach((bubble) => {
            if (bubble) {
                // Move the smaller bubbles in their initial velocity direction
                bubble.position.add(bubble.userData.velocity); // Apply velocity
            }
        });
    });

    return (
        <>
            <mesh ref={orbRef}>
                <sphereGeometry args={[1.25, 32, 32]} />
                <meshStandardMaterial color={props.color} />
            </mesh>
        </>
    );
};

export default BubblingOrb;