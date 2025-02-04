import { makeAutoObservable } from "mobx";
import { AppViewModel } from "./AppViewModel";
import logger from '@/utils/logger';

export class SmoothScrollWrapperViewModel {
    private appViewModel: AppViewModel;
    public hasScrolled: boolean = false;
    public welcomeVisible: boolean = true;
    private isInitialized: boolean = false;
    
    constructor(appViewModel: AppViewModel) {
        this.appViewModel = appViewModel;
        makeAutoObservable(this);
    }
    
    /**
     * Initialize the model safely on client side
     * Call this method from a useEffect in component
     */
    public initialize = (): void => {
        if (this.isInitialized) return;
        
        logger.info('Initializing SmoothScrollWrapperViewModel');
        this.checkLocalStorage();
        this.isInitialized = true;
    };
    
    /**
     * Check localStorage for stored scroll state
     */
    private checkLocalStorage = (): void => {
        if (typeof window !== 'undefined') {
            try {
                const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
                logger.info('localStorage hasSeenWelcome:', hasSeenWelcome);
                
                if (hasSeenWelcome === 'true') {
                    logger.info('User has seen welcome before, hiding welcome');
                    this.hasScrolled = true;
                    this.welcomeVisible = false;
                } else {
                    logger.info('First visit or welcome reset, showing welcome');
                    this.hasScrolled = false;
                    this.welcomeVisible = true;
                }
            } catch (e) {
                logger.error("Error accessing localStorage:", e);
                // Default to showing welcome if localStorage fails
                this.hasScrolled = false;
                this.welcomeVisible = true;
            }
        }
    };
    
    /**
     * Marks that the user has scrolled down
     * This should hide the welcome section permanently
     */
    public setHasScrolled = (value: boolean): void => {
        if (value) {
            logger.info('Setting hasScrolled to true');
            this.hasScrolled = true;
            this.hideWelcome();
            
            // Store in localStorage to persist across refreshes
            if (typeof window !== 'undefined') {
                try {
                    localStorage.setItem('hasSeenWelcome', 'true');
                    logger.info('Saved to localStorage: hasSeenWelcome=true');
                } catch (e) {
                    logger.error("Error setting localStorage:", e);
                }
            }
        }
    };
    
    /**
     * Hide the welcome section
     */
    public hideWelcome = (): void => {
        logger.info('Hiding welcome');
        this.welcomeVisible = false;
    };
    
    /**
     * Reset welcome state - useful for testing
     */
    public resetWelcome = (): void => {
        logger.info('Resetting welcome state');
        this.hasScrolled = false;
        this.welcomeVisible = true;
        
        if (typeof window !== 'undefined') {
            try {
                localStorage.removeItem('hasSeenWelcome');
                logger.info('Removed from localStorage: hasSeenWelcome');
            } catch (e) {
                logger.error("Error removing from localStorage:", e);
            }
        }
    };
    
    /**
     * Get the theme from the app view model
     */
    get theme(): string {
        return this.appViewModel.theme || 'dracula';
    }

    /**
     * Check if the app is in dark mode
     */
    get isDarkMode(): boolean {
        return this.appViewModel.theme === 'dracula';
    }

    /**
     * Check if the welcome section should be shown based on the current path
     */
    public shouldShowWelcome = (path: string): boolean => {
        // Only show welcome on home page and if user hasn't scrolled yet
        const isHomePage = path === '/' || path === '/home';
        const shouldShow = isHomePage && !this.hasScrolled && this.welcomeVisible;
        
        logger.debug('shouldShowWelcome check:', { 
            path, 
            isHomePage, 
            hasScrolled: this.hasScrolled, 
            welcomeVisible: this.welcomeVisible,
            shouldShow
        });
        
        return shouldShow;
    };
}
