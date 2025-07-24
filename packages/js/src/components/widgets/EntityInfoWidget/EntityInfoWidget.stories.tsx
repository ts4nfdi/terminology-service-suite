import {
  EntityInfoWidgetStoryArgs,
  EntityInfoWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityInfoWidget/EntityInfoWidgetStories";
import { EntityInfoDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { EntityInfoWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import './index'

let counter = 0;

function getIncNum() {
  return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Additional Entity Metadata/EntityInfoWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityInfoDescription,
      },
    },
  },
  render: (args: EntityInfoWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `        
<div id="entity_info_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityInfo(
    {
        api:"${args.api}",
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        hasTitle:${args.hasTitle},
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate}
    },
    document.querySelector('#entity_info_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityInfoWidgetStoryArgTypes,
  args: EntityInfoWidgetStoryArgs,
};
