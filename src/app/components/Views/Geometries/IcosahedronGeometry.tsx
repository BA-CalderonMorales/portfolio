import React from 'react'

interface IcosahedronGeometryProps {
    args?: Array<number>;
}

function IcosahedronGeometry(props : IcosahedronGeometryProps) {

    let args = props.args || [1, 1];

    return (

        <icosahedronGeometry args={[args[0], args[1]]} />

    )

}

export default React.memo(IcosahedronGeometry);