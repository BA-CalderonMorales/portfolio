import React from 'react'
import { LightingProps } from '@/app/components/Views/Lighting';

function AmbientLight(props : LightingProps) {

    return (
        <ambientLight
            ref={props.forwardRef}
            color={props.color}
            intensity={props.intensity}
            position={props.position}
        />
    );
}

export default AmbientLight