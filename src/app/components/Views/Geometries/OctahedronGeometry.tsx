import React from 'react'
import * as THREE from 'three';
import { ShapeProps } from '../Shape';

export interface OctahedronGeometryProps extends ShapeProps {
    meshRef?: React.RefObject<THREE.Mesh>;
    octahedronRef?: React.RefObject<THREE.OctahedronGeometry>;
    args?: [radius: number, detail: number];
    scale?: (x: number, y: number, z: number) => THREE.OctahedronGeometry;
}

function OctahedronGeometry(props : OctahedronGeometryProps) {

    let args = props.args || [1, 1];

    return (

        <mesh ref={props.meshRef}>

            <octahedronGeometry
                ref={props.octahedronRef}
                args={args}
                scale={props.scale}
            />

        </mesh>

    );

}

export default React.memo(OctahedronGeometry);