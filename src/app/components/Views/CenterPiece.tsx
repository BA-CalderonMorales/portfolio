import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { AppViewModel } from "@/app/components/ViewModels/AppViewModel";
import Shape from '@/app/components/Views/Shape'
import Material from "@/app/components/Views/Material";
import Lighting from "@/app/components/Views/Lighting";

interface CenterPieceProps {
    animationColor?: string;
}

export const CenterPiece = ({ animationColor } : CenterPieceProps ) => {

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

        mesh.position.set(Math.random() * 3.5, Math.random() * 3.5, Math.random() * 3.5);

        return mesh;

    }, [outlineGeometry, outlineMaterial, animationColor]);


    useEffect(() => {

        scene.add(
            outlineMesh
        );

        return () => {

            scene.remove(
                outlineMesh
            );

        };

    }, [scene, outlineMesh, animationColor]);

    useFrame(() => {

        pointLightAlpha.current.position.z = Math.cos(Date.now() * 0.001) * Math.tan(0.5) * 2;
        pointLightAlpha.current.position.x = Math.sin(Date.now() * 0.001) * Math.tanh(0.5) * 2;

        pointLightBravo.current.position.y = Math.cos(Date.now() * 0.001) * Math.tanh(0.5) * 2;
        pointLightBravo.current.position.z = Math.sin(Date.now() * 0.001) * Math.tan(0.5) * 2;

        pointLightCharlie.current.position.x = Math.cos(Date.now() * 0.001) * Math.tanh(0.75) * 2;
        pointLightCharlie.current.position.y = Math.sin(Date.now() * 0.001) * Math.tan(0.25) * 2;

        outlineMesh.setRotationFromEuler(
            new THREE.Euler(
                Date.now() * 0.0008,
                Date.now() * 0.0008,
                Date.now() * 0.0008
            )
        );

        outlineMesh.position.set(
            Math.cos(Date.now() * 0.001) * Math.tanh(0.95) * 4,
            Math.sin(Date.now() * 0.001) * Math.sinh(.75) * 4,
            Math.cos(Date.now() * 0.001) * Math.cosh(1) * 4
        );

    });

    const pointLightAlpha = useRef(new THREE.PointLight(color, 1, 0, 2));
    pointLightAlpha.current.position.set(0, 0, 0);

    const pointLightBravo = useRef(new THREE.PointLight(color, 1, 0, 2));
    pointLightBravo.current.position.set(0, 0, 0);

    const pointLightCharlie = useRef(new THREE.PointLight(color, 1, 0, 2));
    pointLightCharlie.current.position.set(0, 0, 0);

    const ambientLight = useRef(new THREE.AmbientLight(color, 0.5));
    ambientLight.current.position.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);


    return (

        <>

            <mesh>

                <Shape shape='icosahedron' />

                <Material
                    type='toon'
                    fog={true}
                    emissive={new THREE.Color(color.equals(new THREE.Color(AppViewModel.DRACULA_WHITE)) ? '#000000' : color)}
                    emissiveIntensity={1.0}
                    visible={true}
                    transparent={false}
                    normalMap={lightMap}
                    normalMapType={THREE.TangentSpaceNormalMap}
                    normalScale={new THREE.Vector2(2, 1)}
                /> 

                <Material
                    type='toon'
                    fog={true}
                    emissive={new THREE.Color(color.equals(new THREE.Color(AppViewModel.DRACULA_WHITE)) ? '#000000' : color)}
                    emissiveIntensity={1.0}
                    visible={true}
                    transparent={false}
                    normalMap={lightMap}
                    normalMapType={THREE.TangentSpaceNormalMap}
                    normalScale={new THREE.Vector2(1, 1)}
                /> 

                <Lighting
                    forwardRef={pointLightAlpha}
                    type="point"
                    color={color}
                    position={new THREE.Vector3(0, 0, 0)}
                    intensity={0.45}
                />

                <Lighting
                    forwardRef={pointLightBravo}
                    type="point"
                    color={color}
                    position={new THREE.Vector3(0, 0, 0)}
                    intensity={0.45}
                />

                <Lighting
                    forwardRef={pointLightCharlie}
                    type="point"
                    color={color}
                    position={new THREE.Vector3(0, 0, 0)}
                    intensity={0.45}
                />

                <Lighting
                    forwardRef={ambientLight}
                    type="ambient"
                    color={color}
                    intensity={0.5}
                    position={new THREE.Vector3(0, 1, 2)}
                />

            </mesh>

        </>
    );

};