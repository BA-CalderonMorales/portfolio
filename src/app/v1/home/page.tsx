"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation.tsx";
import { HomeSection } from "@/app/components/Views/Section/HomeSection.tsx";
import { HomeLifeSection } from "@/app/components/Views/Section/HomeLifeSection.tsx";
import { AppContext } from "@/app/context";
import { useContext } from "react";
import { Footer } from "@/app/components/Views/Footer";

const Home = () => {

    const {
        footerViewModel,
        navigationViewModel
    } = useContext(AppContext);

    return (

        <>

            <main className={navigationStyles.main} data-testid="main-content">

                <div className={sectionStyles.navigation}>

                    <Navigation viewModel={navigationViewModel} />

                </div>

                <HomeSection data-testid='home-section' />

                <HomeLifeSection data-testid='home-life-section' />

            </main>

            <Footer data-testid='footer' viewModel={footerViewModel} />

        </>


    );

};

export default Home;