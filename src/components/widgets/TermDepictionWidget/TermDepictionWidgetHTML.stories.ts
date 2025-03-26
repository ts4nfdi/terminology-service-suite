import "ts4nfdi-widgets";
import { TermDepictionWidgetProps } from "../../../app/types";
import {
  TermDepictionWidgetStoryArgs,
  TermDepictionWidgetStoryArgTypes,
} from "./TermDepictionWidgetStories";
import { TermDepictionDescription } from "../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Additional Entity Metadata/TermDepictionWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TermDepictionDescription,
      },
    },
  },
  render: (args: TermDepictionWidgetProps) => {
    const num = getIncNum();

    return `
<div id="term_depiction_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDepiction(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",                
        useLegacy:${args.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: TermDepictionWidgetStoryArgTypes,
  args: TermDepictionWidgetStoryArgs,
};

export { TermDepictionWidgetExample, TermDepictionWidget3D } from "./TermDepictionWidgetStories";
