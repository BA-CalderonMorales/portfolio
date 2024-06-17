import React from "react";

// Contact Page Components

import { ContactContent } from "@/app/components/Views/Content/Contact/ContactContent";

// Contact Page Records 

const contactRecords: Record<string, React.JSX.Element> = {};

contactRecords['ContactRecords'] = <ContactContent />;

export {
    contactRecords
};