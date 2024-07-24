import React from 'react'
import * as THREE from 'three';

// Import your geometry components
import BoxGeometry from './Geometries/BoxGeometry';
import IcosahedronGeometry from './Geometries/IcosahedronGeometry';
import MorphingCubeGeometry from './Geometries/MorphingCubeGeometry';
import OctahedronGeometry from './Geometries/OctahedronGeometry';
import BlobGeometry from './Geometries/BlobGeometry';
import DodecahedronGeometry from './Geometries/DodecahedronGeometry';
import TorusGeometry from './Geometries/TorusGeometry';
import SphereGeometry from './Geometries/SphereGeometry';
import SnakeGeometry from './Geometries/SnakeGeometry';
import PillGeometry from './Geometries/PillGeometry';
import DNAGeometry from './Geometries/DNAGeometry';
import PulsatingSphere from './Geometries/PulsatingSphereGeometry';
import TwistingRibbon from './Geometries/TwistingRibbonGeometry';
import RippleDiscGeometry from './Geometries/RippleDiscGeometry';
import FloatingOrbGeometry from './Geometries/FloatingOrbGeometry';
import WavingPlaneGeometry from './Geometries/WavingPlaneGeometry';
import BubblingOrbGeometry from './Geometries/BubblingGeometry';

type ShapeTypes =
    'icosahedron'
    | 'box'
    | 'blob'
    | 'bubbling-orb'
    | 'dna'
    | 'dodecahedron'
    | 'floating-orb'
    | 'octahedron'
    | 'pill'
    | 'morphing-cube'
    | 'pulsating-sphere'
    | 'ripple-disc'
    | 'snake'
    | 'sphere'
    | 'twisting-ribbon'
    | 'torus'
    | 'waving-plane';

export interface ShapeProps {
    meshRef?: React.RefObject<THREE.Mesh>;
    meshGroupRef?: React.RefObject<THREE.Group>;
    octahedronRef?: React.RefObject<THREE.OctahedronGeometry>;
    shape?: ShapeTypes;
    args?: Array<number>;
    scale?: (x: number, y: number, z: number) => void;
    color?: THREE.Color | string;
}

const geometryComponents: Record<ShapeTypes, React.ComponentType<any>> = {
    blob: BlobGeometry,
    box: BoxGeometry,
    'bubbling-orb': BubblingOrbGeometry,
    dna: DNAGeometry,
    dodecahedron: DodecahedronGeometry,
    'floating-orb': FloatingOrbGeometry,
    icosahedron: IcosahedronGeometry,
    'morphing-cube': MorphingCubeGeometry,
    octahedron: OctahedronGeometry,
    pill: PillGeometry,
    'pulsating-sphere': PulsatingSphere,
    'ripple-disc': RippleDiscGeometry,
    snake: SnakeGeometry,
    sphere: SphereGeometry,
    'twisting-ribbon': TwistingRibbon,
    torus: TorusGeometry,
    'waving-plane': WavingPlaneGeometry
};

const Shape: React.FC<ShapeProps> = (props) => {
    const { shape, ...otherProps } = props;

    if (!shape || !(shape in geometryComponents)) {
        return null;
    }

    const GeometryComponent = geometryComponents[shape];

    return <GeometryComponent {...otherProps} />;
};

export default React.memo(Shape);