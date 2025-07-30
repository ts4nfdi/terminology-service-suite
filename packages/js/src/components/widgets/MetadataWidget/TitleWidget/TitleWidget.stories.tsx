import {
  commonTitleWidgetPlay,
  DefiningOntologyUnavailableArgs,
  IncorrectIriWithoutDefaultValueArgs,
  OntologyTitleArgs, OntologyTitleCustomLinkArgs, OntologyTitleCustomOnNavigateArgs,
  SelectingDefiningOntologyArgs,
  TitleWidgetDefaultArgs,
  TitleWidgetStoryArgs,
  TitleWidgetStoryArgTypes,
  TitleWidgetWithTitleTextArgs, WithoutStylesArgs, WithStylesArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TitleWidget/TitleWidgetStories";
import './index'
import { TitleDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { TitleWidget, TitleWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";


let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<TitleWidgetProps> = {
  title: "Entity Metadata/TitleWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TitleDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: TitleWidgetProps) => {
    const num = getIncNum();

    return `
<div id="title_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTitle(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        titleText:"${args.titleText}",
        thingType:"${args.thingType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        defaultValue:"${args.defaultValue}",
        className:"${args.className}",
        onNavigateTo:${args.onNavigateTo},
        href:"${args.href}",
    },
    document.querySelector('#title_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: TitleWidgetStoryArgTypes,
  args: TitleWidgetStoryArgs,
} satisfies Meta<typeof TitleWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleWidgetDefault: Story = {
  args: TitleWidgetDefaultArgs,
  play: commonTitleWidgetPlay
};

export const OntologyTitle: Story = {
  args: OntologyTitleArgs,
  play: commonTitleWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonTitleWidgetPlay
};

export const TitleWidgetWithTitleText: Story = {
  args: TitleWidgetWithTitleTextArgs,
  play: commonTitleWidgetPlay
};

export const IncorrectIriWithDefaultValue: Story = {
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
};

export const IncorrectIriWithoutDefaultValue: Story = {
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonTitleWidgetPlay
};

export const WithStyles: Story = {
  args: WithStylesArgs,
  play: commonTitleWidgetPlay
};

export const WithoutStyles: Story = {
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay
};

export const OntologyTitleCustomOnNavigate: Story = {
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay
};

export const OntologyTitleCustomLink: Story = {
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay
};
