import 'semlookp-widgets';
import {TitleWidgetProps} from "../../../../utils/types";
import {TitleWidgetStoryArgs, TitleWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/TitleWidget/TitleWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'TitleWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: TitleWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div class="euiPanel euiPanel--plain euiPanel--paddingMedium euiCard euiCard--horizontal css-1yzwxdg-euiPanel-grow-m-m-plain-hasShadow" style="margin-bottom: 20px">
    <div id="title_widget_container_${num}"></div>
</div>

<script type="text/javascript">
window['SemLookPWidgets'].createTitle(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        titleText:"${args.titleText}",
        thingType:"${args.thingType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
    },
    document.querySelector('#title_widget_container_${num}')
)
</script>
        `
    },
    argTypes: TitleWidgetStoryArgTypes,
    args: TitleWidgetStoryArgs
}

export {
    TitleWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "root/src/components/widgets/MetadataWidget/TitleWidget/TitleWidgetStories";
