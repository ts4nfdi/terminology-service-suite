import type { Meta, StoryObj } from "@storybook/react-vite";
import { TermRequest } from "./TermRequest";

const meta = {
  title: "Term Request/TermRequest",
  component: TermRequest,
  parameters: {
    layout: "centered",
  },
  args: {
    ontologyRepoUrl: "https://github.com/TIBHannover/VibrationalSpectroscopyOntology",
  },
} satisfies Meta<typeof TermRequest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermRequestExample: Story = {};
