"use client";

import { Main } from "@/app/components/Views/Main";
import { Navigation } from "@/app/components/Views/Navigation";
import { AppContext } from "@/app/context/index";
import { useContext } from "react";
import { Footer } from "@/app/components/Views/Footer";
import SmoothScrollWrapper from "@/app/components/Views/SmoothScrollWrapper";
import { HomeSection } from "@/app/components/Views/Section/HomeSection";
import { HomeLifeSection } from "@/app/components/Views/Section/HomeLifeSection";

// Set this to true to always show welcome on refresh (for development)
const DEVELOPMENT_MODE = true;

const Home = () => {
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
                
                <SmoothScrollWrapper forceShowWelcome={DEVELOPMENT_MODE} disableLocalStorage={DEVELOPMENT_MODE}>
                    <HomeSection />
                    <HomeLifeSection />
                </SmoothScrollWrapper>
            </Main>

            <Footer data-testid='footer' viewModel={footerViewModel} />
        </>
    );
};

export default Home;