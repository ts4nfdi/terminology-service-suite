import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, within, expect, userEvent, waitFor, fireEvent } from 'storybook/test';
import React from 'react';
import{EuiPOC} from './EUIPOC';

const meta = {
  title: "POC/EuiPOC",
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  component: EuiPOC,
} satisfies Meta<typeof EuiPOC>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
  }
}
