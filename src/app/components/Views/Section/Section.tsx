import styles from "@/app/styles/components/Views/section.module.css";
import { observer } from "mobx-react";
import { Section as SectionType } from "../../ViewModels/SectionViewModel";

export const Section = observer(({viewModel}: { viewModel: SectionType }): JSX.Element => {

    if (!viewModel) return (<section></section>);

    return (

        <section id={viewModel.id} className={styles.section}>

            <h2 className={styles.sectionHeader }>{viewModel.title}</h2>

            <p className={styles.sectionParagraph}>{viewModel.content}</p>

        </section>

    );

});