import { AutocompleteWidget } from "./AutocompleteWidget";
import {
  AutocompleteWidgetStoryArgTypes,
  AutocompleteWidgetStoryArgsReact,
  HideApiSourceApiGatewayArgs,
  SubtreeDirectAndIndirectSubtypesArgs,
  SubtreeDirectSubtypesArgs,
  TibDataPlantArgs,
  TibNFDI4CHEMArgs,
  UseAPIGatewayWithOLSArgs,
  UseAPIGatewayWithOntoPortalArgs,
  UseAPIGatewayWithSkosmosArgs,
  WithDefaultsArgs,
  WithMultipleValuesArgs,
  AllowMultipleTermsArgs,
  AllowAddingCustomTermsArgs,
  WithDescriptionAndShortFormArgs,
  WithLongFormArgs,
  WithInvalidValueArgs,
  WithGermanInputArgs,
  WithPreselectedMultipleValuesOLS4Args,
  WithPreselectedValueAndUnresolvedIriOLS3Args,
  WithCustomValueArgs,
  WithPreselectedValueOLS4v2Args, WithDefaultsCompactArgs
} from "./AutocompleteWidgetStories";
import "../../../style/tssStyles.css";
import { AutocompleteDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, waitFor } from "@storybook/test";

const meta = {
  title: "Search/AutocompleteWidget",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: AutocompleteDescription,
      },
    },
  },
  component: AutocompleteWidget,
  argTypes: AutocompleteWidgetStoryArgTypes,
  args: AutocompleteWidgetStoryArgsReact,
} satisfies Meta<typeof AutocompleteWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithDefaults: Story = {
  args: WithDefaultsArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('autocomplete');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
}

export const UseAPIGatewayWithOLS: Story = {
  args: UseAPIGatewayWithOLSArgs,
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
  args: UseAPIGatewayWithOntoPortalArgs,
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
  args: UseAPIGatewayWithSkosmosArgs,
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
  args: HideApiSourceApiGatewayArgs,
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
  args: WithDefaultsCompactArgs,
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
  args: WithPreselectedValueOLS4v2Args,
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
  args: WithPreselectedValueAndUnresolvedIriOLS3Args,
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
  args: WithPreselectedMultipleValuesOLS4Args,
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
  args: WithCustomValueArgs,
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
  args: WithInvalidValueArgs,
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
  args: WithGermanInputArgs,
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
  args: WithDescriptionAndShortFormArgs,
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
  args: WithLongFormArgs,
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
  args: AllowAddingCustomTermsArgs,
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
  args: AllowMultipleTermsArgs,
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
  args: WithMultipleValuesArgs,
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
  args: TibNFDI4CHEMArgs,
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
  args: TibDataPlantArgs,
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
  args: SubtreeDirectSubtypesArgs,
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
  args: SubtreeDirectAndIndirectSubtypesArgs,
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



