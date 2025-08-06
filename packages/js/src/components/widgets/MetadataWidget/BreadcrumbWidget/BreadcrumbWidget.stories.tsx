import {
  BreadcrumbWidgetDefaultArgs,
  BreadcrumbWidgetStoryArgs,
  BreadcrumbWidgetStoryArgTypes,
  commonBreadcrumbWidgetPlay, CustomColorsArgs, CustomStyleArgs,
  DefiningOntologyUnavailableArgs, EntityInputArgs, ErrorBreadcrumbWidgetArgs,
  SelectingDefiningOntologyArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetStories";
import './index'
import { BreadcrumbDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { BreadcrumbWidget, BreadcrumbWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<BreadcrumbWidgetProps> = {
  title: "Additional Entity Metadata/BreadcrumbWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: BreadcrumbDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: BreadcrumbWidgetProps) => {
    const num = getIncNum();

    return `
<div id="breadcrumb_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createBreadcrumb(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        colorFirst:"${args.colorFirst}",
        colorSecond:"${args.colorSecond}",
        parameter:"${args.parameter}",
        onNavigateToOntology:${args.onNavigateToOntology},
        className: "${args.className}"
    },
    document.querySelector('#breadcrumb_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: BreadcrumbWidgetStoryArgTypes,
  args: BreadcrumbWidgetStoryArgs,
} satisfies Meta<typeof BreadcrumbWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BreadcrumbWidgetDefault: Story = {
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
};

export const ErrorBreadcrumbWidget: Story = {
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
};

export const CustomColors: Story = {
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
};

export const CustomStyle: Story = {
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
};

export const EntityInput: Story = {
  args: EntityInputArgs,
  play: commonBreadcrumbWidgetPlay
};
