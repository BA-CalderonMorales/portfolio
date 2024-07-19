import { useRef, useLayoutEffect, useCallback } from "react";
import { degreesToRadians, mix } from "popmotion";
import * as THREE from "three";
import Shape from "./Shape";
import Material from "./Material";

interface FloaterProps {
    p: number;
    color: string;
    depth?: number;
    scale?: [radius: number, detail: number];
    theme?: string;
}

export const Floater = (props : FloaterProps) => {

    const ref = useRef<THREE.Mesh>(null);

    const floaterRef = useRef<THREE.OctahedronGeometry>(null);

    const updateLayout = useCallback(() => {

        const distance = mix(1.75, 10, Math.random());

        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );

        const xAngle = degreesToRadians(360) * props.p;

        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);

        ref.current!.lookAt(0, 0, 0);

        ref.current!.updateMatrixWorld();

        floaterRef.current!.scale(0.05, 0.05, 0.05);
        
        const depth = props.depth || 0; // Provide a default value for props.depth if it is undefined
    
        floaterRef.current!.center();
    
        floaterRef.current!.applyMatrix4(new THREE.Matrix4().makeTranslation(1, depth, 1));
    
        floaterRef.current!.computeVertexNormals();
    
        floaterRef.current!.normalizeNormals();
    
        floaterRef.current!.morphTargetsRelative = true;

    }, [ref.current, floaterRef.current, props.p, props.color]);

    useLayoutEffect(() => {
        
        updateLayout();

    }, [props.color]);


    return (
        <mesh ref={ref}>

            <Shape
                forwardRef={floaterRef}
                shape='octahedron'
                args={[props.scale?.[0] || 1, props.scale?.[1] || 0]}
            />

            <Material
                type='basic'
                color={props.color}
            />

        </mesh>
    );
};