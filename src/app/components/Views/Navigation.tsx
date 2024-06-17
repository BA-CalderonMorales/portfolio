import Link from "next/link";
import { NavigationViewModel, NavLink } from "@/app/components/ViewModels/NavigationViewModel.ts";
import { AppViewModel } from "../ViewModels/AppViewModel";
import { Fragment } from "react";

interface NavigationProps {

    viewModel: NavigationViewModel | null | undefined;
    appViewModel: AppViewModel | null | undefined;

}

export const Navigation = (props: NavigationProps) : JSX.Element => {

    if (!props.viewModel || !props.viewModel.links || props.viewModel.links.length === 0) return (
        <nav data-testid="navigation-content"></nav>
    );

    return (

        <nav
            className="navbar navbar-expand-lg navbar-light fixed-top card-header"
            data-testid="navigation-content"
        >

            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    {props.viewModel.brand}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <span className="navbar-toggler-icon"></span>
                
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        {props.viewModel.links.map(( link: NavLink ) => (

                            <Fragment key={link.id}>

                                {!link.options ? (

                                    <li id={link.id} key={link.id} className="nav-item">

                                        <Link className="nav-link" href={link.url}>
                                            {link.text}
                                        </Link>

                                    </li>

                                ) : (

                                    <li id={link.id} key={link.id} className="nav-item dropdown">

                                        <Link
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                        >

                                            {link.text}

                                        </Link>

                                        <ul className="dropdown-menu shadow navbar-sub-menu">
                                            
                                                {link.options.map(( option: NavLink ) => (

                                                    <li
                                                        key={option.id}
                                                        id={option.id}
                                                        className="dropdown-item"
                                                        onClick={props.appViewModel?.onNavigationBarThemeSwitch}
                                                    >

                                                        <Link key={option.id} href={link.url}>
                                                            {option.text}
                                                        </Link>

                                                    </li>

                                                ))} 

                                        </ul>

                                    </li>

                                )}

                            </Fragment>
                            
                        ))}

                    </ul>

                </div>

            </div>

        </nav>

    );

};