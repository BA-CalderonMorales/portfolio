"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { AboutSection } from "@/app/components/Views/Section/AboutSection";
import { AppContext } from "@/app/context";
import { useContext } from "react";
import { footerViewModel } from "@/app/context/constants/footer";
import { Footer } from "@/app/components/Views/Footer";

const About = observer(() : JSX.Element => {

    const { navigationViewModel } = useContext(AppContext);

    return (

        <>

            <main className={navigationStyles.main}>

                <div className={sectionStyles.navigation}>

                    <Navigation viewModel={navigationViewModel} />

                </div>

                <AboutSection />

            </main>

            <Footer data-testid='footer' viewModel={footerViewModel} />
        
        </>


    );

});

export default About;