import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "./HierarchyWidget";
import { entityTypeNames } from "../../../../../model/ModelTypeCheck";
import * as globals from "../../../../../app/globals";
import {
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  parameterArgTypeHierarchy,
} from "../../../../../stories/storyArgs";

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
  ...parameterArgTypeHierarchy
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
  parameter: "",
};

export const ClassHierarchy = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
    entityType: "class",
    ontologyId: "efo",
  },
};

export const IndividualHierarchy = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "http://purl.obolibrary.org/obo/IAO_0000120",
    entityType: "individual",
    ontologyId: "bco",
  },
};

export const PreferredRoots = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "class",
    ontologyId: "uberon",
    preferredRoots: true,
  },
};

export const IncludeObsoleteEntities = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "class",
    ontologyId: "uberon",
    includeObsoleteEntities: true,
    useLegacy: true,
  },
};

export const PropertyRoots = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "property",
    ontologyId: "bco",
    useLegacy: true,
  },
};

export const IndividualRoots = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "",
    entityType: "individual",
    ontologyId: "bco",
  },
};

export const LargeHierarchy = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
    entityType: "class",
    ontologyId: "uberon",
  },
};

export const SkosHierarchy = {
  args: {
    apiUrl: globals.FINTO_V1_API_ENDPOINT,
    backendType: "skosmos",
    iri: "http://www.yso.fi/onto/yso/p864",
    ontologyId: "yso",
  },
};

export const SagePubHierarchy = {
  args: {
    apiUrl: "https://concepts.sagepub.com/vocabularies/rest/v1/",
    backendType: "skosmos",
    iri: "https://concepts.sagepub.com/social-science/concept/economic_forecasting",
    ontologyId: "social-science",
  },
};

export const OntoportalHierarchy = {
  args: {
    apiUrl: "https://data.biodivportal.gfbio.org",
    backendType: "ontoportal",
    iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",
    ontologyId: "IOC",
    entityType: "class",
    apiKey: "",
  },
};

export const OLS3Hierarchy = {
  args: {
    apiUrl: globals.ZBMED_OLS3_API,
    backendType: "ols",
    iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
    entityType: "class",
    ontologyId: "efo",
    useLegacy: true,
  },
};

export const OLSGerman = {
  args: {
    apiUrl: globals.EBI_API_ENDPOINT,
    backendType: "ols",
    iri: "http://purl.obolibrary.org/obo/HP_0003502",
    entityType: "class",
    ontologyId: "hp",
    useLegacy: false,
    parameter: "lang=de"
  }
};

export const SkosmosAgrovocGerman = {
  args: {
    apiUrl: "https://agrovoc.fao.org/browse/rest/v1/",
    backendType: "skosmos",
    iri: "http://aims.fao.org/aos/agrovoc/c_1731",
    showSiblingsOnInit: true,
    ontologyId: "agrovoc",
    parameter: "lang=de"
  }
};
