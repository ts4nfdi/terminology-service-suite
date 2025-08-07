import { createDescription } from "./DescriptionWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createDescription,
};

export { createDescription };
