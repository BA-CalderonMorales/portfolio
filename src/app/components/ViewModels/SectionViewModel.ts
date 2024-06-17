import React from "react";
import { makeObservable, observable } from "mobx";

export interface Section {
    id: string,
    title?: string,
    content: string | Function | Record<string, React.JSX.Element>,
    isHero?: boolean,
    sectionHeaderStyleOverrides?: string,
    sectionWrapperStyleOverrides?: string
}

export class SectionViewModel {

    public id: string;
    public title?: string;
    public content: string | Function | Record<string, React.JSX.Element>;
    public isHero?: boolean = false;
    sectionHeaderStyleOverrides?: string;
    sectionWrapperStyleOverrides?: string

    constructor(section: Section) {
        this.id = section.id;
        this.title = section.title;
        this.content = section.content;
        this.isHero = section.isHero;
        this.sectionHeaderStyleOverrides = section.sectionHeaderStyleOverrides;
        this.sectionWrapperStyleOverrides = section.sectionWrapperStyleOverrides;

        makeObservable(this, {

            id: observable,
            title: observable,
            content: observable,
            isHero: observable

        });

    }

}