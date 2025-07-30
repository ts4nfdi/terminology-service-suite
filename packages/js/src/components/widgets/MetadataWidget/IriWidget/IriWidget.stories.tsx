import {
  commonIriWidgetPlay,
  IriWidget1Args,
  IriWidgetStoryArgs,
  IriWidgetStoryArgTypes, withCopyButtonArgs, withoutExternalIconArgs, withUrlPrefixArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/IriWidget/IriWidgetStories";
import './index'
import { IriDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { IriWidget, IriWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";


let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<IriWidgetProps> = {
  title: "Entity Metadata/IriWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: IriDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: IriWidgetProps) => {
    const num = getIncNum();

    return `
<div id="iri_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createIri(
    {
        iri:"${args.iri}",
        iriText:"${args.iriText}",
        color:"${args.color}",
        externalIcon: ${args.externalIcon},
        urlPrefix:"${args.urlPrefix}",
        copyButton:"${args.copyButton}",
        className:"${args.className}",
    },
    document.querySelector('#iri_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: IriWidgetStoryArgTypes,
  args: IriWidgetStoryArgs,
} satisfies Meta<typeof IriWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IriWidget1: Story = {
  args: IriWidget1Args,
  play: commonIriWidgetPlay
};

export const withoutExternalIcon: Story = {
  args: withoutExternalIconArgs,
  play: commonIriWidgetPlay
};

export const withCopyButton: Story = {
  args: withCopyButtonArgs,
  play: commonIriWidgetPlay
};

export const withUrlPrefix: Story = {
  args: withUrlPrefixArgs,
  play: commonIriWidgetPlay
};
