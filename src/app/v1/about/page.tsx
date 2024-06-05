"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { AboutSection } from "@/app/components/Views/Section/AboutSection";
import { AppContext } from "@/app/context";
import { useContext } from "react";

const About = observer(() : JSX.Element => {

    const { navigationViewModel } = useContext(AppContext);

    return (

        <main className={navigationStyles.main}>

            <div className={sectionStyles.navigation}>

                <Navigation viewModel={navigationViewModel} />

            </div>

            <AboutSection />

        </main>

    );

});

export default About;