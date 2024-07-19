import React from 'react'
import { OctahedronGeometry as OctahedronGeometryThree } from 'three';

interface OctahedronGeometryProps {
    forwardRef?: React.RefObject<OctahedronGeometryThree>;
    args?: [radius: number, detail: number];
    scale?: (x: number, y: number, z: number) => OctahedronGeometryThree;
}

function OctahedronGeometry(props : OctahedronGeometryProps) {

    let args = props.args || [1, 1];

    return (
        <octahedronGeometry
            ref={props.forwardRef}
            args={args}
            scale={props.scale}
        />
    )

}

export default React.memo(OctahedronGeometry);