"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { AboutSection } from "@/app/components/Views/Section/AboutSection";

const About = observer(() : JSX.Element => {

    return (

        <main className={navigationStyles.main}>

            <div className={sectionStyles.navigation}>

                <Navigation />

            </div>

            <AboutSection />

        </main>

    );

});

export default About;