import { OntologyEntityListWidget } from "./OntologyEntityListWidget";
import {OntologyEntityListWidgetStoryArgs, OntologyEntityListWidgetStoryArgTypes} from "./OntologyEntityListWidgetStories";

export default {
    title: "OntologyEntityListWidget",
    component: OntologyEntityListWidget,
    parameters: {
        layout: "centered",
    },
    argTypes: OntologyEntityListWidgetStoryArgTypes,
    args: OntologyEntityListWidgetStoryArgs
};

export {
    OLS4V1Class
} from "./OntologyEntityListWidgetStories"


