import React from "react";
import { observer } from "mobx-react";
import { Section as SectionType } from "../../ViewModels/SectionViewModel";

export const Section = observer(({viewModel}: { viewModel: SectionType }): React.JSX.Element => {

    if (!viewModel) return (<section></section>);

    let sectionHeaderStyles = viewModel.sectionHeaderStyleOverrides ?? "sectionHeader";

    return (

        <section id={viewModel.id} className="section">

            {!viewModel.isHero && (
                <h2 className={sectionHeaderStyles}>{viewModel.title}</h2>
            )}

            {typeof viewModel.content === 'string' && (
                <p className="sectionParagraph">{viewModel.content}</p>
            )}

            {typeof viewModel.content === 'function' && (
                viewModel.content()
            )}

            {typeof viewModel.content === 'object' && (
                Object.values(viewModel.content).map((Component, index) => {

                    return {
                        ...Component,
                        key: index
                    }

                })
            )}

        </section>

    );

});