import { createSearchBar } from "./SearchBarWidget/SearchBarWidget";
import { createEUIPoc } from "./POC/POC";

(window as any)["ts4nfdiWidgets"] = {
  createSearchBar,
  createEUIPoc
};

export {
  createSearchBar,
  createEUIPoc
};