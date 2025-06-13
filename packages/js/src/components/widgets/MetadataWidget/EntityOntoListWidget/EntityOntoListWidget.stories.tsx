import {
  EntityOntoListWidgetStoryArgs,
  EntityOntoListWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityOntoListWidget/EntityOntoListWidgetStories";
import './index'
import { EntityOntoListDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { EntityOntoListWidgetProps } from "@ts4nfdi/terminology-service-suite/src";


let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Additional Entity Metadata/EntityOntoListWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityOntoListDescription,
      },
    },
  },
  render: (args: EntityOntoListWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="entity_onto_list_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityOntoList(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        onNavigateToOntology:${args.onNavigateToOntology},
        className:"${args.className}"
    },
    document.querySelector('#entity_onto_list_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityOntoListWidgetStoryArgTypes,
  args: EntityOntoListWidgetStoryArgs,
};

export {
  v2ApiEFO,
  v2ApiONS,
  legacyApi,
  exceedsMaxDisplay,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityOntoListWidget/EntityOntoListWidgetStories";