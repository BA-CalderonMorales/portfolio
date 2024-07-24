// components/Geometries/FloatingOrb.tsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingOrb: React.FC = () => {
    const orbRef = useRef<THREE.Mesh>(null);
    const speed = 0.1; // Movement speed

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (orbRef.current) {
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
                direction.applyQuaternion(orbRef.current.quaternion);
                orbRef.current.position.add(direction);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useFrame(() => {
        if (orbRef.current) {
            // Optional: Add some floating effect
            orbRef.current.position.z = Math.sin(Date.now() * 0.001) * 0.2; // Float effect
        }
    });

    return (
        <mesh ref={orbRef}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="lightblue" />
        </mesh>
    );
};

export default FloatingOrb;