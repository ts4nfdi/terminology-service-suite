import { createTitle } from "./TitleWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createTitle,
};

export { createTitle };
