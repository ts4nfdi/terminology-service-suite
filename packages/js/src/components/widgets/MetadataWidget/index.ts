import { createMetadata } from "./MetadataWidget";
import {
  createTab,
  createHierarchy,
  createCrossRefTab,
  createAlternativeNameTab,
} from "./TabWidget";
import { createBreadcrumb } from "./BreadcrumbWidget";
import { createDescription } from "./DescriptionWidget";
import { createEntityDefinedBy } from "./EntityDefinedByWidget";
import { createEntityOntoList } from "./EntityOntoListWidget";
import { createIri } from "./IriWidget";
import { createTitle } from "./TitleWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
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
