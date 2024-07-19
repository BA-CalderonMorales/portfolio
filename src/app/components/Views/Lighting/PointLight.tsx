import React from 'react'
import { LightingProps } from '@/app/components/Views/Lighting';

function PointLight(props : LightingProps) {

    return (
        <pointLight
            ref={props.forwardRef}
            color={props.color}
            intensity={props.intensity}
            position={props.position}
        />
    );

}

export default PointLight