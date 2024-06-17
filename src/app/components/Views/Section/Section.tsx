import React, { Fragment } from "react";
import { observer } from "mobx-react";
import { Section as SectionType } from "../../ViewModels/SectionViewModel";

interface SectionProps {

    viewModel?: SectionType

}

export const Section = observer((props: SectionProps): React.JSX.Element => {

    if (!props.viewModel) return (<section></section>);

    let sectionWrapperStyles = props.viewModel?.sectionWrapperStyleOverrides ?? "sectionWrapper card";
    
    let sectionHeaderStyles = props.viewModel?.sectionHeaderStyleOverrides ?? "sectionHeader";

    return (

        <Fragment>

            {typeof props.viewModel.content === 'object' ? (

                Object.values(props.viewModel.content).map((Component: React.JSX.Element, index) => {

                    return (
                        <div key={index} className={sectionWrapperStyles}>

                            {index === 0 ? (

                                <section key={index} id={props.viewModel?.id}>

                                    {!props.viewModel?.isHero && (
                                        <h2 className={sectionHeaderStyles}>{props.viewModel?.title}</h2>
                                    )}
                                
                                    {Component}

                                </section>

                            ) : (

                                <section key={index} id={props.viewModel?.id} className={sectionWrapperStyles}>
                                
                                    {Component}

                                </section>

                            )}

                        </div>
                    );

                })


            ) : (

                <section id={props.viewModel.id} className={sectionWrapperStyles}>

                    {!props.viewModel.isHero && (
                        <h2 className={sectionHeaderStyles}>{props.viewModel.title}</h2>
                    )}

                    {typeof props.viewModel.content === 'string' && (
                        <p className="sectionParagraph">{props.viewModel.content}</p>
                    )}

                </section>

            )} 

        </Fragment>


    );

});