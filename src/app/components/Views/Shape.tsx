import React, { useMemo } from 'react'
import { OctahedronGeometry as OctahedronGeometryThree } from 'three';
import * as THREE from 'three';
import BoxGeometry from './Geometries/BoxGeometry';
import IcosahedronGeometry from './Geometries/IcosahedronGeometry';
import OctahedronGeometry from './Geometries/OctahedronGeometry';

interface ShapeProps {
    forwardRef?: React.RefObject<OctahedronGeometryThree>;
    shape?: string | 'icosahedron' | 'box';
    args?: Array<number>;
    scale?: (x: number, y: number, z: number) => OctahedronGeometryThree;
}

const Shape = (props : ShapeProps) => {

    let shape = props.shape || null;

    switch (shape) {
        case 'box':
            return <BoxGeometry {...props} />;
        case 'icosahedron':
            return <IcosahedronGeometry {...props} />;
        case 'octahedron':
            let args = props.args || [1, 1];
            return (
                <OctahedronGeometry
                    forwardRef={props.forwardRef}
                    args={[args[0], args[1]]}
                    scale={props.scale}
                />
            );
        default:
            return <></>
    }

}

export default React.memo(Shape);