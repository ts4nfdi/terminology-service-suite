import {
  EntityDefinedByWidgetStoryArgs,
  EntityDefinedByWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityDefinedByWidget/EntityDefinedByWidgetStories";
import './index'
import { EntityDefinedByDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { EntityDefinedByWidgetProps } from "@ts4nfdi/terminology-service-suite/src";


let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Additional Entity Metadata/EntityDefinedByWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityDefinedByDescription,
      },
    },
  },
  render: (args: EntityDefinedByWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="entity_defined_by_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityDefinedBy(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        onNavigateToOntology:${args.onNavigateToOntology},
        className:${args.className}
    },
    document.querySelector('#entity_defined_by_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityDefinedByWidgetStoryArgTypes,
  args: EntityDefinedByWidgetStoryArgs,
};

export {
  v2ApiONS,
  emptyInDefiningOntology,
  legacyApi,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityDefinedByWidget/EntityDefinedByWidgetStories";