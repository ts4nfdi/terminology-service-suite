import * as globals from "../../../app/globals";

import { expect, waitFor, within } from "storybook/test";
import {
  apiArgType,
  hasTitleArgType,
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  ontologyIdReqArgType,
  parameterArgType,
  showBadgesArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";

export const OntologyInfoWidgetStoryArgTypes = {
  ...apiArgType,
  ...hasTitleArgType,
  ...ontologyIdReqArgType,
  ...parameterArgType,
  ...showBadgesArgType,
  ...useLegacyArgType,
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  ...onNavigateToDisambiguateArgType,
};

export const OntologyInfoWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  ontologyId: "",
  hasTitle: true,
  showBadges: true,
  parameter: "",
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  onNavigateToDisambiguate: "Console message",
};

export const OntologyInfoWidget1Args = {
  api: globals.ZBMED_OLS4_API,
  ontologyId: "atc",
};

export const OntologyInfoWidget2Args = {
  api: globals.ZBMED_OLS4_API,
  ontologyId: "ncit",
};

export const OntologyInfoWidgetOLS4APIArgs = {
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  ontologyId: "mp", // "uberon" is also good for demonstration
};

export const NavigateToEBIPageArgs = {
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  ontologyId: "afo",
  onNavigateToEntity: "Navigate to EBI page",
  onNavigateToOntology: "Navigate to EBI page",
  onNavigateToDisambiguate: "Navigate to EBI page",
};

export const OntologyInfoWidgetUberon = {
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  ontologyId: "uberon",
  hasTitle: true,
  showBadges: true,
};

export const OntologyInfoWidgetOhdab = {
  api: globals.TIB_API_ENDPOINT,
  useLegacy: false,
  ontologyId: "ohdab",
};

export const commonOntologyInfoWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("ontology-info");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};

/**
 * Checks that the IRI links are styled as links (issue #390), so they
 * do not look like plain text when the host app resets the link color.
 */
export const ontologyInfoLinksPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  await waitFor(
    async () => {
      const ontologyIri = canvasElement.querySelector("#ontologyIri");
      await expect(ontologyIri).toBeInTheDocument();
      await expect(ontologyIri).toHaveClass("clickable");
    },
    {
      timeout: 3000,
    },
  );

  const versionIri = canvasElement.querySelector("#versionIri");
  if (versionIri) {
    await expect(versionIri).toHaveClass("clickable");
  }
};
