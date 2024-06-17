import { Content } from "../Content";
import { observer } from "mobx-react";
import React from "react";

export const AboutContentAlpha = observer(() : React.JSX.Element => {

    return (

        <Content mainContainerStyleOverrides="about-info">

            <div>

                <h3>Who am I?</h3>

                <p>I am a software developer who loves to code. I have been coding for several years</p>


                <h3>What do I do?</h3>

                <p>I work on web applications and mobile applications. I have experience in several programming languages and frameworks.</p>


                <h3>What do I like to do?</h3>

                <p>I like to code, read, and play video games. I also like to travel and explore new places.</p>


            </div>

        </Content>
    );
});