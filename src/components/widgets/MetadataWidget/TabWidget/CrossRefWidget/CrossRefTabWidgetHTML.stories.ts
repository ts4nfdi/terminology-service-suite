import 'semlookp-widgets';
import {CrossRefWidgetStoryArgs, CrossRefWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefWidgetStories";
import {CrossRefWidgetProps} from "../../../../../utils/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'CrossRefTabWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: CrossRefWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="cross_ref_tab_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createCrossRefTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy}
    },
    document.querySelector('#cross_ref_tab_widget_container_${num}')
)
</script>
        `
    },
    argTypes: CrossRefWidgetStoryArgTypes,
    args: CrossRefWidgetStoryArgs
}

export {
    CrossRefTabWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "root/src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefWidgetStories"
