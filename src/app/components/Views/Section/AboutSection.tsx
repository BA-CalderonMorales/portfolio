import { useContext } from "react";
import { AppContext } from "@/app/context";
import { Section } from "./Section";

export const AboutSection = () : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let aboutSectionIndex = sectionViewModels.findIndex(model => model.id === "about");
    
    return <Section viewModel={sectionViewModels[aboutSectionIndex]} />;
};