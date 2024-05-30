import styles from "../../styles/components/Views/section.module.css";
import {observer} from "mobx-react";
import {SectionViewModel} from "../ViewModels/SectionViewModel";

export const Section = observer(({viewModel}: { viewModel: SectionViewModel }): JSX.Element => {

    let section = viewModel.section;

    return (

        <section id={section.id} className={styles.section}>

            <h2>{section.title}</h2>
            <p>{section.content}</p>

        </section>

    );

});