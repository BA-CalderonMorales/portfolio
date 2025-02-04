import { useThree, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useContext, useCallback, useMemo } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians } from "popmotion";
import { CenterPiece } from "./CenterPiece";
import * as THREE from "three";
import FloaterWrapper from "./FloaterWrapper";
import { AppContext } from "@/app/context/index";

export default function Scene({ numStars = 250 }) {

    const {
        gl,
        camera
    } = useThree((state) => state) as { gl: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera };

    const { appViewModel } = useContext(AppContext);

    const { scrollYProgress } = useScroll();

    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [0.001, degreesToRadians(180)]
    );

    const distance = useTransform(
        scrollYProgress,
        [25, 1000],
        [6, 10]
    );

    const time = useTime();

    const updateCamera = useCallback(() => {

        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.00005
        );

        camera.updateProjectionMatrix();

        camera.lookAt(new THREE.Vector3(0, 0, 0));

        return camera;

    }, [camera, distance, yAngle, time, appViewModel.theme]);

    const animationColor = appViewModel.getAnimationColor();

    const updateLayoutEffect = useCallback(() => {

        gl.setPixelRatio(0.75);

        gl.setSize(window.innerWidth, window.innerHeight);

    }, [gl, appViewModel.theme]);

    useFrame(() => {

        updateCamera();

    });

    useLayoutEffect(() => {

        updateLayoutEffect();

    }, [gl, appViewModel.theme]);

    const floaters = useMemo(() => {

        return [1.1, 2.2, -1.1, -2.2].map((depth, i) => (

            <FloaterWrapper
                key={i}
                numStars={numStars}
                depth={depth}
                animationColor={animationColor}
            />

        ));

    }, [numStars, animationColor, appViewModel.theme]);

    return (
        <>
            <CenterPiece
                animationColor={animationColor}
            />

            {floaters}

        </>
    );
}