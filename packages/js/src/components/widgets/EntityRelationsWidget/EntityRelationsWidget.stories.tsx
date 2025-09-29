import {
  AllValuesFromArgs,
  AxiomsArgs,
  commonEntityRelationsWidgetPlay,
  DifferentFromArgs,
  EntityRelationsWidgetStoryArgs,
  EntityRelationsWidgetStoryArgTypes,
  EquivalentToArgs,
  InstancesArgs,
  InverseOfArgs,
  NavigateToEBIPageArgs,
  PropertyChainArgs,
  QualifiedCardinalityArgs,
  SingleValueArgs,
  SubEntityOfArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityRelationsWidget/EntityRelationsWidgetStories";
import "./index";
import { EntityRelationsDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  EntityRelationsWidget,
  EntityRelationsWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<EntityRelationsWidgetProps> = {
  title: "Additional Entity Metadata/EntityRelationsWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityRelationsDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: EntityRelationsWidgetProps) => {
    const num = getIncNum();

    return `
<div id="autocomplete_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityRelations(
    {
        api:"${args.api}",
        entityType:"${args.entityType}",
        ontologyId:"${args.ontologyId}",
        iri:"${args.iri}",
        hasTitle:${args.hasTitle},
        showBadges:${args.showBadges},
        parameter:"${args.parameter}",
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate}
    },
    document.querySelector('#autocomplete_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityRelationsWidgetStoryArgTypes,
  args: EntityRelationsWidgetStoryArgs,
} satisfies Meta<typeof EntityRelationsWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubEntityOf: Story = {
  args: SubEntityOfArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const AllValuesFrom: Story = {
  args: AllValuesFromArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const DifferentFrom: Story = {
  args: DifferentFromArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const EquivalentTo: Story = {
  args: EquivalentToArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const SingleValue: Story = {
  args: SingleValueArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const InverseOf: Story = {
  args: InverseOfArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const PropertyChain: Story = {
  args: PropertyChainArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const Instances: Story = {
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const Axioms: Story = {
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const QualifiedCardinality: Story = {
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay,
};

export const NavigateToEBIPage: Story = {
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay,
};
