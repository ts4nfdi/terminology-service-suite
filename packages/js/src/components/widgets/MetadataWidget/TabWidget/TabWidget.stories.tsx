import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  TabWidget,
  TabWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import { TabDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  commonTabWidgetPlay,
  DefaultArgs,
  DefiningOntologyUnavailableArgs,
  HiddenTabsArgs,
  SelectingDefiningOntologyArgs,
  TabWidgetLargeArgs,
  TabWidgetOLS3Args,
  TabWidgetOLS4V1Args,
  TabWidgetOLS4V2Args,
  TabWidgetStoryArgs,
  TabWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/TabWidgetStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<TabWidgetProps> = {
  title: "Additional Entity Metadata/TabWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TabDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: TabWidgetProps) => {
    const num = getIncNum();

    return `
<div id="tab_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        altNamesTab: ${args.altNamesTab},
        hierarchyTab: ${args.hierarchyTab},
        crossRefTab: ${args.crossRefTab},
        terminologyInfoTab: ${args.terminologyInfoTab},
        graphViewTab: ${args.graphViewTab},
        termDepictionTab: ${args.termDepictionTab},
        hierarchyPreferredRoots:${args.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${args.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${args.hierarchyShowSiblingsOnInit},
        hierarchyWrap:${args.hierarchyWrap},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate},
        className:"${args.className}"
    },
    document.querySelector('#tab_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: TabWidgetStoryArgTypes,
  args: TabWidgetStoryArgs,
} satisfies Meta<typeof TabWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DefaultArgs,
  play: commonTabWidgetPlay,
};

export const TabWidgetOLS3: Story = {
  name: "OLS3",
  args: TabWidgetOLS3Args,
  play: commonTabWidgetPlay,
};

export const TabWidgetOLS4V1: Story = {
  name: "OLS4 V1",
  args: TabWidgetOLS4V1Args,
  play: commonTabWidgetPlay,
};

export const TabWidgetOLS4V2: Story = {
  name: "OLS4 V2",
  args: TabWidgetOLS4V2Args,
  play: commonTabWidgetPlay,
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonTabWidgetPlay,
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonTabWidgetPlay,
};

export const TabWidgetLarge: Story = {
  args: TabWidgetLargeArgs,
  play: commonTabWidgetPlay,
};

export const HiddenTabs: Story = {
  args: HiddenTabsArgs,
  play: commonTabWidgetPlay,
};
