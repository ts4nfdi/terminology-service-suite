import {
  classNameArgType,
  colorFirstArgType,
  colorSecondArgType, entityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
} from "../../../../../stories/storyArgs";
import "../../../../../style/customBreadcrumbStyle.css";
import { expect, waitFor, within } from "storybook/test";

export const BreadcrumbPresentationStoryArgTypes = {
  ...ontologyIdArgType,
  ...colorFirstArgType,
  ...colorSecondArgType,
  ...onNavigateToOntologyArgType,
  ...classNameArgType,
  ...entityArgType,
};

export const BreadcrumbPresentationStoryArgs = {
  ontologyId: "",
  shortForm: "",
  colorFirst: "",
  colorSecond: "",
  onNavigateToOntology: "Console message",
  className: "",
  entity: {
    properties: {
      ontologyId: "",
      iri: "",
      shortForm: ""
    }
  },
};

export const EntityInputArgs = {
  ...BreadcrumbPresentationStoryArgs,
    entity: {
      properties: {
        "iri": "http://purl.obolibrary.org/obo/NCIT_C2985",
        "ontologyId": "ncit",
        "shortForm": "NCIT_C2985",
      }
    },
};

export const EntityInputMissingValueArgs = {
  ...BreadcrumbPresentationStoryArgs,
    entity: {
      properties: {
        "iri": "http://purl.obolibrary.org/obo/NCIT_C2985",
        "shortForm": "NCIT_C2985",
        "ontologyId": ""
      }
    },
    ontologyId: "NCIT"
};

export const commonBreadcrumbPresentationPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('breadcrumb-pres');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};

