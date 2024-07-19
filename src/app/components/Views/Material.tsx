import React from 'react'
import BasicMaterial from './Material/BasicMaterial';
import ToonMaterial from '@/app/components/Views/Material/ToonMaterial';
import { Color, NormalMapTypes, Texture, Vector2 } from 'three';

export interface MaterialProps {
    forwardRef?: React.Ref<any>;
    type?: string;
    fog?: boolean;
    emissive?: Color;
    emissiveIntensity?: number;
    visible?: boolean;
    transparent?: boolean;
    normalMap?: Texture;
    normalMapType?: NormalMapTypes;
    normalScale?: Vector2;
    color?: string;
    wireframe?: boolean;
    wireframeLinewidth?: number;
}

function Material(props : MaterialProps) {

    let type = props.type;

    switch (type) {
        case 'basic':
            return <BasicMaterial {...props} />;
        case 'toon':
            return <ToonMaterial {...props} />;
        default:
            return <></>;
    }

}

export default React.memo(Material);