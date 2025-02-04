"use client";

import { AppContext } from "@/app/context/index";
import { Main } from "@/app/components/Views/Main";
import { Navigation } from "@/app/components/Views/Navigation";
import { useContext } from "react";
import { Footer } from "@/app/components/Views/Footer";
import { AboutSection } from "@/app/components/Views/Section/AboutSection";
import { ExperienceSection } from "@/app/components/Views/Section/ExperienceSection";
import { EducationSection } from "@/app/components/Views/Section/EducationSection";
import { TechStackSection } from "@/app/components/Views/Section/TechStackSection";

import SmoothScrollWrapper from "@/app/components/Views/SmoothScrollWrapper";

const About = () => {

    const {

        appViewModel,
        footerViewModel,
        navigationViewModel

    } = useContext(AppContext);

    return (
        <>
            <Main viewModel={appViewModel}>
                <div className="navigation">
                    <Navigation
                        appViewModel={appViewModel}
                        viewModel={navigationViewModel}
                    />
                </div>

                <SmoothScrollWrapper>
                    <AboutSection />
                    <ExperienceSection />
                    <TechStackSection />
                    <EducationSection />
                </SmoothScrollWrapper>
            </Main>

            <Footer data-testid='footer' viewModel={footerViewModel} />
        </>
    );
};

export default About;