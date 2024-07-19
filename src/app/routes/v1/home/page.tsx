"use client";

import { Main } from "@/app/components/Views/Main.tsx";
import { Navigation } from "@/app/components/Views/Navigation.tsx";
import { HomeSection } from "@/app/components/Views/Section/HomeSection.tsx";
import { HomeLifeSection } from "@/app/components/Views/Section/HomeLifeSection.tsx";
import { AppContext } from "@/app/context";
import { useContext } from "react";
import { Footer } from "@/app/components/Views/Footer";
import SmoothScrollWrapper from "@/app/components/Views/SmoothScrollWrapper";

const Home = () => {

    const {
        appViewModel,
        footerViewModel,
        navigationViewModel
    } = useContext(AppContext); 

    return (

        <>

            <Main viewModel={appViewModel} >

                <div key={'navigation-home'} className="navigation">

                    <Navigation appViewModel={appViewModel} viewModel={navigationViewModel} />

                </div>

                <SmoothScrollWrapper>

                    <HomeSection key={'home-section'} data-testid='home-section' />

                    <HomeLifeSection key={'home-life-section'} data-testid='home-life-section' />

                </SmoothScrollWrapper>

            </Main>

            <Footer data-testid='footer' viewModel={footerViewModel} />

        </>


    );

};

export default Home;