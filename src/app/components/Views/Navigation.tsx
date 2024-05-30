import { observer } from "mobx-react";
import { NavigationViewModel, Link } from "../ViewModels/NavigationViewModel";

export const Navigation = observer(({ viewModel }: { viewModel: NavigationViewModel }) : JSX.Element => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    {viewModel.brand}
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        {viewModel.links.map(( link: Link ) => (

                            <li key={link.id} className="nav-item">

                                <a className="nav-link" href={link.url}>
                                    {link.text}
                                </a>

                            </li>
                        ))}

                    </ul>

                </div>

            </div>

        
        </nav>

    );

});