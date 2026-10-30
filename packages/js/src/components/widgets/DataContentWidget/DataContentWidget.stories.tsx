import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DataContentWidget,
  DataContentWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import { DataContentDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  commonDataContentWidgetPlay,
  DataContentCollectionWithoutPropertiesArgs,
  DataContentFAIRagroCollectionArgs,
  DataContentWidgetStoryArgs,
  DataContentWidgetStoryArgTypes,
  ErrorDataContentWidgetArgs,
  NFDI4HealthDataContentWidgetArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/DataContentWidget/DataContentWidgetStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<DataContentWidgetProps> = {
  title: "Terminology Service/DataContentWidget",
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
<div id="data_content_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDataContent(
    {
      api:"${args.api}",
      parameter:"${args.parameter}",
      collectionId:"${args.collectionId ?? ""}",
    },
    document.querySelector('#data_content_widget_container_${num}')
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
  name: "SemLookP NFDI4Health",
  args: NFDI4HealthDataContentWidgetArgs,
  play: commonDataContentWidgetPlay,
};

export const ErrorDataContentWidget: Story = {
  name: "Wrong API URL",
  args: ErrorDataContentWidgetArgs,
  play: commonDataContentWidgetPlay,
};

export const DataContentFAIRagroCollection: Story = {
  name: "FAIRagro Collection",
  args: DataContentFAIRagroCollectionArgs,
  play: commonDataContentWidgetPlay,
};

export const DataContentCollectionWithoutProperties: Story = {
  name: "Collection without properties",
  args: DataContentCollectionWithoutPropertiesArgs,
  play: commonDataContentWidgetPlay,
};
