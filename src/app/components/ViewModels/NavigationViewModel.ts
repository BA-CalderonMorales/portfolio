import {action, makeObservable, observable} from "mobx";
import { AppViewModel } from "./AppViewModel";

export enum NavigationLinkType {
    HOME = 'home',
    ABOUT = 'about',
    CONTACT = 'contact',
    THEME = 'theme'
}

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

    constructor(links: NavLink[] = new Array<NavLink>()) {
        this.links = this.validateLinks(links);

        makeObservable(this, {
            // observables
            links: observable,
            
            // actions
            clickLink: action
        });
    }

    /**
     * Validates links to ensure only allowed types from NavigationLinkType are used
     * @param links The links to validate
     * @returns Links that match the allowed types
     */
    private validateLinks(links: NavLink[]): NavLink[] {
        // Simply filter links to only include those with IDs from our enum
        return links?.filter(link => 
            Object.values(NavigationLinkType).includes(link.id as NavigationLinkType)
        ) || [];
    }

    clickLink = (type?: string, appViewModel?: AppViewModel) => {

        if (!appViewModel) {
            return;
        }

        if (!type) {
            return;
        }

    };

}