import { action, makeObservable, observable } from "mobx";
import API from "@/app/api/API";
import ResponseHandler from "@/app/utils/responseHandler";
import Logger from "@/app/utils/logger";

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
            downloadResume: action,
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

    downloadResume = async () => {
        
        try {

            const api = new API({
                    
                logger: (message: string) => Logger.log(message),
        
                responseHandler: (response: Response) => new ResponseHandler(response)

            });
    
            await api.downloadFile(
                'https://api.github.com/repos/BA-CalderonMorales/resume/contents/Brandon_Calderon_Morales_Resume_2024.pdf?ref=develop',
                'Brandon_Calderon_Morales_Resume_2024.pdf'
            );    


        } catch (error) {

            console.error('Error downloading the file:', error);

            alert("There was an error downloading the resume. You can always just go to my GitHub. I have a copy of my resume there as well.");

        } finally {

            const splitPath = window.location.pathname.split("#"); // Remove the hash from the URL

            window.history.pushState({}, '', splitPath[0]);

        }

    };

}