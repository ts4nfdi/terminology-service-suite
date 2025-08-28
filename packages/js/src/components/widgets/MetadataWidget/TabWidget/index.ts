import { createTab } from "./TabWidget";
import { createHierarchy } from "./HierarchyWidget";
import { createCrossRefTab } from "./CrossRefWidget";
import { createAlternativeNameTab } from "./AlternativeNameTabWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createTab,
  createHierarchy,
  createCrossRefTab,
  createAlternativeNameTab,
};

export {
  createTab,
  createHierarchy,
  createCrossRefTab,
  createAlternativeNameTab,
};
