import { useContext } from "react";
import { AppContext } from "@/app/context/index.js";
import { Section } from "./Section.tsx";

export const HomeSection = () : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let homeSectionIndex = sectionViewModels.findIndex(section => section.id === "home");
    
    return <Section viewModel={sectionViewModels[homeSectionIndex]} />;
};