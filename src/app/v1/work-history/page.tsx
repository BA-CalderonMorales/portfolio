"use client";

import { Main } from "@/app/components/Views/Main";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { WorkHistorySection } from "@/app/components/Views/Section/WorkHistorySection";
import { useContext } from "react";
import { AppContext } from "@/app/context";
import { Footer } from "@/app/components/Views/Footer";

const WorkHistory = observer(() : JSX.Element => {

    const {
        appViewModel,
        footerViewModel,
        navigationViewModel
    } = useContext(AppContext);

    return (

        <>

            <Main viewModel={appViewModel}>

                <div className="navigation">

                    <Navigation viewModel={navigationViewModel}/>

                </div>

                <div className="allSections">

                    <WorkHistorySection />

                </div>

            </Main>

            <Footer data-testid='footer' viewModel={footerViewModel} />
        
        </>


    );

});

export default WorkHistory;