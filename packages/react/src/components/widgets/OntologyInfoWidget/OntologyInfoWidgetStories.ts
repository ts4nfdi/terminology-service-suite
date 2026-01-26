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
