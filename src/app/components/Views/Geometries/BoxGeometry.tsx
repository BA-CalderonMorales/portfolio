import React from 'react';

interface BoxGeometryProps {
    args?: Array<number>;
}

function BoxGeometry(props : BoxGeometryProps) {

    let args = props.args || [1, 1, 1];

    return (

        <boxGeometry args={[args[0], args[1], args[2]]} />

    )

}

export default React.memo(BoxGeometry);