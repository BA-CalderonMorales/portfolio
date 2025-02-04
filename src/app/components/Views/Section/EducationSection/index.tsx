import { AppContext } from "@/app/context/index";
import { useContext } from "react";
import { observer } from "mobx-react";
import { BaseSection } from "../shared/BaseSection";
import { EducationSectionViewModel } from "./EducationSectionViewModel";
import "./EducationSection.css";

export const EducationSection = observer((): JSX.Element => {
    const { appViewModel } = useContext(AppContext);
    const viewModel = new EducationSectionViewModel(appViewModel);

    return (
        <BaseSection id="education-section" className="education-section">
            <div className="section-header">
                <h2>{viewModel.title}</h2>
            </div>
            <div className="education-container">
                {viewModel.education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <div className="education-info">
                            <div className="education-year">{edu.period}</div>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <h4 className="education-institution">{edu.institution}</h4>
                            {edu.description && (
                                <p className="education-description">{edu.description}</p>
                            )}
                        </div>
                        {edu.logo && (
                            <div className="education-logo">
                                <img src={edu.logo} alt={`${edu.institution} logo`} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </BaseSection>
    );
});
