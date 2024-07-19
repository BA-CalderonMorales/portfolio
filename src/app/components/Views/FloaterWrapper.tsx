import { useMemo } from "react";
import { progress } from "popmotion";
import { Floater } from "./Floater";

interface FloaterWrapperProps {
    animationColor?: string;
    numStars: number;
    depth?: number;
    theme?: string;
}

export default function FloaterWrapper(props: FloaterWrapperProps) {

    const stars = useMemo(() => {

        return Array.from({ length: props.numStars }, (_, i) => (
            <Floater
                key={i}
                depth={props.depth}
                color={props.animationColor ?? ""}
                p={progress(0, props.numStars, i)}
                scale={[Math.random() * .1 + .75, 4]}
                theme={props.theme}
            />
        ));

    }, [props.numStars, props.animationColor, props.theme]);

    return <>{stars}</>;

};