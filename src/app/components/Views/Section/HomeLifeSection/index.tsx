import { AppContext } from "@/app/context/index";
import { observer } from "mobx-react";
import { BaseSection } from "../shared/BaseSection";
import { HomeLifeSectionViewModel } from "./HomeLifeSectionViewModel";
import { useContext } from "react";
import "./HomeLifeSection.css";

export const HomeLifeSection = observer((): JSX.Element => {

    const { appViewModel } = useContext(AppContext);
    const viewModel = new HomeLifeSectionViewModel(appViewModel);

    return (

        <BaseSection id="life-section" className="home-life-section">

            <div className="section-header">
                <h2>{viewModel.title}</h2>
            </div>

            <div className="section-body">

                {viewModel.content.map((item, index) => (

                    <div key={index} className="life-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>

                ))}

            </div>

        </BaseSection>

    );
});
