import { expect, waitFor, within } from "storybook/test";
import * as globals from "../../../../app/globals";
import { EntityTypeName } from "../../../../model/ModelTypeCheck";
import {
  apiArgType,
  colorFirstArgType,
  colorSecondArgType,
  entityTypeArgType,
  iriArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../../stories/storyArgs";
import "../../../../style/customBreadcrumbStyle.css";

export const BreadcrumbWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
  ...colorFirstArgType,
  ...colorSecondArgType,
  ...onNavigateToOntologyArgType,
};

export const BreadcrumbWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  iri: "",
  ontologyId: "",
  entityType: "term" as EntityTypeName,
  colorFirst: "",
  colorSecond: "",
  parameter: "collection=nfdi4health",
  onNavigateToOntology: "Console message",
};

export const BreadcrumbWidgetDefaultArgs = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health",
} as const;

export const SelectingDefiningOntologyArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: "",
} as const;

export const DefiningOntologyUnavailableArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: "",
} as const;

export const ErrorBreadcrumbWidgetArgs = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985987654345678",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health",
} as const;

export const CustomColorsArgs = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health",
  colorFirst: "red",
  colorSecond: "grey",
} as const;

export const CustomStyleArgs = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health",
  colorFirst: "#eced8e",
  colorSecond: "#8eaeed",
  className: "custom-breadcrumb-style",
} as const;

export const EntityInputArgs = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health",
  entity: {
    properties: {
      iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
      ontologyId: "ncit",
      shortForm: "NCIT_C2985",
    },
  },
} as const;

export const commonBreadcrumbWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("breadcrumb");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
