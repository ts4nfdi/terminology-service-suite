import { createSearchBar } from "./SearchBarWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createSearchBar,
};

export { createSearchBar };
