import {ColorsWidget} from "./ColorsWidget";
import {Meta, StoryObj} from "@storybook/react-vite";


const meta = {
    title: "STYLE/ColorsWidget",
    component: ColorsWidget,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "A showcase of the new custom color palettes"
            }
        }
    },
} satisfies Meta<typeof ColorsWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ColorsWidgetPrimary = {}