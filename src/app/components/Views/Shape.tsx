import React from 'react';
import * as THREE from 'three';

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
import SpinningCubeGeometry from './Geometries/SpinningCubeGeometry';
import SwirlingRoomGeometry from './Geometries/SwirlingRoomGeometry';
import BlackHoleGeometry from './Geometries/BlackHoleGeometry';
import CloudGeometry from './Geometries/CloudGeometry';
import CelestialBodyGeometry from './Geometries/CelestialBodyGeometry';
import FirefliesGeometry from './Geometries/FireFliesGeometry';

export type ShapeTypes =
    'icosahedron'
    | 'box'
    | 'blob'
    | 'bubbling-orb'
    | 'black-hole'
    | 'cloud'
    | 'celestial-body'
    | 'dna'
    | 'dodecahedron'
    | 'fireflies'
    | 'floating-orb'
    | 'octahedron'
    | 'pill'
    | 'morphing-cube'
    | 'pulsating-sphere'
    | 'ripple-disc'
    | 'snake'
    | 'sphere'
    | 'spinning-cube'
    | 'swirling-room'
    | 'twisting-ribbon'
    | 'torus'
    | 'waving-plane';

export interface ShapeProps {
    meshRef?: React.RefObject<THREE.Mesh>;
    shape?: ShapeTypes;
    args?: Array<number>;
    color?: THREE.Color | string;
    shadow?: boolean;
}

export const geometryComponents: Record<ShapeTypes, React.ComponentType<any>> = {
    blob: BlobGeometry,
    box: BoxGeometry,
    'black-hole': BlackHoleGeometry,
    'bubbling-orb': BubblingOrbGeometry,
    'cloud': CloudGeometry,
    'celestial-body': CelestialBodyGeometry,
    dna: DNAGeometry,
    dodecahedron: DodecahedronGeometry,
    fireflies: FirefliesGeometry,
    'floating-orb': FloatingOrbGeometry,
    icosahedron: IcosahedronGeometry,
    'morphing-cube': MorphingCubeGeometry,
    octahedron: OctahedronGeometry,
    pill: PillGeometry,
    'pulsating-sphere': PulsatingSphere,
    'ripple-disc': RippleDiscGeometry,
    snake: SnakeGeometry,
    sphere: SphereGeometry,
    'swirling-room': SwirlingRoomGeometry,
    'spinning-cube': SpinningCubeGeometry,
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