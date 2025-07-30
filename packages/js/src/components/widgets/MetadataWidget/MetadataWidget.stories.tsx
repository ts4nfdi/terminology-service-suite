import {
  commonMetadataWidgetPlay, DefinedByAlsoAppearsInWidgetsArgs, DefiningOntologyUnavailableArgs, HiddenTabsArgs,
  MetadataWidget1Args,
  MetadataWidgetStoryArgs,
  MetadataWidgetStoryArgTypes, OLS3Args, OLS4V1Args, OLS4V2Args, SelectingDefiningOntologyArgs, TermAsLinkArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/MetadataWidgetStories";
import './index'
import { MetadataDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { MetadataWidget, MetadataWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react";


let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<MetadataWidgetProps> = {
  title: "Entity Metadata/MetadataWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MetadataDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: MetadataWidgetProps) => {
    const num = getIncNum();

    return `
<div id="metadata_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMetadata(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        termLink: "${args.termLink}",
        altNamesTab: ${args.altNamesTab},
        hierarchyTab: ${args.hierarchyTab},
        crossRefTab: ${args.crossRefTab},
        terminologyInfoTab: ${args.terminologyInfoTab},
        graphViewTab: ${args.graphViewTab},
        termDepictionTab: ${args.termDepictionTab},
        hierarchyPreferredRoots:${args.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${args.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${args.hierarchyShowSiblingsOnInit},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate},
        className:"${args.className}"
    },
    document.querySelector('#metadata_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: MetadataWidgetStoryArgTypes,
  args: MetadataWidgetStoryArgs,
} satisfies Meta<typeof MetadataWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MetadataWidget1: Story = {
  name: "Metadata Widget",
  args: MetadataWidget1Args,
  play: commonMetadataWidgetPlay
};

export const OLS3: Story = {
  name: "OLS3",
  args: OLS3Args,
  play: commonMetadataWidgetPlay
};

export const OLS4V1: Story = {
  name: "OLS4 V1",
  args: OLS4V1Args,
  play: commonMetadataWidgetPlay
};

export const OLS4V2: Story = {
  name: "OLS4 V2",
  args: OLS4V2Args,
  play: commonMetadataWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonMetadataWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonMetadataWidgetPlay
};

export const DefinedByAlsoAppearsInWidgets: Story = {
  args: DefinedByAlsoAppearsInWidgetsArgs,
  play: commonMetadataWidgetPlay
};

export const HiddenTabs: Story = {
  name: "Hidden Tabs",
  args: HiddenTabsArgs,
  play: commonMetadataWidgetPlay
};

export const TermAsLink: Story = {
  args: TermAsLinkArgs,
  play: commonMetadataWidgetPlay
};
