import { Content } from "../Content";
import { observer } from "mobx-react";
import React from "react";

export const AboutContentBravo = observer(() : React.JSX.Element => {

    return (

        <Content mainContainerStyleOverrides="about-info">

            <div>

                <h3>What are my goals?</h3>

                <p>My goals are to become a better software developer and to work on interesting projects. I also want to travel more and see the world.</p>

                <h3>What sort of positions have I held?</h3>

                <p>I've been in roles ranging from junior software engineer, mid-level software engineer, and currently I'm acting in a senior software engineer capacity.</p>

                <h3>What does leadership look like to me?</h3>

                <p>So far, I've seen a mix. It's intense ownership over a product, as well as keen understanding of your team's capacity.</p>
                <p>It's also being able to commit to realistic deadlines and understanding how to communicate to relevant stakeholders.</p>
                <p>TLDR; it's not all about coding...</p>

            </div>

        </Content>
    );
});