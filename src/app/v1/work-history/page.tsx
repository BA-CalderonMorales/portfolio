"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { WorkHistorySection } from "@/app/components/Views/Section/WorkHistorySection";

const WorkHistory = observer(() : JSX.Element => {

    return (

        <main className={navigationStyles.main}>

            <div className={sectionStyles.navigation}>

                <Navigation />

            </div>

            <WorkHistorySection />

        </main>

    );

});

export default WorkHistory;