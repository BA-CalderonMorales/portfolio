import { useContext } from "react";
import { FooterViewModel } from "../ViewModels/FooterViewModel";
import { observer } from "mobx-react";
import { AppContext } from "@/app/context";

export const Footer = observer(({ viewModel }: { viewModel: FooterViewModel | null | undefined }) => {

    const {
        appViewModel
    } = useContext(AppContext);

    return (

        <footer className={`theme-${appViewModel?.theme} footer card-footer`}>
            <span className="text-muted">
                {FooterViewModel.FOOTER_LOGO} &copy; {viewModel?.footerText}
            </span>
        </footer>

    );

});