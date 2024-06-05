"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { SkillsSection } from "@/app/components/Views/Section/SkillsSection";

const Skills = observer(() : JSX.Element => {

    return (

        <main className={navigationStyles.main}>

            <div className={sectionStyles.navigation}>

                <Navigation />

            </div>

            <SkillsSection />

        </main>

    );

});

export default Skills;