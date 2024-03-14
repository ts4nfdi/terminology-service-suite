import 'semlookp-widgets';
import {HierarchyWidgetDeprecatedStoryArgs, HierarchyWidgetDeprecatedStoryArgTypes} from "root/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidgetDeprecated/HierarchyWidgetDeprecatedStories";
import {HierarchyWidgetDeprecatedProps} from "./HierarchyWidgetDeprecated";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'HierarchyWidgetDeprecated',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: HierarchyWidgetDeprecatedProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="hierarchy_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchyDeprecated(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
    },
    document.querySelector('#hierarchy_widget_container_${num}')
)
</script>
        `
    },
    argTypes: HierarchyWidgetDeprecatedStoryArgTypes,
    args: HierarchyWidgetDeprecatedStoryArgs
}

export {
    HierarchyWidgetDeprecated1
} from "root/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidgetDeprecated/HierarchyWidgetDeprecatedStories"
