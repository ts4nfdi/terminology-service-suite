import 'semlookp-widgets';
import { GraphViewWidgetProps } from '../../../app/types';
import { GraphViewWidgetStoryArgTypes, GraphViewWidgetStoryArgs } from "./GraphViewWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'GraphViewWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: GraphViewWidgetProps) => {      
        const num = getIncNum();

        return `
<div id="graph_view_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createGraphView(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",                
        useLegacy:${args.useLegacy},
        rootWalk: ${args.rootWalk},
    },
    document.querySelector('#graph_view_widget_container_${num}')
)
</script>
        `
    },
    argTypes: GraphViewWidgetStoryArgTypes,
    args: GraphViewWidgetStoryArgs
}

export {
  GraphViewWidgetExample,
  RootWalkGraphExample,
  ChebiWater,
  ChebiWaterRootWalk
} from './GraphViewWidgetStories';
