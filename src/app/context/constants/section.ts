import { SectionViewModel } from '../../components/ViewModels/SectionViewModel';

export const sectionViewModels = [
    new SectionViewModel({
        id: "home",
        title: "Home",
        content: `I am a software engineer/developer based in the United States.
        I have experience with several programming languages and technologies.`
    }),
    new SectionViewModel({
        id: "about",
        title: "About",
        content: `I don't like to talk about myself as I preceive that to be a bit narcissistic.
        I merely want to share my experiences and knowledge with others.`
    }),
    new SectionViewModel({
        id: "work-history",
        title: "Work History",
        content: `I have worked for several companies and have gained a lot of experience.`
    }),
    new SectionViewModel({
        id: "skills",
        title: "Skills",
        content: `C#, Java, JavaScript, TypeScript, SQL, HTML/CSS, MVVM, MVC, Git/GitHub, CI/CD, Agile, Scrum`
    }),
    new SectionViewModel({
        id: "contact",
        title: "Contact",
        content: "You can contact me at via: email, phone, or social media."
    })
];