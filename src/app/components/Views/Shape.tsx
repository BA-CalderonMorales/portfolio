import React, { useMemo } from 'react'
import { OctahedronGeometry as OctahedronGeometryThree } from 'three';
import * as THREE from 'three';
import BoxGeometry from './Geometries/BoxGeometry';
import IcosahedronGeometry from './Geometries/IcosahedronGeometry';
import OctahedronGeometry from './Geometries/OctahedronGeometry';
import BlobGeometry from './Geometries/BlobGeometry';
import DodecahedronGeometry from './Geometries/DodecahedronGeometry';
import TorusGeometry from './Geometries/TorusGeometry';
import SphereGeometry from './Geometries/SphereGeometry';

interface ShapeProps {
    forwardRef?: React.RefObject<OctahedronGeometryThree>;
    meshRef?: React.RefObject<THREE.Mesh>;
    shape?: string | 'icosahedron' | 'box' | 'dodecahedron' | 'octahedron' | 'blob';
    args?: Array<number>;
    scale?: (x: number, y: number, z: number) => OctahedronGeometryThree;
    color?: THREE.Color | string;
}

const Shape = (props : ShapeProps) => {

    let shape = props.shape || null;

    switch (shape) {
        case 'blob':
            return <BlobGeometry {...props} />;
        case 'box':
            return <BoxGeometry {...props} />;
        case 'dodecahedron':
            return (
                <DodecahedronGeometry
                    dodecahedronRef={props.meshRef}
                    color={props.color}
                />
            );
        case 'icosahedron':
            return <IcosahedronGeometry {...props} />;
        case 'octahedron':
            return (
                <OctahedronGeometry
                    octahedronRef={props.forwardRef}
                    args={props.args ? [props.args[0], props.args[1]] : [1, 1]}
                    scale={props.scale}
                />
            );
        case 'sphere':
            return (
                <SphereGeometry
                    meshRef={props.meshRef}
                    color={props.color}
                />
            );
        case 'torus':
            return (
                <TorusGeometry
                    torusRef={props.meshRef}
                    color={props.color}
                />
            );
        default:
            return <></>
    }

}

export default React.memo(Shape);