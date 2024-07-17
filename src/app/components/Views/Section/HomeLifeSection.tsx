import { useMemo } from "react";
import { Section } from "./Section.tsx";
import { SectionViewModel } from "@/app/components/ViewModels/SectionViewModel.ts";

export const HomeLifeSection = () : JSX.Element => {

    const homeLifeSection = useMemo(() => new SectionViewModel({
        id: "life",
        title: "Life",
        content: "A little about my personal life. I have a kiddo (and one on the way). A loving wife, and a home in the Omaha metro.",
    }), []);

    return <Section viewModel={homeLifeSection} />;
};