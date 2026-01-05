import {
  GraphViewWidgetStoryArgTypes,
  GraphViewWidgetStoryArgs,
  commonGraphViewWidgetPlay,
  ChebiWaterArgs,
  ChebiWaterRootWalkArgs,
  ChebiCaffeineHierarchyArgs,
  WithOnNodeDoubleClickCallbackArgs,
  ChebiCaffeineHierarchyWithComparisonArgs,
  ChebiIonArgs,
  ChebiIonComparisonArgs,
  ChebiIonRootWalkArgs,
  ChebiIonAndIonRadicalWithComparisonArgs,
  GraphWithGermanLabelArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/GraphViewWidget/GraphViewWidgetStories";
import "./index";
import { GraphViewDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  GraphViewWidget,
  GraphViewWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<GraphViewWidgetProps> = {
  title: "Hierarchy and Graph/GraphViewWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: GraphViewDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: GraphViewWidgetProps) => {
    const num = getIncNum();

    return `
<div id="graph_view_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createGraphView(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",                
        rootWalk: ${args.rootWalk},
        className:${args.className},
        hierarchy: ${args.hierarchy},
        targetIri: "${args.targetIri}",
        onNodeClick: ${args.onNodeClick},
        edgeLabel: ${args.edgeLabel},
        parameter: "${args.parameter}",
    },
    document.querySelector('#graph_view_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: GraphViewWidgetStoryArgTypes,
  args: GraphViewWidgetStoryArgs,
} satisfies Meta<typeof GraphViewWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ChebiIon: Story = {
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay,
};

export const ChebiIonComparison: Story = {
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};
export const ChebiIonRootWalk: Story = {
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiWater: Story = {
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiWaterRootWalk: Story = {
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiCaffeineHierarchy: Story = {
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const WithOnNodeDoubleClickCallback: Story = {
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiCaffeineHierarchyWithComparison: Story = {
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiIonAndIonRadicalWithComparison: Story = {
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const GraphWithGermanLable: Story = {
  args: GraphWithGermanLabelArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

