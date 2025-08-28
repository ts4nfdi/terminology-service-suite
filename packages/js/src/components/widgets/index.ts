import { createSearchBar } from "./SearchBarWidget";
import { createDataContent } from "./DataContentWidget";
import { createAutocomplete } from "./AutocompleteWidget";
import { createEntityInfo } from "./EntityInfoWidget";
import { createEntityRelations } from "./EntityRelationsWidget";
import { createGraphView } from "./GraphViewWidget";
import { createJsonApi } from "./JsonApiWidget";
import { createOntologyInfo } from "./OntologyInfoWidget";
import { createResources } from "./ResourcesWidget";
import { createSearchResultsList } from "./SearchResultsListWidget";
import { createDepiction } from "./TermDepictionWidget";
import {
  createMetadata,
  createTitle,
  createTab,
  createHierarchy,
  createBreadcrumb,
  createIri,
  createEntityOntoList,
  createEntityDefinedBy,
  createAlternativeNameTab,
  createDescription,
  createCrossRefTab,
} from "./MetadataWidget";

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
