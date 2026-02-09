import { createAlternativeNameTab } from "./AlternativeNameTabWidget";
import { createCrossRefTab } from "./CrossRefWidget";
import { createHierarchy } from "./HierarchyWidget";
import { createTab } from "./TabWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createTab,
  createHierarchy,
  createCrossRefTab,
  createAlternativeNameTab,
};

export {
  createAlternativeNameTab,
  createCrossRefTab,
  createHierarchy,
  createTab,
};
