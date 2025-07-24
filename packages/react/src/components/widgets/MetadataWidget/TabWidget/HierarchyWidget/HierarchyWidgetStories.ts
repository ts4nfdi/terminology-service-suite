import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "./HierarchyWidget";
import { entityTypeNames } from "../../../../../model/ModelTypeCheck";
import * as globals from "../../../../../app/globals";
import {
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
} from "../../../../../stories/storyArgs";
import { expect, waitFor, within } from "@storybook/test";

export const HierarchyWidgetStoryArgTypes = {
  apiUrl: {},
  backendType: {
    control: {
      type: "radio",
    },
    options: ["ols", "skosmos", "ontoportal"],
    table: {
      defaultValue: {
        summary: "ols",
      },
    },
  },
  apiKey: {
    table: {
      defaultValue: {
        summary: undefined,
      },
    },
  },
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  iri: {
    table: {
      defaultValue: {
        summary: undefined,
      },
    },
  },
  ontologyId: {
    table: {
      defaultValue: {
        summary: undefined,
      },
    },
  },
  entityType: {
    table: {
      type: { summary: `${entityTypeNames.join(" | ")}` },
      defaultValue: {
        summary: undefined,
      },
    },
    control: {
      type: "radio",
    },
    options: [
      "ontology",
      "term",
      "class",
      "property",
      "individual",
      undefined,
      "INVALID STRING",
    ],
  },
  includeObsoleteEntities: {
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
      },
    },
  },
  preferredRoots: {
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
      },
    },
  },
  keepExpansionStates: {
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
      },
    },
  },
  showSiblingsOnInit: {
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
      },
    },
  },
  useLegacy: {
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY,
      },
    },
  },
};

export const HierarchyWidgetStoryArgs = {
  apiUrl: {},
  backendType: {},
  apiKey: {},
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  iri: "",
  ontologyId: "",
  entityType: "",
  includeObsoleteEntities:
    HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
  preferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
  keepExpansionStates: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
  showSiblingsOnInit: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
  useLegacy: HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY,
};

export const ClassHierarchyArgs = {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
    entityType: "class",
    ontologyId: "efo",
};

export const IndividualHierarchyArgs = {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "http://purl.obolibrary.org/obo/IAO_0000120",
    entityType: "individual",
    ontologyId: "bco",
};

export const PreferredRootsArgs = {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "class",
    ontologyId: "uberon",
    preferredRoots: true,
};

export const IncludeObsoleteEntitiesArgs = {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "class",
    ontologyId: "uberon",
    includeObsoleteEntities: true,
    useLegacy: true,
};

export const PropertyRootsArgs = {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "property",
    ontologyId: "bco",
    useLegacy: true,
};

export const IndividualRootsArgs = {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "individual",
    ontologyId: "bco",
};

export const LargeHierarchyArgs = {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
    entityType: "class",
    ontologyId: "uberon",
};

export const SkosHierarchyArgs = {
    apiUrl: globals.FINTO_V1_API_ENDPOINT,
    backendType: "skosmos",
    iri: "http://www.yso.fi/onto/yso/p864",
    ontologyId: "yso",
};

export const SagePubHierarchyArgs = {
    apiUrl: "https://concepts.sagepub.com/vocabularies/rest/v1/",
    backendType: "skosmos",
    iri: "https://concepts.sagepub.com/social-science/concept/economic_forecasting",
    ontologyId: "social-science",
};

export const OntoportalHierarchyArgs = {
    apiUrl: "https://data.biodivportal.gfbio.org",
    backendType: "ontoportal",
    iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",
    ontologyId: "IOC",
    entityType: "class",
    apiKey: "",
};

export const OLS3HierarchyArgs = {
    apiUrl: globals.ZBMED_OLS3_API,
    backendType: "ols",
    iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
    entityType: "class",
    ontologyId: "efo",
    useLegacy: true,
};

export const commonHierarchyWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('hierarchy');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};