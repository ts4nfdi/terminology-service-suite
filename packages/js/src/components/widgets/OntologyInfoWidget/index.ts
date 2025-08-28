import { createOntologyInfo } from "./OntologyInfoWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createOntologyInfo,
};

export { createOntologyInfo };
