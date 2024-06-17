import { useContext } from "react";
import { AppContext } from "@/app/context";
import { observer } from "mobx-react";
import { Section } from "./Section";

export const ContactSection = observer(() : JSX.Element => {

    const { sectionViewModels } = useContext(AppContext);

    let contactIndex = sectionViewModels.findIndex((section) => section.id === "contact");
    
    return (
        <div className={`sectionWrapper sectionFullHeight card`}>

            <Section viewModel={sectionViewModels[contactIndex]} />

        </div>
    );
});