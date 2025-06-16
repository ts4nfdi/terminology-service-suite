import { DataContentWidget, DataContentWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import {
  DataContentWidgetStoryArgs,
  DataContentWidgetStoryArgTypes,
  ErrorDataContentWidgetArgs,
  NFDI4HealthDataContentWidgetArgs,
  SafetyDataContentWidgetArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/DataContentWidget/DataContentWidgetStories";
import { DataContentDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import './index'
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, waitFor } from "@storybook/test";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<DataContentWidgetProps> = {
  title: "Search/DataContentWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DataContentDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: DataContentWidgetProps) => {
    const num = getIncNum();
    return `
<div id="search_bar_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDataContent(
    {
      api:"${args.api}",
      parameter:"${args.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: DataContentWidgetStoryArgTypes,
  args: DataContentWidgetStoryArgs,
} satisfies Meta<typeof DataContentWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NFDI4HealthDataContentWidget: Story = {
  args: NFDI4HealthDataContentWidgetArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('data-content');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const SafetyDataContentWidget: Story = {
  args: SafetyDataContentWidgetArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('data-content');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const ErrorDataContentWidget: Story = {
  args: ErrorDataContentWidgetArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('data-content');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};