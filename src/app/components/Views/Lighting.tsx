import React from 'react';
import PointLight from "@/app/components/Views/Lighting/PointLight";
import AmbientLight from "@/app/components/Views/Lighting/AmbientLight";
import { Color, Vector3 } from 'three';

export interface LightingProps {
    forwardRef?: React.Ref<any>;
    type?: string;
    color?: Color;
    intensity?: number;
    position?: Vector3;
}

function Lighting(props : LightingProps) {

    let type = props.type || 'point';

    switch (type) {
        case 'point':
            return <PointLight {...props} />;
        case 'ambient':
            return <AmbientLight {...props} />;
        default:
            return null;
    }

}

export default Lighting;