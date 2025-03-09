import { Content } from "../Content";
import { observer } from "mobx-react";
import Link from "next/link";
import React, { useContext } from "react";
import { AppViewModel } from "@/app/components/ViewModels/AppViewModel";
import { AppContext } from "@/app/context";

export const ContactContent = observer((): React.JSX.Element => {

    const { appViewModel } = useContext(AppContext);

    return (

        <Content>

            <div className="contact-info">

                <div>


                </div>

                <div>

                    <ul>

                        <li>

                            Email

                        </li>

                        <li title='Nothing happening? Open this up in Chrome and try again.'>

                            <a href="mailto:bacm640@gmail.com">Send me an email</a>

                        </li>

                        <li>

                            Social Media

                        </li>

                        <li>

                            <Link href="https://www.linkedin.com/in/bcalderonmorales-cmoe/">LinkedIn</Link>

                        </li>

                        <li>

                            <Link href="https://github.com/BA-CalderonMorales">GitHub</Link>

                        </li>

                    </ul>

                </div>

            </div>

        </Content>

    );

});