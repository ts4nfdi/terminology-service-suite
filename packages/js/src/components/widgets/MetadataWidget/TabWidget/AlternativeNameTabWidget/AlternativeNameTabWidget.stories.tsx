import {
  AlternativeNameTabWidgetStoryArgs,
  AlternativeNameTabWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidgetStories";
import './index'
import { AlternativeNameTabDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { AlternativeNameTabWidgetProps } from "@ts4nfdi/terminology-service-suite/src";


let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Entity Metadata/AlternativeNameTabWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: AlternativeNameTabDescription,
      },
    },
  },
  render: (args: AlternativeNameTabWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="alternative_name_tab_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAlternativeNameTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        className:"${args.className}"
    },
    document.querySelector('#alternative_name_tab_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: AlternativeNameTabWidgetStoryArgTypes,
  args: AlternativeNameTabWidgetStoryArgs,
};

export {
  AlternativeNameTabWidget1,
  SelectingDefiningOntology,
  DefiningOntologyUnavailable,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidgetStories";