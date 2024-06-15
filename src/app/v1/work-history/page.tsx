"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { WorkHistorySection } from "@/app/components/Views/Section/WorkHistorySection";
import { useContext } from "react";
import { AppContext } from "@/app/context";
import { Footer } from "@/app/components/Views/Footer";

const WorkHistory = observer(() : JSX.Element => {

    const {
        footerViewModel,
        navigationViewModel
    } = useContext(AppContext);

    return (

        <>

            <main className={navigationStyles.main}>

                <div className={sectionStyles.navigation}>

                    <Navigation viewModel={navigationViewModel}/>

                </div>

                <WorkHistorySection />

            </main>

            <Footer data-testid='footer' viewModel={footerViewModel} />
        
        </>


    );

});

export default WorkHistory;