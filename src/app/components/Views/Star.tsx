import { useRef, useLayoutEffect } from "react";
import { degreesToRadians, mix } from "popmotion";
import THREE from "three";

export const Star = ({ p, color }: { p: number, color: string }) => {

    const ref = useRef<THREE.Mesh>(null);

    const updateLayout = () => {

        const distance = mix(1.75, 10, Math.random());

        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );

        const xAngle = degreesToRadians(360) * p;

        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);

        ref.current!.lookAt(0, 0, 0);

        ref.current!.updateMatrixWorld();

        ref.current!.scale.setScalar(0.5 + Math.random());

    };

    useLayoutEffect(() => {

        updateLayout();

    });

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial
                color={color}
                wireframe={true}
                wireframeLinewidth={0.5}
            />
        </mesh>
    );
};