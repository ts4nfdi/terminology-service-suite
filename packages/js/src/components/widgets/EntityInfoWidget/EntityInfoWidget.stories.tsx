import {
  commonEntityInfoWidgetPlay,
  EntityInfoWidgetStoryArgs,
  EntityInfoWidgetStoryArgTypes,
  IndividualInfoWidgetArgs,
  InfoWidgetBadgesArgs,
  InfoWidgetDomainArgs,
  InfoWidgetPropertyAssertionArgs, InfoWidgetPropertyCharacteristicsArgs,
  InfoWidgetRangeArgs, NavigateToEBIPageArgs,
  OptionalEntityTypeLegacyAPIArgs,
  PropertyInfoWidgetArgs,
  TermInfoWidgetArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityInfoWidget/EntityInfoWidgetStories";
import { EntityInfoDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  DataContentWidgetProps,
  EntityInfoWidget,
  EntityInfoWidgetProps
} from "@ts4nfdi/terminology-service-suite/src";
import './index'
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<EntityInfoWidgetProps> = {
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
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: EntityInfoWidgetProps) => {
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
} satisfies Meta<typeof EntityInfoWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermInfoWidget: Story = {
  args: TermInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
};

export const PropertyInfoWidget: Story = {
  args: PropertyInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
};

export const IndividualInfoWidget: Story = {
  args: IndividualInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetBadges: Story = {
  args: InfoWidgetBadgesArgs,
  play: commonEntityInfoWidgetPlay
};

export const OptionalEntityTypeLegacyAPI: Story = {
  args: OptionalEntityTypeLegacyAPIArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetDomain: Story = {
  args: InfoWidgetDomainArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetRange: Story = {
  args: InfoWidgetRangeArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetPropertyAssertion: Story = {
  args: InfoWidgetPropertyAssertionArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetPropertyCharacteristics: Story = {
  args: InfoWidgetPropertyCharacteristicsArgs,
  play: commonEntityInfoWidgetPlay
};

export const NavigateToEBIPage: Story = {
  args: NavigateToEBIPageArgs,
  play: commonEntityInfoWidgetPlay
};