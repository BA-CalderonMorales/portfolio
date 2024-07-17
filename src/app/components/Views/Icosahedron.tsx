import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { AppViewModel } from "../ViewModels/AppViewModel";

export const Icosahedron = ({ animationColor }: { animationColor?: string }) => {
    const { scene } = useThree((state) => state) as { scene: THREE.Scene };

    const color = new THREE.Color(animationColor);

    const lightMap = useMemo(() => {

        const size = 256;
        const data = new Uint8Array(size * size * 4);

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const r = Math.floor((x / size) * 255);
                const g = Math.floor((y / size) * 255);
                const b = 0;
                const a = 255;

                const index = (y * size * 4) + (x * 4);

                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
                data[index + 3] = a;
            }
        }

        let texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);

        return texture;

    }, [animationColor]);

    // Add an outline using a custom solution
    const outlineGeometry = useMemo(() => {

        const geometry = new THREE.IcosahedronGeometry(1.1, 1);

        return geometry;

    }, [animationColor]);

    const outlineMaterial = useMemo(() => {

        const material = new THREE.MeshBasicMaterial({
            color: color,
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });

        return material;

    }, [animationColor]);

    const outlineMesh = useMemo(() => {

        const mesh = new THREE.Mesh(outlineGeometry, outlineMaterial);

        return mesh;

    }, [outlineGeometry, outlineMaterial, animationColor]);

    useEffect(() => {

        scene.add(outlineMesh);

        return () => {

            scene.remove(outlineMesh);

        };

    }, [scene, outlineMesh, animationColor]);

    useFrame(() => {

        pointLight.current.position.x = Math.sin(Date.now() * 0.001) * 2;
        pointLight.current.position.y = Math.cos(Date.now() * 0.001) * 2;

    });

    const pointLight = useRef(new THREE.PointLight(color, 1, 10));
    pointLight.current.position.set(0, 0, 2);
    scene.add(pointLight.current);

    return (

        <>

            <mesh>
                <icosahedronGeometry
                    args={[1, 1]}
                />
                
                <meshToonMaterial
                    fog={true}
                    emissive={new THREE.Color(color.equals(new THREE.Color(AppViewModel.DRACULA_WHITE)) ? '#000000' : color)}
                    emissiveIntensity={1.0}
                    visible={true}
                    transparent={false}
                    normalMap={lightMap}
                    normalMapType={THREE.TangentSpaceNormalMap}
                    normalScale={new THREE.Vector2(2, 2)}
                />

                <pointLight
                    intensity={0.5}
                    color={color}
                    position={[0, 0, 0]}
                />

                <ambientLight
                    intensity={0.75}
                    color={color}
                    position={[0, 0, 0]}
                />

            </mesh>

        </>
    );

};