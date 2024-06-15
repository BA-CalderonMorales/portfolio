import { Content } from "../Content";
import { observer } from "mobx-react";
import React from "react";

export const HomeContent = observer(() : React.JSX.Element => {

    return (

        <Content>

            <div>

                I am a software engineer/developer based in the United States.

            </div>

            <div>

                Some days I am able to do some amazing things. Others, I feel intense imposter syndrome.

            </div>

            <div>

                These days, I've figured out that most of us are just trying to get things to prod...

            </div>

        </Content>

    );

});