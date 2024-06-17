"use client";

import { Main } from "@/app/components/Views/Main.tsx";
import { Navigation } from "@/app/components/Views/Navigation.tsx";
import { HomeSection } from "@/app/components/Views/Section/HomeSection.tsx";
import { HomeLifeSection } from "@/app/components/Views/Section/HomeLifeSection.tsx";
import { AppContext } from "@/app/context";
import { useContext } from "react";
import { Footer } from "@/app/components/Views/Footer";

const Home = () => {

    const {
        appViewModel,
        footerViewModel,
        navigationViewModel
    } = useContext(AppContext);

    return (

        <>

            <Main viewModel={appViewModel} >

                <div className="navigation">

                    <Navigation viewModel={navigationViewModel} />

                </div>

                <div className="allSections">

                    <HomeSection data-testid='home-section' />

                    <HomeLifeSection data-testid='home-life-section' />

                </div>

            </Main>

            <Footer data-testid='footer' viewModel={footerViewModel} />

        </>


    );

};

export default Home;