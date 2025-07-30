import * as globals from "../../../../app/globals";
import {
  apiArgType,
  classNameArgType,
  defaultValueArgType,
  iriArgType,
  onNavigateToArgType,
  ontologyIdArgType,
  parameterArgType,
  thingTypeArgType,
  titleTextArgType,
  useLegacyArgType,
  hrefArgType,
} from "../../../../stories/storyArgs";
import "../../../../style/customTitleStyle.css";
import { expect, waitFor, within } from "storybook/test";

export const TitleWidgetStoryArgTypes = {
  ...apiArgType,
  ...ontologyIdArgType,
  ...thingTypeArgType,
  ...iriArgType,
  ...parameterArgType,
  ...titleTextArgType,
  ...defaultValueArgType,
  ...useLegacyArgType,
  ...classNameArgType,
  ...onNavigateToArgType,
  ...hrefArgType,
};

export const TitleWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  iri: "",
  ontologyId: "",
  thingType: "term",
  titleText: "",
  defaultValue: "",
  className: "",
  parameter: "collection=nfdi4health",
} as const;

export const TitleWidgetDefaultArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
} as const;

export const OntologyTitleArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "ontology",
} as const;

export const SelectingDefiningOntologyArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    thingType: "term",
    parameter: "",
} as const;

export const TitleWidgetWithTitleTextArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    titleText: "title text",
} as const;

export const IncorrectIriWithDefaultValueArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    defaultValue: "default value",
} as const;

export const IncorrectIriWithoutDefaultValueArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
} as const;

export const DefiningOntologyUnavailableArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    thingType: "term",
    parameter: "",
} as const;

export const WithStylesArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    className: "custom-title-style",
} as const;

export const WithoutStylesArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    className: "none",
} as const;

export const OntologyTitleCustomOnNavigateArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "ontology",
    onNavigateTo: (iri: string, ontologyId: string, thingType: any) => {
      console.log(
        "Navigation with IRI, ontologyId and thingType.",
        iri,
        ontologyId,
        thingType,
      );
    },
} as const;

export const OntologyTitleCustomLinkArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "ontology",
    href: "/",
} as const;

export const commonTitleWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('title');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};