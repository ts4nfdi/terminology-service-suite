import 'semlookp-widgets';
import {TitleWidgetProps} from "../../../../app/types";
import {TitleWidgetStoryArgs, TitleWidgetStoryArgTypes} from "./TitleWidgetStories";
import {TitleDescription} from "../../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'TitleWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: TitleDescription
            }
        }
    },
    render: (args: TitleWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="title_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTitle(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        titleText:"${args.titleText}",
        thingType:"${args.thingType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        defaultValue:"${args.defaultValue}",
        className:"${args.className}"
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
    TitleWidgetDefault,
    TitleWidgetWithTitleText,
    IncorrectIriWithDefaultValue,
    IncorrectIriWithoutDefaultValue,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    TitleWidgetWithStyles
} from "./TitleWidgetStories";
