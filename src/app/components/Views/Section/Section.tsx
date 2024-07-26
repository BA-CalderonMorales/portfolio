import React, { Fragment } from "react";
import { observer } from "mobx-react";
import { Section as SectionType } from "@/app/components/ViewModels/SectionViewModel.ts";
import SectionContent from "@/app/components/Views/Section/SectionContent"; // Import the newly named component

interface SectionProps {
    viewModel?: SectionType
}

export const Section = observer((props: SectionProps): React.JSX.Element => {
    if (!props.viewModel) return (<section></section>);

    const sectionWrapperStyles = props.viewModel?.sectionWrapperStyleOverrides ?? "sectionWrapper card";
    const sectionHeaderStyles = props.viewModel?.sectionHeaderStyleOverrides ?? "sectionHeader";

    return (
        <Fragment>
            <div>
                {typeof props.viewModel.content === 'object' ? (
                    Object.values(props.viewModel.content).map((Component, index) => (
                        <SectionContent
                            key={index}
                            id={props.viewModel?.id}
                            content={Component}
                            index={index}
                            isHero={props.viewModel?.isHero}
                            title={props.viewModel?.title}
                            sectionWrapperStyles={sectionWrapperStyles}
                            sectionHeaderStyles={sectionHeaderStyles}
                        />
                    ))
                ) : (
                    <SectionContent 
                        id={props.viewModel?.id}
                        content={props.viewModel?.content}
                        index={0}
                        isHero={props.viewModel?.isHero}
                        title={props.viewModel?.title}
                        sectionWrapperStyles={sectionWrapperStyles}
                        sectionHeaderStyles={sectionHeaderStyles}
                    />
                )}
            </div>
        </Fragment>
    );
});