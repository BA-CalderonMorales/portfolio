import {action, makeObservable, observable} from "mobx";
import { AppViewModel } from "./AppViewModel";

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
            links: observable,

            // actions
            clickLink: action

        });

    } 

    clickLink = (type?: string, appViewModel?: AppViewModel) => {

        if (!appViewModel) {
            return;
        }

        if (!type) {
            return;
        }

        if (type === 'resume') {
            appViewModel?.downloadResume();
        }

    };

}