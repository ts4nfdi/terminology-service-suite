import { createAutocomplete } from "./AutocompleteWidget/AutocompleteWidget";
import { createDataContent } from "./DataContentWidget/DataContentWidget"
import { createEntityInfo } from "./EntityInfoWidget/EntityInfoWidget";
import { createJsonApi} from "./JsonApiWidget/JsonApiWidget";
import { createBreadcrumb } from "./MetadataWidget/BreadcrumbWidget/BreadcrumbWidget";
import { createDescription } from "./MetadataWidget/DescriptionWidget/DescriptionWidget"
import { createIri } from "./MetadataWidget/IriWidget/IriWidget";
import { createTab } from "./MetadataWidget/TabWidget/TabWidget";
import { createAlternativeNameTab } from "./MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidget";
import { createCrossRefTab } from "./MetadataWidget/TabWidget/CrossRefWidget/CrossRefTabWidget";
import { createHierarchyOLS } from "./MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetOLS";
import { createHierarchyDeprecated } from "./MetadataWidget/TabWidget/HierarchyWidgetDeprecated/HierarchyWidgetDeprecated";
import { createHierarchy } from "./MetadataWidget/TabWidget/HierarchyWidgetSemLookP/HierarchyWidget";
import { createTitle} from "./MetadataWidget/TitleWidget/TitleWidget";
import { createMetadata } from "./MetadataWidget/MetadataWidget";
import { createOntologyInfo } from "./OntologyInfoWidget/OntologyInfoWidget";
import { createResources } from "./ResourcesWidget/ResourcesWidget";
import { createSearchBar } from "./SearchBarWidget/SearchBarWidget";
import { createSearchResultsList } from "./SearchResultsListWidget/SearchResultsListWidget";
import {createEntityRelations} from "./EntityRelationsWidget/EntityRelationsWidget";
import { createDepiction } from "./TermDepictionWidget/TermDepictionWidget";
import { createEntityOntoList } from "./MetadataWidget/EntityOntoListWidget/EntityOntoListWidget";

(window as any)['SemLookPWidgets'] = {
    createAutocomplete,
    createDataContent,
    createEntityInfo,
    createEntityRelations,
    createJsonApi,
    createBreadcrumb,
    createDescription,
    createIri,
    createTab,
    createAlternativeNameTab,
    createCrossRefTab,
    createHierarchy,
    createHierarchyDeprecated,
    createTitle,
    createOntologyInfo,
    createResources,
    createSearchBar,
    createSearchResultsList,
    createMetadata,
    createDepiction,
    createHierarchyOLS,
    createEntityOntoList
}

export {
    createAutocomplete,
    createDataContent,
    createEntityInfo,
    createEntityRelations,
    createJsonApi,
    createBreadcrumb,
    createDescription,
    createIri,
    createTab,
    createAlternativeNameTab,
    createCrossRefTab,
    createHierarchyOLS,
    createHierarchyDeprecated,
    createTitle,
    createOntologyInfo,
    createResources,
    createSearchBar,
    createSearchResultsList,
    createMetadata,
    createDepiction,
    createHierarchy,
    createEntityOntoList
}

export * from "./MetadataWidget";
export * from "./AutocompleteWidget";
export * from "./JsonApiWidget";
export * from "./DataContentWidget";
export * from "./ResourcesWidget";
export * from "./OntologyInfoWidget";
export * from "./SearchBarWidget";
export * from "./SearchResultsListWidget";
export * from "./EntityInfoWidget";
export * from "./EntityRelationsWidget";
export * from "./TermDepictionWidget";