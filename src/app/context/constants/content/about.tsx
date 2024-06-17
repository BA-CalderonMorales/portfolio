import React from "react";

// About Page Components

import { AboutContentAlpha } from "@/app/components/Views/Content/About/AboutContentAlpha";
import { AboutContentBravo } from "@/app/components/Views/Content/About/AboutContentBravo";

// About Page Records

const aboutRecords: Record<string, React.JSX.Element> = {};

aboutRecords['AboutRecordAlpha'] = <AboutContentAlpha />;
aboutRecords['AboutRecordBravo'] = <AboutContentBravo />;

export {
    aboutRecords
};