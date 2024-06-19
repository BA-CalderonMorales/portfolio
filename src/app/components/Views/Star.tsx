import { useRef, useLayoutEffect, useContext } from "react";
import { degreesToRadians, mix } from "popmotion";
import { AppContext } from "@/app/context";

let color = "#111111";

export const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Object3D>(null);
    const {appViewModel} = useContext(AppContext);

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });

    if (appViewModel.theme === 'dracula') {
        color = "#f8f8f2"; // $dracula-white
    }

    if (appViewModel.theme === 'modern') {
        color = '#6f42c1'; // $modern-purple
    }

    if (appViewModel.theme === 'earthly') {
        color = '#A23C2C'; // $earthly-red
    }

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial
                color={color}
                wireframe
            />
        </mesh>
    );
};