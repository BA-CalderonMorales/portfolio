import {makeObservable, observable} from "mobx";

export interface NavLink {
    id: string,
    url: string,
    text: string,
    options?: NavLink[]
}

export interface Navigation {
    links: NavLink[];
    brand: string;
}

export class NavigationViewModel {

    links: NavLink[];

    brand: string = "My Portfolio";

    constructor(links: NavLink[]) {
        this.links = links;

        makeObservable(this, {

            // observables
            links: observable

        });

    } 

}