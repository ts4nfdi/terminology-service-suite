import { createCrossRefTab } from "./CrossRefTabWidget";


(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createCrossRefTab
};

export {
  createCrossRefTab
}