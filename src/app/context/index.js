"use client"

import React, { createContext, useEffect, useState } from 'react';
import { initialState } from "./constants/initialState";
import { navigationViewModel } from "./constants/navigation";
import { sectionViewModels } from "./constants/section";
import { footerViewModel } from './constants/footer';

export const AppContext = createContext(initialState);

const AppProvider = ({children}) => {

    const [globalState, setGlobalState] = useState(initialState);

    useEffect(() => {

        // set the global context state here...
        setGlobalState((prevGlobalState) => ({
            ...prevGlobalState,
            navigationViewModel: navigationViewModel,
            sectionViewModels: sectionViewModels,
            footerViewModel: footerViewModel
        }));

    }, []);


    return (
        <AppContext.Provider value={globalState}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;