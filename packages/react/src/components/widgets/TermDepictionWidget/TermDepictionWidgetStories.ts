import { expect, waitFor, within } from "storybook/test";
import * as globals from "../../../app/globals";
import {
  apiArgType,
  iriArgType,
  ontologyIdReqArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";

export const TermDepictionWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdReqArgType,
  ...useLegacyArgType,
};

export const TermDepictionWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "",
  ontologyId: "",
  useLegacy: false,
};

export const TermDepictionWidgetExampleArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
  ontologyId: "uberon",
  useLegacy: false,
};

export const TermDepictionWidget3DArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/UBERON_0002048",
  ontologyId: "uberon",
  useLegacy: false,
};

export const OntologyIdAsIriArgs = {
  api: "http://tsag.qa.km.k8s.zbmed.de/api-gateway/ols4/api/",
  iri: "https://nomenclature.info/nom/5254",
  ontologyId: "http://bartoc.org/en/node/1232",
  useLegacy: true,
};

export const commonTermDepictionWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("term-depiction");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
