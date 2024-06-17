import React from 'react';
import { observer } from 'mobx-react';
import { AppViewModel } from '../ViewModels/AppViewModel';

interface MainProps {

    children: React.ReactNode;
    viewModel?: AppViewModel;

}

export const Main = observer((props : MainProps) => {

    return (

        <main className={`theme-${props.viewModel?.theme}`} data-testid='main-content'>

            {props.children}

        </main>

    );

});