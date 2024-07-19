import React from 'react'
import { MaterialProps } from '@/app/components/Views/Material';

function ToonMaterial(props : MaterialProps) {

    return (
        <meshToonMaterial
            ref={props.forwardRef}
            color={props.color}
            fog={props.fog}
            emissive={props.emissive}
            emissiveIntensity={props.emissiveIntensity}
            visible={props.visible}
            transparent={props.transparent}
            normalMap={props.normalMap}
            normalMapType={props.normalMapType}
            normalScale={props.normalScale}
            wireframe={props.wireframe}
            wireframeLinewidth={props.wireframeLinewidth}
        />
    );

}

export default ToonMaterial