import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  MappingListWidget,
  MappingListWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import { MappingListDetailDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  MappingListWidgetStoryArgs_B14C4A,
  MappingListWidgetStoryArgs_Energy,
  MappingListWidgetStoryArgs_Ges_C_2700,
  MappingListWidgetStoryArgs_OEO_00000150,
  MappingListWidgetStoryArgs_Q259745,
  MappingListWidgetStoryArgs_Rec_B_2000,
  MappingListWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MappingListWidget/MappingListWidgetStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<MappingListWidgetProps> = {
  title: "Mapping/MappingListWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MappingListDetailDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: MappingListWidgetProps) => {
    const num = getIncNum();

    return `
<div id="mapping_list_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMappingList(
    {
        api:"${args.api}",
        source:"${args.source}",
        rowColor:"${args.rowColor}",
        MappingDetailBackgroundColor:"${args.MappingDetailBackgroundColor}"
    },
    document.querySelector('#mapping_list_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: MappingListWidgetStoryArgTypes,
  args: MappingListWidgetStoryArgs_OEO_00000150,
} satisfies Meta<typeof MappingListWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OEO_00000150: Story = {
  args: MappingListWidgetStoryArgs_OEO_00000150,
};
export const Q259745: Story = { args: MappingListWidgetStoryArgs_Q259745 };
export const Energy: Story = { args: MappingListWidgetStoryArgs_Energy };
export const Rec_B_2000: Story = {
  args: MappingListWidgetStoryArgs_Rec_B_2000,
};
export const Ges_C_2700: Story = {
  args: MappingListWidgetStoryArgs_Ges_C_2700,
};
export const B14C4A: Story = { args: MappingListWidgetStoryArgs_B14C4A };
