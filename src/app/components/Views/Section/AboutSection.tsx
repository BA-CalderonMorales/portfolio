import { useContext } from "react";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { AppContext } from "@/app/context";
import { Section } from "./Section";

export const AboutSection = () : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let aboutSectionIndex = sectionViewModels.findIndex(model => model.id === "about");
    
    return (
        <div className={`${sectionStyles.sectionWrapper} ${sectionStyles.sectionFullHeight}`}>

            <Section viewModel={sectionViewModels[aboutSectionIndex]} />

        </div>
    );
};