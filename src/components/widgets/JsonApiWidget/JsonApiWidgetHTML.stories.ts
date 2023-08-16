import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface JsonApiWidgetProps {
    apiQuery: string;
    buttonText: string;
    buttonSize?: "s" | "m";
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'JsonApiWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div class="euiPanel euiPanel--plain euiPanel--paddingMedium euiCard euiCard--horizontal css-1yzwxdg-euiPanel-grow-m-m-plain-hasShadow" style="margin-bottom: 20px">
    <div id="json_api_widget_container_${num}"></div>
</div>

<script type="text/javascript">
window['SemLookPWidgets'].createJsonApi(
    {
        apiQuery:"${args.apiQuery}",
        buttonText:"${args.buttonText}",
        buttonSize:"${args.buttonSize}",
    },
    document.querySelector('#json_api_widget_container_${num}')
)
</script>
        `
    },
    argTypes: {
        apiQuery: {
            description: "The API query whose response JSON should be displayed on click.",
            type: "string",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        buttonText: {
            description: "The text displayed on the button.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        buttonSize: {
            description:
                "Size of the button",
            control: {
                type: "radio",
            },
            options: [
                "s",
                "m",
            ],
            table: {
                type: {
                    summary: "union",
                },
            }
        },
    },
} satisfies Meta<JsonApiWidgetProps>;

export default meta;
type Story = StoryObj<JsonApiWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const JsonApiWidget1: Story = {
    args: {
        apiQuery: "https://semanticlookup.zbmed.de/ols/api/ontologies/atc",
        buttonText: "show JSON",
        buttonSize: "m",
    },
};