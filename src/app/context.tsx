"use client";

import React from "react";
import { AppViewModel } from "./components/ViewModels/AppViewModel";
import { NavigationViewModel } from "./components/ViewModels/NavigationViewModel";
import { FooterViewModel } from "./components/ViewModels/FooterViewModel";
import { SmoothScrollWrapperViewModel } from "./components/ViewModels/SmoothScrollWrapperViewModel";
import { AppContext } from "@/app/context/index";

/**
 * AppProvider Component
 * 
 * This provider initializes all ViewModels and provides them through context
 * It's marked with "use client" to ensure it runs on the client side
 */
const AppProvider = ({ children }: { children: React.ReactNode }) => {
    // Initialize view models on the client side
    const appViewModel = new AppViewModel();
    const navigationViewModel = new NavigationViewModel();
    const footerViewModel = new FooterViewModel();
    const smoothScrollWrapperViewModel = new SmoothScrollWrapperViewModel(appViewModel);

    return (
        <AppContext.Provider value={{ 
            appViewModel, 
            navigationViewModel, 
            footerViewModel,
            smoothScrollWrapperViewModel
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
