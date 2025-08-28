import { createDepiction } from "./TermDepictionWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createDepiction,
};

export { createDepiction };
