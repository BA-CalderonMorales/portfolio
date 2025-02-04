import { useContext } from "react";
import { FooterViewModel } from "../ViewModels/FooterViewModel";
import { observer } from "mobx-react";
import { AppContext } from "@/app/context/index";

export const Footer = observer(({ viewModel }: { viewModel: FooterViewModel | null | undefined }) => {

    const {
        appViewModel
    } = useContext(AppContext);

    return (

        <footer className={`theme-${appViewModel?.theme} footer card-footer`}>
            <span>{FooterViewModel.FOOTER_LOGO}</span>
            <span className="align-right">&copy;&nbsp;{viewModel?.footerText}</span>
        </footer>

    );

});