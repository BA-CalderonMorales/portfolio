import { useContext } from "react";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { AppContext } from "@/app/context";
import { observer } from "mobx-react";
import { Section } from "./Section";

export const SkillsSection = observer(() : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let skillsIndex = sectionViewModels.findIndex((section) => section.id === "skills");
    
    return (
        <div className={`${sectionStyles.sectionWrapper} ${sectionStyles.sectionFullHeight}`}>

            <Section viewModel={sectionViewModels[skillsIndex]} />

        </div>
    );
});