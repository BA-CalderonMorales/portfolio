import { useRef, useLayoutEffect, useCallback } from "react";
import { degreesToRadians, mix } from "popmotion";
import * as THREE from "three";
import Shape, { ShapeTypes } from "./Shape";
import Material from "./Material";
import Lighting from "./Lighting";

interface FloaterProps {
    p: number;
    color: THREE.Color | string;
    depth?: number;
    scale?: [radius: number, detail: number];
    theme?: string;
    shape?: ShapeTypes;
}

export const Floater = (props: FloaterProps) => {
    const ref = useRef<THREE.Mesh>(null);

    const updateLayout = useCallback(() => {
        if (!ref.current) return; // Ensure ref.current is not null

        const distance = mix(1.75, 15, Math.random());
        const yAngle = mix(degreesToRadians(180), degreesToRadians(50), Math.random());
        const xAngle = degreesToRadians(360) * props.p;

        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
        ref.current.lookAt(0, 0, 0);
        ref.current.updateMatrixWorld();

        ref.current.scale.setScalar(0.4);

        const depth = props.depth || 0; // Provide a default value for props.depth if it is undefined
    }, [props.p, props.depth]);

    useLayoutEffect(() => {
        updateLayout();
    }, [props.color, updateLayout]);

    return (
        <mesh ref={ref}>
            <Shape
                meshRef={ref}
                shape={props.shape ?? 'octahedron'}
                args={[props.scale?.[0] || 1, props.scale?.[1] || 0]}
                color={props.color}
            />
            <Lighting
                type='ambient'
                intensity={0.005}
                color={typeof props.color === 'string' ? new THREE.Color(props.color) : props.color}
            />
        </mesh>
    );
};