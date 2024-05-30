import {makeObservable, observable} from "mobx";

export interface Link {
    id: string,
    url: string,
    text: string
}

export class NavigationViewModel {

    links: Link[];

    brand: string = "My Portfolio";

    constructor(links: Link[]) {
        this.links = links;

        makeObservable(this, {

            links: observable

        });

    }

}

export const navigationViewModel = new NavigationViewModel([
    {id: "home", url: "/", text: "Home"},
    {id: "about", url: "#about", text: "About"},
    {id: "work-history", url: "#work-history", text: "Work History"},
    {id: "skills", url: "#skills", text: "Skills"},
    {id: "contact", url: "#contact", text: "Contact"}
]);