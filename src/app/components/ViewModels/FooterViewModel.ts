import {action, makeObservable, observable} from "mobx";

export interface FooterViewModel {

    footerText: string

}

export class FooterViewModel {

    static FOOTER_LOGO = "My Portfolio"

    public footerText = 'Brandon A. Calderon-Morales. All rights reserved. ';

    constructor() {

        this.updateFooterText();

        makeObservable(this, {

            // observables
            footerText: observable,

            // actions
            updateFooterText: action

        });

    }

    updateFooterText = () => {

        const today = new Date();

        this.footerText = `${today.getFullYear()} ${this.footerText}`;

    };

}