import { createDataContent } from "./DataContentWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createDataContent,
};

export { createDataContent };
