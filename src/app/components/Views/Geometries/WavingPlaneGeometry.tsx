// components/Geometries/WavingPlane.tsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WavingPlane: React.FC = () => {
    const planeRef = useRef<THREE.Mesh>(null);
    const speed = 0.1; // Movement speed
    const waveSpeed = 0.1; // Speed of the wave effect

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (planeRef.current) {
                const direction = new THREE.Vector3();

                switch (event.key) {
                    case 'w': // Move up
                        direction.set(0, speed, 0);
                        break;
                    case 's': // Move down
                        direction.set(0, -speed, 0);
                        break;
                    case 'a': // Move left
                        direction.set(-speed, 0, 0);
                        break;
                    case 'd': // Move right
                        direction.set(speed, 0, 0);
                        break;
                    case ' ': // Move away from the user
                        direction.set(0, 0, -speed);
                        break;
                    case 'Shift':
                        // Hold Shift for the next key press
                        return;
                    case ' ': // Move towards the user (Shift + Space)
                        if (event.shiftKey) {
                            direction.set(0, 0, speed);
                        }
                        break;
                    default:
                        return; // Exit if the key is not relevant
                }

                // Transform direction to world coordinates
                direction.applyQuaternion(planeRef.current.quaternion);
                planeRef.current.position.add(direction);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useFrame(() => {
        if (planeRef.current) {
            // Create a waving effect
            const positionAttribute = planeRef.current.geometry.attributes.position;
            const time = Date.now() * waveSpeed;

            for (let i = 0; i < positionAttribute.count; i++) {
                const y = Math.sin(i / 2 + time * 0.001) * 0.2; // Wave effect
                positionAttribute.setY(i, y);
            }
            positionAttribute.needsUpdate = true; // Update the geometry
        }
    });

    return (
        <mesh ref={planeRef}>
            <planeGeometry args={[5, 5, 32, 32]} />
            <meshStandardMaterial color="lightgreen" />
        </mesh>
    );
};

export default WavingPlane;