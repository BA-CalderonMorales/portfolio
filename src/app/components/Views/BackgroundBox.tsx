import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface BackgroundBoxProps {
    widthPercentage: number;
    heightPercentage: number;
    color: string;
    opacity: number;
}

const AnimatedLights = () => {
    const light1 = useRef<THREE.PointLight>(null);
    const light2 = useRef<THREE.PointLight>(null);
    const light3 = useRef<THREE.PointLight>(null);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        if (light1.current) {
            light1.current.position.set(
                Math.sin(time * 0.3) * 0.5,
                Math.cos(time * 0.3) * 0.5,
                0.5
            );
        }
        if (light2.current) {
            light2.current.position.set(
                Math.sin(time * 0.4) * 0.5,
                Math.cos(time * 0.4) * 0.5,
                0.5
            );
        }
        if (light3.current) {
            light3.current.position.set(
                Math.sin(time * 0.5) * 0.5,
                Math.cos(time * 0.5) * 0.5,
                0.5
            );
        }
    });

    return (
        <>
            <pointLight ref={light1} color="#ff00ff" intensity={0.5} distance={2} />
            <pointLight ref={light2} color="#00ffff" intensity={0.5} distance={2} />
            <pointLight ref={light3} color="#ffff00" intensity={0.5} distance={2} />
        </>
    );
};

const SlimePlane = ({ color, opacity, width, height }: { color: string; opacity: number; width: number; height: number }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();

    const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    const scaleX = width / viewport.width;
    const scaleY = height / viewport.height;

    return (
        <mesh ref={meshRef} geometry={geometry} scale={[scaleX, scaleY, 1]}>
            <meshPhongMaterial 
                color={color} 
                opacity={opacity} 
                transparent 
                side={THREE.DoubleSide}
                shininess={100}
                specular={new THREE.Color(0xffffff)}
            />
        </mesh>
    );
};

const BackgroundBox: React.FC<BackgroundBoxProps> = ({ widthPercentage, heightPercentage, color, opacity }) => {
    return (
        <div className="background-box">
            <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
                <AnimatedLights />
                <SlimePlane 
                    color={color} 
                    opacity={opacity} 
                    width={widthPercentage * 0.15} 
                    height={heightPercentage * 0.15} 
                />
            </Canvas>
        </div>
    );
};

export default BackgroundBox;