"use client";

import { Main } from "@/app/components/Views/Main";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { AboutSection } from "@/app/components/Views/Section/AboutSection";
import { AppContext } from "@/app/context";
import { useContext } from "react";
import { Footer } from "@/app/components/Views/Footer";
import SmoothScrollWrapper from "@/app/components/Views/SmoothScrollWrapper";

const About = observer(() : JSX.Element => {

    const {
        appViewModel,
        footerViewModel,
        navigationViewModel
    } = useContext(AppContext);

    return (

        <>

            <Main viewModel={appViewModel}>

                <div className="navigation">

                    <Navigation appViewModel={appViewModel} viewModel={navigationViewModel} />

                </div>

                <SmoothScrollWrapper>

                    <AboutSection />

                </SmoothScrollWrapper>

            </Main>

            <Footer data-testid='footer' viewModel={footerViewModel} />
        
        </>


    );

});

export default About;