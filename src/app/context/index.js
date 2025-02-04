"use client"

import React, { createContext, useEffect, useState } from 'react';

// import constants
import { initialState } from "./constants/initialState";
import { appViewModel } from './constants/app';
import { navigationViewModel } from "./constants/navigation";
import { footerViewModel } from './constants/footer';

// yes, it's necessary to export this even if we're already
// exporting within index.ts in this context/ module.
export const AppContext = createContext(initialState);

const AppProvider = ({children}) => {

    // provides a single source of truth for the app
    const [globalState, setGlobalState] = useState(initialState);

    useEffect(() => {

        // set the global context state here...
        setGlobalState((prevGlobalState) => ({
            ...prevGlobalState,
            appViewModel: appViewModel,
            navigationViewModel: navigationViewModel,
            footerViewModel: footerViewModel
        }));

    }, []); // ensures this runs only once on component mount


    return (
        <AppContext.Provider value={globalState}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;