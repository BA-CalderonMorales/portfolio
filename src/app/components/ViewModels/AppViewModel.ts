import { action, makeObservable, observable } from "mobx";

export class AppViewModel {

    public loading: boolean = true;
    public themes: string[] = ['default', 'modern', 'dracula', 'earthly'];
    public theme?: string = 'dracula';
    public currentPath: string = ''; 

    public static DRACULA_WHITE = "#f8f8f2";
    public static MODERN_PURPLE = '#6f42c1';
    public static EARTHLY_RED = '#A23C2C';

    constructor() {

        makeObservable(this, {

            // observables
            currentPath: observable,
            loading: observable,
            themes: observable,
            theme: observable,

            // actions
            checkLocalStorage: action,
            getAnimationColor: action,
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

        this.setTheme(theme || 'dracula' );

    }

    getAnimationColor = () => {

        if (this.theme === 'dracula') {
            return AppViewModel.DRACULA_WHITE;
        }

        if (this.theme === 'modern') {
            return AppViewModel.MODERN_PURPLE;
        }

        if (this.theme === 'earthly') {
            return AppViewModel.EARTHLY_RED;
        }

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

            this.theme = 'dracula';

        } else {

            this.theme = newTheme;

        }

        window.localStorage.setItem('my-portfolio-theme', this.theme);

    };

}