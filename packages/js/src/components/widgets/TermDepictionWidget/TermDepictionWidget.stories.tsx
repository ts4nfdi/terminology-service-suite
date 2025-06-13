import {
  TermDepictionWidgetStoryArgs,
  TermDepictionWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/TermDepictionWidget/TermDepictionWidgetStories";
import './index'
import { TermDepictionDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { TermDepictionWidgetProps } from "@ts4nfdi/terminology-service-suite/src";

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

export {
  TermDepictionWidgetExample,
  TermDepictionWidget3D,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/TermDepictionWidget/TermDepictionWidgetStories";
