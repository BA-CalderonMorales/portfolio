import { useEffect, useState } from "react";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { Section } from "./Section.tsx";
import { SectionViewModel } from "@/app/components/ViewModels/SectionViewModel.ts";

export const HomeLifeSection = () : JSX.Element => {

    const [homeLifeSection, setHomeLifeSection] = useState({} as SectionViewModel);

    useEffect(() => {

        const homeLifeSection = new SectionViewModel({
            id: "life",
            title: "Life",
            content: "A little about my personal life. I have a kiddo (and one on the way). A loving wife, and a home in the Omaha metro.",
        });

        setHomeLifeSection(homeLifeSection);

    }, []);

    
    return (
        <div className={sectionStyles.sectionWrapper}>

            <Section viewModel={homeLifeSection} />

        </div>
    );
};