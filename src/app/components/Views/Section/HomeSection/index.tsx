import { AppContext } from "@/app/context/index";
import { useContext } from "react";
import { observer } from "mobx-react";
import { BaseSection } from "../shared/BaseSection";
import { HomeSectionViewModel } from "./HomeSectionViewModel";
import { motion } from "framer-motion";
import "./HomeSection.css";

export const HomeSection = observer((): JSX.Element => {

    const { appViewModel } = useContext(AppContext);

    const viewModel = new HomeSectionViewModel(appViewModel);

    return (
        <BaseSection id="home-hero" className="home-hero-section">
            <motion.div 
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: 0.3,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                <motion.h1 
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {viewModel.hero.title}
                </motion.h1>

                {viewModel.hero.subtitle && (
                    <motion.h2 
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        {viewModel.hero.subtitle}
                    </motion.h2>
                )}

                {viewModel.hero.description && (
                    <motion.p 
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        {viewModel.hero.description}
                    </motion.p>
                )}

                <motion.div 
                    className="hero-ctas"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <a href="/about" className="btn btn-primary">Learn More</a>
                    <a href="/contact" className="btn btn-secondary">Contact Me</a>
                </motion.div>
            </motion.div>
        </BaseSection>
    );
});
