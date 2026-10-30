import type { Meta, StoryObj } from "@storybook/react-vite";
import { MappingDetailWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { MappingDetailDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { MappingDetailWidget } from "@ts4nfdi/terminology-service-suite/src/components/widgets/MappingDetailWidget/MappingDetailWidget";
import {
  MappingDetailWidgetStoryArgs_Rec_B_2000,
  MappingDetailWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MappingDetailWidget/MappingDetailWidgetStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<MappingDetailWidgetProps> = {
  title: "Mapping/MappingDetailWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MappingDetailDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: MappingDetailWidgetProps) => {
    const num = getIncNum();

    return `
<div id="mapping_detail_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMappingDetail(
    {
        api:"${args.api}",
        source:"${args.source}",
        target:"${args.target}",
        MappingDetailBackgroundColor:"${args.MappingDetailBackgroundColor}"
    },
    document.querySelector('#mapping_detail_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: MappingDetailWidgetStoryArgTypes,
  args: MappingDetailWidgetStoryArgs_Rec_B_2000,
} satisfies Meta<typeof MappingDetailWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rec_B_2000: Story = {
  args: MappingDetailWidgetStoryArgs_Rec_B_2000,
};
