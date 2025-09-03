import { createEntityRelations } from "./EntityRelationsWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createEntityRelations,
};

export { createEntityRelations };
