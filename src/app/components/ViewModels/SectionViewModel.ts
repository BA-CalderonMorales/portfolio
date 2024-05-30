import { makeObservable, observable } from "mobx";

export interface Section {
    id: string,
    title: string,
    content: string
}

export class SectionViewModel {

    section: Section;

    constructor(section: Section) {
        this.section = section;

        makeObservable(this, {

            section: observable

        });

    }

}

const homeViewModel = new SectionViewModel({
    id: "#home",
    title: "Home",
    content: "Welcome to my portfolio!"
});

const aboutViewModel = new SectionViewModel({
    id: "#about",
    title: "About",
    content: "I am a software developer."
});

const workHistoryViewModel = new SectionViewModel({
    id: "#work-history",
    title: "Work History",
    content: "I have worked at several companies."
});

const skillsViewModel = new SectionViewModel({
    id: "#skills",
    title: "Skills",
    content: "I have experience with several programming languages."
});

const contactViewModel = new SectionViewModel({
    id: "#contact",
    title: "Contact",
    content: "You can contact me at via: email, phone, or social media."
});

export {
    homeViewModel,
    aboutViewModel,
    workHistoryViewModel,
    skillsViewModel,
    contactViewModel
};