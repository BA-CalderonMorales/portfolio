import { useMemo } from "react";
import { progress } from "popmotion";
import { Floater } from "./Floater";
import { ShapeTypes } from "./Shape";
import * as THREE from "three";

interface FloaterWrapperProps {
    animationColor?: THREE.Color | string;
    numStars: number;
    depth?: number;
    theme?: string;
    shape?: ShapeTypes;
}

export default function FloaterWrapper(props: FloaterWrapperProps) {
    const stars = useMemo(() => {
        return Array.from({ length: props.numStars }, (_, i) => (
            <Floater
                key={i}
                depth={props.depth}
                color={props.animationColor ?? ""}
                p={progress(0, props.numStars, i)}
                scale={[1, 1]} // Generates values between 0.005 and 0.01
                theme={props.theme}
                shape={props.shape}
            />
        ));
    }, [props.numStars, props.animationColor, props.theme, props.shape]);

    return <>{stars}</>;
}