import { SectionViewModel } from '@/app/components/ViewModels/SectionViewModel';
import { homeRecords } from '../content/home.tsx';
import { aboutRecords } from '../content/about.tsx';
import { contactRecords } from '../content/contact.tsx';

export const sectionViewModels = [
    new SectionViewModel({
        id: "home",
        title: "Hello, World!",
        content: homeRecords,
        sectionHeaderStyleOverrides: `
        border-bottom border-secondary
        text-center pb-2
        col-auto display-5` 
    }),
    new SectionViewModel({
        id: "about",
        content: aboutRecords,
        title: "About (via FAQ)",
        sectionHeaderStyleOverrides: `
        border-bottom border-secondary
        text-center pb-2
        col-auto display-5 sectionCustomHeader` 
    }),
    new SectionViewModel({
        id: "work-history",
        title: "Work History",
        content: `I have worked for several companies and have gained a lot of experience.`,
        sectionWrapperStyleOverrides: `sectionWrapper sectionFullHeight card`,
        sectionHeaderStyleOverrides: `
        border-bottom border-secondary
        text-center pb-2
        col-auto display-5 sectionCustomHeader` 
    }),
    new SectionViewModel({
        id: "skills",
        title: "Skills",
        content: `C#, Java, JavaScript, TypeScript, SQL, HTML/CSS, MVVM, MVC, Git/GitHub, CI/CD, Agile, Scrum`,
        sectionWrapperStyleOverrides: `sectionWrapper sectionFullHeight card`,
        sectionHeaderStyleOverrides: `
        border-bottom border-secondary
        text-center pb-2
        col-auto display-5 sectionCustomHeader` 
    }),
    new SectionViewModel({
        id: "contact",
        title: "Contact",
        content: contactRecords,
        sectionWrapperStyleOverrides: `sectionWrapper sectionFullHeight card`,
        sectionHeaderStyleOverrides: `
        border-bottom border-secondary
        text-center pb-2
        col-auto display-5 sectionCustomHeader` 
    })
];