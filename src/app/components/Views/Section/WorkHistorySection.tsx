import { useContext } from "react";
import { AppContext } from "@/app/context";
import { observer } from "mobx-react";
import { Section } from "./Section";

export const WorkHistorySection = observer(() : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let workHistoryIndex = sectionViewModels.findIndex((section) => section.id === "work-history");
    
    return <Section viewModel={sectionViewModels[workHistoryIndex]} />;
});