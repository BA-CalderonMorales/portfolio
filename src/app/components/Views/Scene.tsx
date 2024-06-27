import { useThree, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo } from "react";
import { useTransform, useScroll, useTime} from "framer-motion";
import { degreesToRadians, progress } from "popmotion";
import { Star } from "./Star";
import { Icosahedron } from "./Icosahedron";
import * as THREE from "three";

const getStars = (numStars: number) => {

    const stars = [];

    for (let i = 0; i < numStars; i++) {

        stars.push(
            <Star
                key={i}
                p={progress(0, numStars, i)}
            />
        );

    }

    return stars;

};

export default function Scene({ numStars = 250 }) {

    const { gl } = useThree((state) => state);

    const { scrollYProgress } = useScroll();

    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [0.001, degreesToRadians(180)]
    );

    const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);

    const time = useTime();

    useFrame(({ camera }) => {

        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.0005
        );

        camera.updateProjectionMatrix();

        camera.lookAt(new THREE.Vector3(0, 0, 0));

    });

    useLayoutEffect(() => {

        return gl.setPixelRatio(0.75);

    }, [gl]);

    const stars = useMemo(() => getStars(numStars), [numStars]);

    return (
        <>
            <Icosahedron />
            {stars}
        </>
    );
}