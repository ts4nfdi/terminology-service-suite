import { createEntityList } from "./EntityListWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createEntityList,
};

export { createEntityList };
