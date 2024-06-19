import { action, makeObservable, observable } from "mobx";

export class AppViewModel {

    loading: boolean = true;
    themes: string[] = ['default', 'modern', 'dracula', 'earthly'];
    theme?: string = 'default';
    currentPath: string = '';

    constructor() {

        makeObservable(this, {

            // observables
            currentPath: observable,
            loading: observable,
            themes: observable,
            theme: observable,

            // actions
            checkLocalStorage: action,
            initialize: action,
            onNavigationBarThemeSwitch: action,
            setCurrentPath: action,
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

    onNavigationBarThemeSwitch = (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault();

        if (!event.currentTarget || !event.currentTarget.id) return;

        this.setTheme(event.currentTarget.id || 'default');

    };

    setCurrentPath = (path: string) => {

        this.currentPath = path;

    }

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