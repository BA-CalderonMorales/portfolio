import React from 'react'
import { MaterialProps } from '@/app/components/Views/Material';



function BasicMaterial(props : MaterialProps) {

    return (
        <meshBasicMaterial
            ref={props.forwardRef}
            color={props.color}
            wireframe={props.wireframe}
            wireframeLinewidth={props.wireframeLinewidth}
        />
    );

}

export default BasicMaterial