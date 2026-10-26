import { createAutocomplete } from "./AutocompleteWidget";
import { createDataContent } from "./DataContentWidget";
import { createEntityInfo } from "./EntityInfoWidget";
import { createEntityList } from "./EntityListWidget";
import {
  createEntityProvider,
  getEntityProvider,
  getEntityProviders,
} from "./EntityProviderWidget";
import { createEntityRelations } from "./EntityRelationsWidget";
import { createGraphView } from "./GraphViewWidget";
import { createJsonApi } from "./JsonApiWidget";
import { createMappingDetail } from "./MappingDetailWidget";
import { createMappingList } from "./MappingListWidget";
import {
  createAlternativeNameTab,
  createBreadcrumb,
  createCrossRefTab,
  createDescription,
  createEntityDefinedBy,
  createEntityOntoList,
  createHierarchy,
  createIri,
  createMathFormula,
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
  createEntityList,
  createEntityProvider,
  createEntityRelations,
  createGraphView,
  createJsonApi,
  createMappingDetail,
  createMappingList,
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
  createMathFormula,
  createTitle,
  getEntityProvider,
  getEntityProviders,
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
  createEntityList,
  createEntityOntoList,
  createEntityProvider,
  createEntityRelations,
  createGraphView,
  createHierarchy,
  createIri,
  createJsonApi,
  createMappingDetail,
  createMappingList,
  createMathFormula,
  createMetadata,
  createOntologyInfo,
  createResources,
  createSearchBar,
  createSearchResultsList,
  createTab,
  createTitle,
  getEntityProvider,
  getEntityProviders,
};

export type {
  EntityProvider,
  GetEntityProviderParams,
} from "./EntityProviderWidget";
