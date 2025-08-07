import { createGraphView } from "./GraphViewWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createGraphView,
};

export { createGraphView };
