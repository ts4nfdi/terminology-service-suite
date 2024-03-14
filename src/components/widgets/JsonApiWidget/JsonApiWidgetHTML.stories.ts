import 'semlookp-widgets';
import {JsonApiWidgetProps} from "../../../utils/types";
import {JsonApiWidgetStoryArgs, JsonApiWidgetStoryArgTypes} from "root/src/components/widgets/JsonApiWidget/JsonApiWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'JsonApiWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: JsonApiWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div class="euiPanel euiPanel--plain euiPanel--paddingMedium euiCard euiCard--horizontal css-1yzwxdg-euiPanel-grow-m-m-plain-hasShadow" style="margin-bottom: 20px">
    <div id="json_api_widget_container_${num}"></div>
</div>

<script type="text/javascript">
window['SemLookPWidgets'].createJsonApi(
    {
        apiQuery:"${args.apiQuery}",
        buttonText:"${args.buttonText}",
        buttonSize:"${args.buttonSize}",
    },
    document.querySelector('#json_api_widget_container_${num}')
)
</script>
        `
    },
    argTypes: JsonApiWidgetStoryArgTypes,
    args: JsonApiWidgetStoryArgs
}

export {
    JsonApiWidget1
} from "root/src/components/widgets/JsonApiWidget/JsonApiWidgetStories"