import { within, expect, waitFor } from "storybook/test";



export const EntityCardWidgetStoryArgs = {
    title: "",
    description: "",
    iconType: "database",
};

export const termExample = {
    title: "Gene Ontology",
    description:
        "The Gene Ontology (GO) is a major bioinformatics initiative to unify the representation of gene and gene product attributes across all species.",
    iconType: "aggregate",
};

export const ontologyExample = {
    title: "Chemical Entities of Biological Interest",
    description:
        "ChEBI is a database and ontology of molecular entities focused on small chemical compounds.",
    iconType: "database",
};

export const loadingState = {
    title: "Loading...",
    description: "Please wait while we fetch the terminology data.",
    iconType: "clock",
};

export const commonEntityCardWidgetPlay = async ({
                                                     canvasElement,
                                                 }: {
    canvasElement: HTMLElement;
}) => {
    const canvas = within(canvasElement);

    await waitFor(
        async () => {
            const card = canvas.getByTestId("entity-card");
            await expect(card).toBeInTheDocument();
        },
        { timeout: 3000 },
    );
};


//obntothly card
