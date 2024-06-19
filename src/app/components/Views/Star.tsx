import { useRef, useLayoutEffect, useContext } from "react";
import { degreesToRadians, mix } from "popmotion";
import { AppContext } from "@/app/context";
import THREE from "three";

export const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Mesh>(null);
    const {appViewModel} = useContext(AppContext);

    useLayoutEffect(() => {

        const distance = mix(1.75, 10, Math.random());

        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );

        const xAngle = degreesToRadians(360) * p;

        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);

    });

    let color = appViewModel.getAnimationColor();

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial
                color={color}
                wireframe={true}
                wireframeLinewidth={1.5}
            />
        </mesh>
    );
};