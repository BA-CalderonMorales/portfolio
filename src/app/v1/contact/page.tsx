"use client";

import navigationStyles from "@/app/styles/components/Views/navigation.module.css";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { Navigation } from "@/app/components/Views/Navigation";
import { observer } from "mobx-react";
import { ContactSection } from "@/app/components/Views/Section/ContactSection";
import { useContext } from "react";
import { AppContext } from "@/app/context";

const Contact = observer(() : JSX.Element => {

    const { navigationViewModel } = useContext(AppContext);

    return (

        <main className={navigationStyles.main}>

            <div className={sectionStyles.navigation}>

                <Navigation viewModel={navigationViewModel} />

            </div>

            <ContactSection />

        </main>

    );

});

export default Contact;