import './index'
import { AutocompleteDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { AutocompleteWidget, AutocompleteWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import {
  AllowAddingCustomTermsArgs,
  AllowMultipleTermsArgs,
  AutocompleteWidgetStoryArgsHTML,
  AutocompleteWidgetStoryArgTypes,
  HideApiSourceApiGatewayArgs,
  SubtreeDirectAndIndirectSubtypesArgs,
  SubtreeDirectSubtypesArgs,
  TibDataPlantArgs,
  TibNFDI4CHEMArgs,
  UseAPIGatewayWithOLSArgs,
  UseAPIGatewayWithOntoPortalArgs,
  UseAPIGatewayWithSkosmosArgs,
  WithCustomValueArgs,
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
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, waitFor } from "@storybook/test";

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

export const UseAPIGatewayWithOLS: Story = {
  ...UseAPIGatewayWithOLSArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const UseAPIGatewayWithOntoPortal: Story = {
  ...UseAPIGatewayWithOntoPortalArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const UseAPIGatewayWithSkosmos: Story = {
  ...UseAPIGatewayWithSkosmosArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const HideApiSourceApiGateway: Story = {
  ...HideApiSourceApiGatewayArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithDefaultsCompact: Story = {
  ...WithDefaultsCompactArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithPreselectedValueOLS4v2: Story = {
  ...WithPreselectedValueOLS4v2Args,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithPreselectedValueAndUnresolvedIriOLS3: Story = {
  ...WithPreselectedValueAndUnresolvedIriOLS3Args,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithPreselectedMultipleValuesOLS4: Story = {
  ...WithPreselectedMultipleValuesOLS4Args,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithCustomValue: Story = {
  ...WithCustomValueArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithInvalidValue: Story = {
  ...WithInvalidValueArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithGermanInput: Story = {
  ...WithGermanInputArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithDescriptionAndShortForm: Story = {
  ...WithDescriptionAndShortFormArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithLongForm: Story = {
  ...WithLongFormArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const AllowAddingCustomTerms: Story = {
  ...AllowAddingCustomTermsArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const AllowMultipleTerms: Story = {
  ...AllowMultipleTermsArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const WithMultipleValues: Story = {
  ...WithMultipleValuesArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const TibNFDI4CHEM: Story = {
  ...TibNFDI4CHEMArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const TibDataPlant: Story = {
  ...TibDataPlantArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const SubtreeDirectSubtypes: Story = {
  ...SubtreeDirectSubtypesArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const SubtreeDirectAndIndirectSubtypes: Story = {
  ...SubtreeDirectAndIndirectSubtypesArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};