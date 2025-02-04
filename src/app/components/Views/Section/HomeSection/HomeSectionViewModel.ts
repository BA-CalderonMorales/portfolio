import { AppViewModel } from "@/app/components/ViewModels/AppViewModel";
import { makeAutoObservable } from "mobx";

interface Hero {
  title: string;
  subtitle?: string;
  description?: string;
}

export class HomeSectionViewModel {
  private appViewModel: AppViewModel;
  hero: Hero = {
    title: "I'm a Product-Minded Software Engineer",
    description: "I build software solutions with a focus on user experience and clean code."
  };

  constructor(appViewModel: AppViewModel) {
    this.appViewModel = appViewModel;
    makeAutoObservable(this);
  }

  /**
   * Determines if dark mode is active based on the current theme
   * @returns true if using the dracula theme (dark mode)
   */
  get isDarkMode(): boolean {
    return this.appViewModel.theme === 'dracula';
  }

  /**
   * Accessor for the loading state from the app view model
   * @returns the current loading state
   */
  get isLoading(): boolean {
    return this.appViewModel.loading;
  }
}
