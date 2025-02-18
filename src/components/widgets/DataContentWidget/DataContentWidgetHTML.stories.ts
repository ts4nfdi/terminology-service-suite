import 'semlookp-widgets';
import {DataContentWidgetProps} from "../../../app/types";
import {DataContentWidgetStoryArgs, DataContentWidgetStoryArgTypes} from "./DataContentWidgetStories";
import {DataContentDescription} from "../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Terminology Service/DataContentWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: DataContentDescription
            }
        }
    },
    render: (args: DataContentWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="data_content_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDataContent(
    {
        api:"${args.api}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#data_content_widget_container_${num}')
)
</script>
        `
    },
    argTypes: DataContentWidgetStoryArgTypes,
    args: DataContentWidgetStoryArgs
}

export {
    NFDI4HealthDataContentWidget,
    SafetyDataContentWidget,
    ErrorDataContentWidget
} from "./DataContentWidgetStories"