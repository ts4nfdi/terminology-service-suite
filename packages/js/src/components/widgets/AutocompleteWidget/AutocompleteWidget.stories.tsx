import './index'
import { AutocompleteDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { AutocompleteWidget, AutocompleteWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import {
  AllowAddingCustomTermsArgs,
  AllowMultipleTermsArgs,
  AutocompleteWidgetStoryArgsHTML,
  AutocompleteWidgetStoryArgTypes, commonAutocompleteWidgetPlay,
  HideApiSourceApiGatewayArgs,
  SubtreeDirectAndIndirectSubtypesArgs,
  SubtreeDirectSubtypesArgs,
  TibDataPlantArgs,
  TibNFDI4CHEMArgs,
  UseAPIGatewayWithOLSArgs,
  UseAPIGatewayWithOntoPortalArgs,
  UseAPIGatewayWithSkosmosArgs,
  WithCustomValueArgs, WithDefaultsArgs,
  WithDefaultsCompactArgs,
  WithDescriptionAndShortFormArgs,
  WithGermanInputArgs,
  WithInvalidValueArgs,
  WithLongFormArgs,
  WithMultipleValuesArgs,
  WithPreselectedMultipleValuesOLS4Args,
  WithPreselectedValueAndUnresolvedIriOLS3Args,
  WithPreselectedValueOLS4v2Args
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/AutocompleteWidget/AutocompleteWidgetStories";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}

const meta = {
  title: "Search/AutocompleteWidget",
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: AutocompleteDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: AutocompleteWidgetProps) => {
    const num = getIncNum();
    return `
  <div id="autocomplete_widget_container_${num}"></div>
  
  <script type="text/javascript">
  window['ts4nfdiWidgets'].createAutocomplete(
    {
        api:"${args.api}",
        parameter:"${args.parameter}",
        selectionChangedEvent:${args.selectionChangedEvent
      .toString()
      .replace(/(\r\n|\n|\r)/gm, "")},
        preselected:${JSON.stringify(args.preselected).replace(
      /"([^"]+)":/g,
      "$1:",
    )},
        placeholder:"${args.placeholder}",
        hasShortSelectedLabel:${args.hasShortSelectedLabel},
        allowCustomTerms:${args.allowCustomTerms},
        singleSelection:${args.singleSelection},
        ts4nfdiGateway:${args.ts4nfdiGateway},
        singleSuggestionRow:${args.singleSuggestionRow},
        showApiSource:${args.showApiSource},
        className: "${args.className}"
    },
    document.querySelector('#autocomplete_widget_container_${num}')
  )
  </script>
        `;
  },
  argTypes: AutocompleteWidgetStoryArgTypes,
  args: AutocompleteWidgetStoryArgsHTML,
} satisfies Meta<typeof AutocompleteWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithDefaults: Story = {
  args: WithDefaultsArgs,
}

export const UseAPIGatewayWithOLS: Story = {
  args: UseAPIGatewayWithOLSArgs,
};

export const UseAPIGatewayWithOntoPortal: Story = {
  args: UseAPIGatewayWithOntoPortalArgs,
};

export const UseAPIGatewayWithSkosmos: Story = {
  args: UseAPIGatewayWithSkosmosArgs,
};

export const HideApiSourceApiGateway: Story = {
  args: HideApiSourceApiGatewayArgs,
};

export const WithDefaultsCompact: Story = {
  args: WithDefaultsCompactArgs,
};

export const WithPreselectedValueOLS4v2: Story = {
  args: WithPreselectedValueOLS4v2Args,
};

export const WithPreselectedValueAndUnresolvedIriOLS3: Story = {
  args: WithPreselectedValueAndUnresolvedIriOLS3Args
};

export const WithPreselectedMultipleValuesOLS4: Story = {
  args: WithPreselectedMultipleValuesOLS4Args,
};

export const WithCustomValue: Story = {
  args: WithCustomValueArgs,
};

export const WithInvalidValue: Story = {
  args: WithInvalidValueArgs,
};

export const WithGermanInput: Story = {
  args: WithGermanInputArgs,
};

export const WithDescriptionAndShortForm: Story = {
  args: WithDescriptionAndShortFormArgs,
};

export const WithLongForm: Story = {
  args: WithLongFormArgs,
};

export const AllowAddingCustomTerms: Story = {
  args: AllowAddingCustomTermsArgs,
};

export const AllowMultipleTerms: Story = {
  args: AllowMultipleTermsArgs,
};

export const WithMultipleValues: Story = {
  args: WithMultipleValuesArgs,
};

export const TibNFDI4CHEM: Story = {
  args: TibNFDI4CHEMArgs,
};

export const TibDataPlant: Story = {
  args: TibDataPlantArgs,
};

export const SubtreeDirectSubtypes: Story = {
  args: SubtreeDirectSubtypesArgs,
};

export const SubtreeDirectAndIndirectSubtypes: Story = {
  args: SubtreeDirectAndIndirectSubtypesArgs,
};