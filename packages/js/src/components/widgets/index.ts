import { createAutocomplete } from "./AutocompleteWidget";
import { createDataContent } from "./DataContentWidget";
import { createEntityInfo } from "./EntityInfoWidget";
import { createEntityRelations } from "./EntityRelationsWidget";
import { createGraphView } from "./GraphViewWidget";
import { createJsonApi } from "./JsonApiWidget";
import {
  createAlternativeNameTab,
  createBreadcrumb,
  createCrossRefTab,
  createDescription,
  createEntityDefinedBy,
  createEntityOntoList,
  createHierarchy,
  createIri,
  createMetadata,
  createTab,
  createTitle,
} from "./MetadataWidget";
import { createOntologyInfo } from "./OntologyInfoWidget";
import { createResources } from "./ResourcesWidget";
import { createSearchBar } from "./SearchBarWidget";
import { createSearchResultsList } from "./SearchResultsListWidget";
import { createDepiction } from "./TermDepictionWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createSearchBar,
  createDataContent,
  createAutocomplete,
  createEntityInfo,
  createEntityRelations,
  createGraphView,
  createJsonApi,
  createOntologyInfo,
  createResources,
  createSearchResultsList,
  createDepiction,
  createMetadata,
  createTab,
  createHierarchy,
  createCrossRefTab,
  createAlternativeNameTab,
  createBreadcrumb,
  createDescription,
  createEntityDefinedBy,
  createEntityOntoList,
  createIri,
  createTitle,
};

export {
  createAlternativeNameTab,
  createAutocomplete,
  createBreadcrumb,
  createCrossRefTab,
  createDataContent,
  createDepiction,
  createDescription,
  createEntityDefinedBy,
  createEntityInfo,
  createEntityOntoList,
  createEntityRelations,
  createGraphView,
  createHierarchy,
  createIri,
  createJsonApi,
  createMetadata,
  createOntologyInfo,
  createResources,
  createSearchBar,
  createSearchResultsList,
  createTab,
  createTitle,
};
