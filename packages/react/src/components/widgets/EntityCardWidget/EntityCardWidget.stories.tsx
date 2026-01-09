import type { Meta, StoryObj } from "@storybook/react-vite";
import { EntityCardWidget } from "./EntityCardWidget";
import {
    commonEntityCardWidgetPlay,
    EntityCardWidgetStoryArgs,
    termExample,
    ontologyExample,
    loadingState,
} from "./EntityCardWidgetStories";
import React from "react";


const meta = {
    title: "Widgets/EntityCardWidget",
    component: EntityCardWidget,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: EntityCardWidgetStoryArgs, //if a story doesn't have an args, use this as a default, but most of them have their own
} satisfies Meta<typeof EntityCardWidget>;

export default meta;

type Story = StoryObj<typeof meta>;


const withWidth = (width: string) => (StoryComp: any) => (
    <div style={{ width }}>{StoryComp()}</div>
);

export const Default: Story = {
    args: {
        title: "Standard Card",
        description: "This is a normal sized card.",
        iconType: "graphApp",
    },
    play: commonEntityCardWidgetPlay,
};

export const LargeCard: Story = { // change it and seprate it
    args: {
        title: "Sample Ontology",
        description: "This is a description fetched from TS4NFDI terminology service.",
        iconType: "search",
    },
    decorators: [withWidth("100vw")],
    play: commonEntityCardWidgetPlay,
};

export const GeneOntology: Story = {
    args: termExample,
    decorators: [withWidth("350px")],
    play: commonEntityCardWidgetPlay,
};

export const ChemicalDatabase: Story = {
    args: ontologyExample,
    decorators: [withWidth("350px")],
    play: commonEntityCardWidgetPlay,
};

export const Loading: Story = {
    args: loadingState,
    decorators: [withWidth("350px")],
    play: commonEntityCardWidgetPlay,
};


