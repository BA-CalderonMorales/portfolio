import { makeObservable, observable } from "mobx";

export interface Section {
    id: string,
    title: string,
    content: string
}

export class SectionViewModel {

    public id: string;
    public title: string;
    public content: string;

    constructor(section: Section) {
        this.id = section.id;
        this.title = section.title;
        this.content = section.content;

        makeObservable(this, {

            id: observable,
            title: observable,
            content: observable

        });

    }

}