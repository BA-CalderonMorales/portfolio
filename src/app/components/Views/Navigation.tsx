import Link from "next/link";
import { NavigationViewModel, NavLink } from "@/app/components/ViewModels/NavigationViewModel.ts";

export const Navigation = ({ viewModel } : { viewModel : NavigationViewModel | null | undefined }) : JSX.Element => {

    if (!viewModel || !viewModel.links || viewModel.links.length === 0) return (
        <nav data-testid="navigation-content"></nav>
    );

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top card-header" data-testid="navigation-content">

            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    {viewModel.brand}
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        {viewModel.links.map(( link: NavLink ) => (

                            <li key={link.id} className="nav-item">

                                <Link className="nav-link" href={link.url}>
                                    {link.text}
                                </Link>

                            </li>
                        ))}

                    </ul>

                </div>

            </div>

        
        </nav>

    );

};