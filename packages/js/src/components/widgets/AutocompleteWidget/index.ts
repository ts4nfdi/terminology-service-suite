import { createAutocomplete } from "./AutocompleteWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createAutocomplete,
};

export { createAutocomplete };
