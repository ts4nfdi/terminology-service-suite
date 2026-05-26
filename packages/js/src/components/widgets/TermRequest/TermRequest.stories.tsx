import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  TermRequest,
  TermRequestProps,
} from "@ts4nfdi/terminology-service-suite/src";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

const meta = {
  title: "Term Request/TermRequest",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: TermRequestProps) => {
    const num = getIncNum();

    return `
<div id="term_request_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTermRequest(
    {
        ontologyRepoUrl:"${args.ontologyRepoUrl}",
    },
    document.querySelector('#term_request_container_${num}')
)
</script>
        `;
  },
  args: {
    ontologyRepoUrl: "https://github.com/ts4nfdi/terminology-service-suite",
  },
} satisfies Meta<typeof TermRequest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermRequestExample: Story = {};
