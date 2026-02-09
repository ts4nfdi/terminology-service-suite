import { expect, waitFor, within } from "storybook/test";
import {
  classNameArgType,
  colorArgType,
  copyButtonArgType,
  externalIconArgType,
  iriArgType,
  iriTextArgType,
  urlPrefixArgType,
} from "../../../../stories/storyArgs";

export const IriWidgetStoryArgTypes = {
  ...colorArgType,
  ...iriArgType,
  ...iriTextArgType,
  ...externalIconArgType,
  ...urlPrefixArgType,
  ...copyButtonArgType,
  ...classNameArgType,
};

export const IriWidgetStoryArgs = {
  iri: "",
  color: "text",
  iriText: "",
  urlPrefix: "",
  externalIcon: true,
  className: "",
} as const;

export const IriWidget1Args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
};

export const withoutExternalIconArgs = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  externalIcon: false,
};

export const withCopyButtonArgs = {
  ...IriWidgetStoryArgs,
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  copyButton: "left",
} as const;

export const withUrlPrefixArgs = {
  iri: "http://purl.obolibrary.org/obo/OBI_0000070",
  urlPrefix: "https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri=",
};

export const commonIriWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("iri");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
