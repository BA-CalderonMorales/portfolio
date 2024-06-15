import { useContext } from "react";
import sectionStyles from "@/app/styles/components/Views/section/section.module.css";
import { AppContext } from "@/app/context/index.js";
import { Section } from "./Section.tsx";

export const HomeSection = () : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let homeSectionIndex = sectionViewModels.findIndex(section => section.id === "home");
    
    return (
        <div className={`${sectionStyles.sectionWrapper} card`}>

            <Section viewModel={sectionViewModels[homeSectionIndex]} />

        </div>
    );
};