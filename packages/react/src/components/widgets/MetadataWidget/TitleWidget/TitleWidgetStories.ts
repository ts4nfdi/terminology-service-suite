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
import { expect, waitFor, within } from "@storybook/test";

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
  thingType: "",
  titleText: "",
  defaultValue: "",
  className: "",
  parameter: "collection=nfdi4health",
};

export const TitleWidgetDefaultArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
};

export const OntologyTitleArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "ontology",
};

export const SelectingDefiningOntologyArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    thingType: "term",
    parameter: "",
};

export const TitleWidgetWithTitleTextArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    titleText: "title text",
};

export const IncorrectIriWithDefaultValueArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    defaultValue: "default value",
};

export const IncorrectIriWithoutDefaultValueArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
};

export const DefiningOntologyUnavailableArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    thingType: "term",
    parameter: "",
};

export const WithStylesArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    className: "custom-title-style",
};

export const WithoutStylesArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    className: "none",
};

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
};

export const OntologyTitleCustomLinkArgs = {
    iri: "http://purl.obolibrary.org/obo/NCIT",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "ontology",
    href: "/",
};

export const commonTitleWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('title');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};