import { createContext } from "react";
import { AppViewModel } from "../components/ViewModels/AppViewModel";
import { NavigationViewModel } from "../components/ViewModels/NavigationViewModel";
import { FooterViewModel } from "../components/ViewModels/FooterViewModel";
import { SmoothScrollWrapperViewModel } from "../components/ViewModels/SmoothScrollWrapperViewModel";

export interface AppContextInterface {
    appViewModel: AppViewModel;
    navigationViewModel: NavigationViewModel;
    footerViewModel: FooterViewModel;
    // Add the SmoothScrollWrapperViewModel to the interface
    smoothScrollWrapperViewModel: SmoothScrollWrapperViewModel;
}

// Create the context with a default value
export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);
