import {
  commonOntologyInfoWidgetPlay,
  NavigateToEBIPageArgs,
  OntologyInfoWidget1Args,
  OntologyInfoWidget2Args,
  OntologyInfoWidgetOLS4APIArgs,
  OntologyInfoWidgetStoryArgs,
  OntologyInfoWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/OntologyInfoWidget/OntologyInfoWidgetStories";
import "./index";
import { OntologyInfoDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  OntologyInfoWidget,
  OntologyInfoWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<OntologyInfoWidgetProps> = {
  title: "Ontology Metadata/OntologyInfoWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: OntologyInfoDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: OntologyInfoWidgetProps) => {
    const num = getIncNum();

    return `
<div id="ontology_info_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createOntologyInfo(
    {
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        hasTitle:${args.hasTitle},
        showBadges:${args.showBadges},
        width:${args.width},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate},
        className:${args.className}
    },
    document.querySelector('#ontology_info_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: OntologyInfoWidgetStoryArgTypes,
  args: OntologyInfoWidgetStoryArgs,
} satisfies Meta<typeof OntologyInfoWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OntologyInfoWidget1: Story = {
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay,
};

export const OntologyInfoWidget2: Story = {
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay,
};

export const OntologyInfoWidgetOLS4API: Story = {
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay,
};

export const NavigateToEBIPage: Story = {
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay,
};
