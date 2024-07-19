"use client";

import { Main } from "@/app/components/Views/Main";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { SkillsSection } from "@/app/components/Views/Section/SkillsSection";
import { useContext } from "react";
import { AppContext } from "@/app/context";
import { Footer } from "@/app/components/Views/Footer";
import SmoothScrollWrapper from "@/app/components/Views/SmoothScrollWrapper";

const Skills = observer(() : JSX.Element => {

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

                    <SkillsSection />

                </SmoothScrollWrapper>

            </Main>

            <Footer data-testid='footer' viewModel={footerViewModel} />
        
        </>


    );

});

export default Skills;