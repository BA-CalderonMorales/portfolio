import { observer } from "mobx-react";
import React from "react";

interface ContentProps {
    children: React.ReactNode;
    mainContainerStyleOverrides?: string;
};

export const Content = observer((props : ContentProps) : React.JSX.Element => {

    const mainContainerStyles = props.mainContainerStyleOverrides ?? "content";

    return (

        <div className={mainContainerStyles}>

            {props.children}

        </div>

    );

});