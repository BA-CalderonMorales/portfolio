import { AppContext } from "@/app/context/index";
import { useContext } from "react";
import { observer } from "mobx-react";
import { BaseSection } from "../shared/BaseSection";
import { TechStackSectionViewModel } from "./TechStackSectionViewModel";
import "./TechStackSection.css";

export const TechStackSection = observer((): JSX.Element => {

    const { appViewModel } = useContext(AppContext);
    const viewModel = new TechStackSectionViewModel(appViewModel);

    return (

        <BaseSection id="tech-stack-section" className="tech-stack-section">

            <div className="section-header">
                <h2>{viewModel.title}</h2>
            </div>

            {viewModel.categories.map((category, catIndex) => (

                <div key={catIndex} className="tech-category">

                    <h3 className="category-title">{category.name}</h3>
                    <div className="tech-items">

                        {category.items.map((tech, techIndex) => (
                            <div key={techIndex} className="tech-item">
                                {tech.icon && (
                                    <div className="tech-icon">
                                        <i className={`tech-icon-${ tech.icon }`}></i>
                                    </div>
                                )}
                                <div className="tech-name">{tech.name}</div>
                            </div>
                        ))}

                    </div>

                </div>

            ))}

            <div className="tech-diagram">

                <div className="diagram-title">My Skills & Expertise</div>

                <div className="diagram-content">

                    <div className="diagram-node main-node">Software Engineering</div>

                    <div className="diagram-branches">

                        <div className="branch">
                            <div className="diagram-node secondary-node">CI/CD Optimization</div>
                            <div className="leaf-nodes">
                                <div className="diagram-node leaf-node">Git & GitHub</div>
                                <div className="diagram-node leaf-node">Jenkins / GitHub Actions</div>
                            </div>
                        </div>

                        <div className="branch">
                            <div className="diagram-node secondary-node">Distributed Systems</div>
                            <div className="leaf-nodes">
                                <div className="diagram-node leaf-node">Scalable Architecture</div>
                                <div className="diagram-node leaf-node">Workflow Automation</div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </BaseSection>

    );
});
