import {
  DescriptionWidgetStoryArgs,
  DescriptionWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidgetStories";
import './index'
import { DescriptionDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { DescriptionWidgetProps } from "@ts4nfdi/terminology-service-suite/src";

let counter = 0;

function getIncNum() {
  return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Entity Metadata/DescriptionWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DescriptionDescription,
      },
    },
  },
  render: (args: DescriptionWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="description_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDescription(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        descText:"${args.descText}",
        thingType:"${args.thingType}",
        parameter:"${args.parameter}",
        color:"${args.color}",
        useLegacy:"${args.useLegacy}",
        className:"${args.className}",
        
    },
    document.querySelector('#description_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: DescriptionWidgetStoryArgTypes,
  args: DescriptionWidgetStoryArgs,
};

export {
  DescriptionWidget1,
  SelectingDefiningOntology,
  DefiningOntologyUnavailable,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidgetStories";
