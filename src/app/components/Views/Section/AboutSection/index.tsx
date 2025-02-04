import { AppContext } from "@/app/context/index";
import { useContext } from "react";
import { observer } from "mobx-react";
import { BaseSection } from "../shared/BaseSection";
import { AboutSectionViewModel } from "./AboutSectionViewModel";
import "./AboutSection.css";

export const AboutSection = observer((): JSX.Element => {

    const { appViewModel } = useContext(AppContext);
    const viewModel = new AboutSectionViewModel(appViewModel);

    return (

        <BaseSection id="about-section" className="about-section">

            <div className="about-header">
                <h2>{viewModel.title}</h2>
                <p className="about-subtitle">{viewModel.subtitle}</p>
            </div>

            <div className="about-content">

                <div className="about-image-container">
                    {viewModel.profileImage && (
                        <img
                            src={viewModel.profileImage}
                            alt="Profile"
                            className="about-profile-image"
                        />
                    )}
                </div>

                <div className="about-text">
                    {viewModel.aboutParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

            </div>

            <div className="skills-section">

                <h3>{viewModel.skillsTitle}</h3>

                <div className="skills-grid">

                    {viewModel.skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${ skill.level }%` }}
                                ></div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </BaseSection>
    );
});
