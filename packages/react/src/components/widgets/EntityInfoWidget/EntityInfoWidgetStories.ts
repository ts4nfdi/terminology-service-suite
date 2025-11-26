import {
  apiArgType,
  entityTypeArgType,
  hasTitleArgType,
  iriArgType,
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
  parameterArgType,
  showBadgesArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";
import * as globals from "../../../app/globals";
import { expect, waitFor, within } from "storybook/test";
import { EntityTypeName } from "../../../model/ModelTypeCheck";

export const EntityInfoWidgetStoryArgTypes = {
  ...apiArgType,
  ...hasTitleArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...showBadgesArgType,
  ...useLegacyArgType,
  ...iriArgType,
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  ...onNavigateToDisambiguateArgType,
};

export const EntityInfoWidgetStoryArgs = {
  api: globals.ZBMED_OLS4_API,
  iri: "",
  useLegacy: true,
  ontologyId: "",
  entityType: "term" as EntityTypeName,
  hasTitle: true,
  showBadges: true,
  parameter: "",
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  onNavigateToDisambiguate: "Console message",
};

export const TermInfoWidgetArgs = {
  ...EntityInfoWidgetStoryArgs,
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  entityType: "term" as EntityTypeName,
  ontologyId: "ncit",
  hasTitle: true,
};

export const PropertyInfoWidgetArgs = {
  ...EntityInfoWidgetStoryArgs,
  iri: "http://www.w3.org/2004/02/skos/core#altLabel",
  entityType: "property" as EntityTypeName,
  ontologyId: "mesh",
};

export const IndividualInfoWidgetArgs = {
  ...EntityInfoWidgetStoryArgs,
  iri: "https://openenergyplatform.org/ontology/oeo/OEO_00020163",
  entityType: "individual" as EntityTypeName,
  ontologyId: "oeo",
  api: globals.TIB_API_ENDPOINT,
};

export const InfoWidgetBadgesArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  entityType: "class" as EntityTypeName,
  iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
  ontologyId: "uberon",
};

export const OptionalEntityTypeLegacyAPIArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.ZBMED_OLS4_API,
  iri: "http://purl.obolibrary.org/obo/NCIT_C88403",
};

export const InfoWidgetDomainArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/NCIT_R89",
  entityType: "property" as EntityTypeName,
  ontologyId: "ncit"
};

export const InfoWidgetRangeArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/RO_0002029",
  entityType: "property" as EntityTypeName,
  ontologyId: "ro"
};

export const InfoWidgetPropertyAssertionArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
  entityType: "individual" as EntityTypeName,
  ontologyId: "envo"
};

export const InfoWidgetPropertyCharacteristicsArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/MICRO_0001603",
  entityType: "property" as EntityTypeName,
  ontologyId: "micro"
};

export const NavigateToEBIPageArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
  onNavigateToEntity: "Navigate to EBI page",
  onNavigateToOntology: "Navigate to EBI page",
  onNavigateToDisambiguate: "Navigate to EBI page",
  entityType: "individual" as EntityTypeName,
  ontologyId: "envo"
};
export const SkosmosImportArgs = {
  ...EntityInfoWidgetStoryArgs,
  api: globals.ZBMED_OLS4_API,
  useLegacy: true,
  iri: "http://id.loc.gov/vocabulary/iso639-1/zh",
};

export const commonEntityInfoWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("entity-info");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
