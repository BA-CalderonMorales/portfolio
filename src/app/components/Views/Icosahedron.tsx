import { AppContext } from "@/app/context";
import React, { useContext } from "react";

export const Icosahedron = () => {
    const {appViewModel} = useContext(AppContext);

    const color = appViewModel.getAnimationColor();

    return (

        <mesh rotation-x={0.15}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial wireframe color={color} />
        </mesh>

    );

};