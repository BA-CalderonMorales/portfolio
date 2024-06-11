import { useContext } from "react";
import sectionStyles from "@/app/styles/components/Views/section.module.css";
import { AppContext } from "@/app/context";
import { observer } from "mobx-react";
import { Section } from "./Section";

export const WorkHistorySection = observer(() : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let workHistoryIndex = sectionViewModels.findIndex((section) => section.id === "work-history");
    
    return (
        <div className={`${sectionStyles.sectionWrapper} ${sectionStyles.sectionFullHeight} card`}>

            <Section viewModel={sectionViewModels[workHistoryIndex]} />

        </div>
    );
});