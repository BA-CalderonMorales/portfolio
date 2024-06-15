import React from "react";

// Home Page Components

import { HomeContent } from "@/app/components/Views/Content/Home/HomeContent";

// Home Page Records 

const homeRecords: Record<string, React.JSX.Element> = {};

homeRecords['HomeContent'] = <HomeContent />;

export {
    homeRecords
};