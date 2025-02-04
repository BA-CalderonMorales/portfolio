import { AppContext } from "@/app/context/index";
import { useContext } from "react";
import { observer } from "mobx-react";
import { BaseSection } from "../shared/BaseSection";
import { ExperienceSectionViewModel } from "./ExperienceSectionViewModel";
import "./ExperienceSection.css";

export const ExperienceSection = observer((): JSX.Element => {

    const { appViewModel } = useContext(AppContext);
    const viewModel = new ExperienceSectionViewModel(appViewModel);

    return (

        <BaseSection id="experience-section" className="experience-section">

            <div className="section-header">
                <h2>{viewModel.title}</h2>
            </div>

            <div className="timeline">

                {viewModel.experiences.map((exp, index) => (

                    <div
                        key={index}
                        className={`timeline-item ${ index % 2 === 0 ? 'left' : 'right' }`}
                    >

                        <div className="timeline-content">

                            <div className="timeline-date">{exp.period}</div>
                            <h3 className="timeline-title">{exp.title}</h3>
                            <h4 className="timeline-company">{exp.company}</h4>
                            <p className="timeline-description">{exp.description}</p>

                            {exp.technologies && (
                                <div className="timeline-tech">
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            )}

                        </div>

                    </div>

                ))}

            </div>

        </BaseSection>
    );
});
