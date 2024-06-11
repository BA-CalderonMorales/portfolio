import styles from '@/app/styles/components/Views/footer.module.css'
import { FooterViewModel } from "../ViewModels/FooterViewModel";
import { observer } from "mobx-react";

export const Footer = observer(({ viewModel }: { viewModel: FooterViewModel | null | undefined }) => {

    return (

        <footer className={`${styles.footerWrapper}`}>
            <div className={`${styles.footer} card-footer`}>
                {/* <img src="path/to/logo.png" alt="Logo" class="footer-logo"> */}
                <span className="text-muted">{FooterViewModel.FOOTER_LOGO}</span>
                <span className="text-muted">&copy; {viewModel?.footerText}</span>
            </div>
        </footer>

    );

});