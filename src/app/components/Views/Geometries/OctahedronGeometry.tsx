import React from 'react'
import * as THREE from 'three';

interface OctahedronGeometryProps {
    octahedronRef?: React.RefObject<THREE.OctahedronGeometry>;
    args?: [radius: number, detail: number];
    scale?: (x: number, y: number, z: number) => THREE.OctahedronGeometry;
}

function OctahedronGeometry(props : OctahedronGeometryProps) {

    let args = props.args || [1, 1];

    return (

        <octahedronGeometry
            ref={props.octahedronRef}
            args={args}
            scale={props.scale}
        />

    );

}

export default React.memo(OctahedronGeometry);