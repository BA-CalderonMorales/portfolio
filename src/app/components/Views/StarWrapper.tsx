import { useMemo } from "react";
import { progress } from "popmotion";
import { Star } from "./Star";

export default function StarWrapper({ animationColor, numStars }: { animationColor?: string, numStars: number }) {

    const stars = useMemo(() => {
        return Array.from({ length: numStars }, (_, i) => (
            <Star
                key={i}
                color={animationColor ?? ""}
                p={progress(0, numStars, i)}
            />
        ));
    }, [numStars, animationColor]);

    return <>{stars}</>;

};