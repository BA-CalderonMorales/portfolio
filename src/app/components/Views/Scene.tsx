import { useThree, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useContext, useCallback, useMemo, useState, useEffect, useRef } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians } from "popmotion";
import { CenterPiece } from "./CenterPiece";
import * as THREE from "three";
import FloaterWrapper from "./FloaterWrapper";
import { AppContext } from "@/app/context";
import { ShapeTypes } from "./Shape";

const FLOATER_WRAPPERS_TO_CREATE = [1.1, -2.2];
const SHAPES: ShapeTypes[] = [
    'ripple-disc',
    'pulsating-sphere',
    'floating-orb',
    'pill',
    'morphing-cube'
];

interface SceneProps {
    numStars?: number;
}

export default function Scene({ numStars = 75 }: SceneProps) {
    const { gl, camera, size } = useThree((state) => state) as { gl: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera, size: { width: number, height: number } };
    const { appViewModel } = useContext(AppContext);
    const { scrollYProgress } = useScroll();
    const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

    const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(360)]);
    const time = useTime();

    // Spring-like motion parameters
    const springRef = useRef({
        position: 15,
        velocity: 0,
        target: 5,
        stiffness: 0.002,
        damping: 0.75,
        bounceAmplitude: 2,
        bounceFrequency: 0.0003
    });

    const updateCamera = useCallback(() => {
        const spring = springRef.current;

        // Update spring physics
        const force = (spring.target - spring.position) * spring.stiffness;
        spring.velocity += force;
        spring.velocity *= spring.damping;
        spring.position += spring.velocity;

        // Calculate progress (0 to 1)
        const progress = Math.min(1, Math.max(0, (15 - spring.position) / 10));

        // Reduce bounce amplitude as we get closer
        const currentBounceAmplitude = spring.bounceAmplitude * (1 - progress);

        // Add bouncing effect
        const bounce = Math.sin(time.get() * spring.bounceFrequency) * currentBounceAmplitude;

        // Set new camera position
        const finalPosition = spring.position + bounce;
        camera.position.setFromSphericalCoords(
            finalPosition,
            yAngle.get(),
            time.get() * 0.00005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // Slow down the bouncing as we get closer
        spring.bounceFrequency *= 1 - (progress * 0.0001);

        return camera;
    }, [camera, yAngle, time, appViewModel.theme]);

    const animationColor = appViewModel.getAnimationColor();

    const updateLayoutEffect = useCallback(() => {
        gl.setPixelRatio(0.75);
        gl.setSize(window.innerWidth, window.innerHeight);
    }, [gl, appViewModel.theme]);

    const updateShape = useCallback(() => {
        setCurrentShapeIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % SHAPES.length;
            localStorage.setItem('currentShapeIndex', newIndex.toString());
            return newIndex;
        });
    }, []);

    useEffect(() => {
        const storedIndex = localStorage.getItem('currentShapeIndex');
        if (storedIndex !== null) {
            setCurrentShapeIndex(parseInt(storedIndex, 10));
        }
        if (window.location.pathname.includes("/home")) {
            updateShape();
        }
    }, [updateShape]);

    useFrame(() => {
        updateCamera();
    });

    useLayoutEffect(() => {
        updateLayoutEffect();
    }, [gl, appViewModel.theme, size]);

    const floaters = useMemo(() => {
        return FLOATER_WRAPPERS_TO_CREATE.map((depth, i) => (
            <FloaterWrapper
                key={i}
                numStars={numStars}
                depth={depth}
                animationColor={animationColor}
                shape={SHAPES[currentShapeIndex]}
            />
        ));
    }, [numStars, animationColor, appViewModel.theme, currentShapeIndex]);

    return (
        <>
            <CenterPiece animationColor={animationColor} />
            {window.location.pathname.includes("/home") && floaters}
        </>
    );
}