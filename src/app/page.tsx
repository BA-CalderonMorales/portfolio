"use client";

import styles from "./page.module.css";

import { Navigation } from "./components/Views/Navigation";
import { navigationViewModel } from "./components/ViewModels/NavigationViewModel";

import { Section } from "./components/Views/Section";
import {
    aboutViewModel,
    contactViewModel,
    homeViewModel,
    skillsViewModel,
    workHistoryViewModel
} from "./components/ViewModels/SectionViewModel";

const sections = [
    {id: "home", viewModel: homeViewModel},
    {id: "about", viewModel: aboutViewModel},
    {id: "work-history", viewModel: workHistoryViewModel},
    {id: "skills", viewModel: skillsViewModel},
    {id: "contact", viewModel: contactViewModel}
];

export default function App() {

    return (

        <main className={styles.main}>

            <div className={styles.navigation}>

                <Navigation viewModel={navigationViewModel} />

            </div>


            <div className={styles.sections}>

                {sections.map((section) => (
                    <Section key={section.id} viewModel={section.viewModel} />
                ))}

            </div>


        </main>

    );
}
