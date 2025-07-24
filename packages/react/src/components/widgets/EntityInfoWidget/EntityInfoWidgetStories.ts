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
import { expect, waitFor, within } from "@storybook/test";
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
    entityType: "term",
    ontologyId: "ncit",
    hasTitle: true,
};

export const PropertyInfoWidgetArgs = {
  ...EntityInfoWidgetStoryArgs,
    iri: "http://www.w3.org/2004/02/skos/core#altLabel",
    entityType: "property",
    ontologyId: "mesh",
};

export const IndividualInfoWidgetArgs = {
  ...EntityInfoWidgetStoryArgs,
    iri: "http://purl.obolibrary.org/obo/IAO_0000423",
    entityType: "individual",
    ontologyId: "clo",
};

export const InfoWidgetBadgesArgs = {
  ...EntityInfoWidgetStoryArgs,
    api: globals.EBI_API_ENDPOINT,
    useLegacy: false,
    entityType: "class",
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
};

export const InfoWidgetRangeArgs = {
  ...EntityInfoWidgetStoryArgs,
    api: globals.EBI_API_ENDPOINT,
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/RO_0002029",
};

export const InfoWidgetPropertyAssertionArgs = {
  ...EntityInfoWidgetStoryArgs,
    api: globals.EBI_API_ENDPOINT,
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
};

export const InfoWidgetPropertyCharacteristicsArgs = {
  ...EntityInfoWidgetStoryArgs,
    api: globals.EBI_API_ENDPOINT,
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/MICRO_0001603",
};

export const NavigateToEBIPageArgs = {
  ...EntityInfoWidgetStoryArgs,
    api: globals.EBI_API_ENDPOINT,
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
    onNavigateToEntity: "Navigate to EBI page",
    onNavigateToOntology: "Navigate to EBI page",
    onNavigateToDisambiguate: "Navigate to EBI page",
};

export const commonEntityInfoWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('entity-info');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};