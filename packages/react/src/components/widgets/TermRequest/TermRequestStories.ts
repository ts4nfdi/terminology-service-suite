import { expect, waitFor, within } from "storybook/test";

export const TermRequestWidgetStoryArgs = {
  ontologyId: "",
  aiAssistUrl: "http://localhost",
};

export const TermRequestVibsoExampleArgs = {
  ontologyId: "vibso",
};

export const commonTermRequestWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("term-request");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
