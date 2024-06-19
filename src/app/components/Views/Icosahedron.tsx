import React from "react";

const color = "#111111";

export const Icosahedron = () => (
    <mesh rotation-x={0.35}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial wireframe color={color} />
    </mesh>
);