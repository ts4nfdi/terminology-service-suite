import 'semlookp-widgets';
import { TermDepictionWidgetProps } from '../../../app/types';
import { TermDepictionWidgetStoryArgs, TermDepictionWidgetStoryArgTypes } from './TermDepictionWidgetStories';

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'TermDepictionWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: TermDepictionWidgetProps) => {      
        const num = getIncNum();

        return `
<div id="term_depiction_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDepiction(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",                
        useLegacy:${args.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${num}')
)
</script>
        `
    },
    argTypes: TermDepictionWidgetStoryArgTypes,
    args: TermDepictionWidgetStoryArgs
}

export {TermDepictionWidgetExample} from "./TermDepictionWidgetStories"
