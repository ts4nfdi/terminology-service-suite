import 'semlookp-widgets';
import {IriWidgetStoryArgs, IriWidgetStoryArgTypes} from "./IriWidgetStories";
import {IriWidgetProps} from "../../../../app/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'IriWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: IriWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="iri_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${args.iri}",
        iriText:"${args.iriText}",
        color:"${args.color}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#iri_widget_container_${num}')
)
</script>
        `
    },
    argTypes: IriWidgetStoryArgTypes,
    args: IriWidgetStoryArgs
}

export {
    IriWidget1
} from "./IriWidgetStories"
