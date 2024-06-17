import { useContext } from "react";
import { AppContext } from "@/app/context";
import { observer } from "mobx-react";
import { Section } from "./Section";

export const SkillsSection = observer(() : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let skillsIndex = sectionViewModels.findIndex((section) => section.id === "skills");
    
    return (
        <div className={`sectionWrapper sectionFullHeight card`}>

            <Section viewModel={sectionViewModels[skillsIndex]} />

        </div>
    );
});