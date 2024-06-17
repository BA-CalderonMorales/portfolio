import { action, makeObservable, observable } from "mobx";

export class AppViewModel {

    loading: boolean = true;
    themes: string[] = ['default', 'earthly'];
    theme?: string = 'default';

    constructor() {

        makeObservable(this, {

            // observables
            loading: observable,
            themes: observable,
            theme: observable,

            // actions
            checkLocalStorage: action,
            initialize: action,
            setTheme: action

        });

        this.initialize();

    }

    checkLocalStorage = () => {

        if (typeof window === "undefined") return;

        const theme = window.localStorage.getItem('my-portfolio-theme');

        this.setTheme(theme || 'earthly');

    }

    initialize = () => {

        this.loading = true;

        this.checkLocalStorage();

        this.loading = false;
    };

    setTheme = (theme: string) => {

        if (typeof window === "undefined") return;

        const newTheme = this.themes.find((t) => t === theme);

        if (!newTheme) {

            this.theme = 'default';

        } else {

            this.theme = newTheme;

        }

        window.localStorage.setItem('my-portfolio-theme', this.theme || 'default');

    };

}