import { createBreadcrumb } from "./BreadcrumbWidget";
import { createDescription } from "./DescriptionWidget";
import { createEntityDefinedBy } from "./EntityDefinedByWidget";
import { createEntityOntoList } from "./EntityOntoListWidget";
import { createIri } from "./IriWidget";
import { createMetadata } from "./MetadataWidget";
import {
  createAlternativeNameTab,
  createCrossRefTab,
  createHierarchy,
  createTab,
} from "./TabWidget";
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
};
