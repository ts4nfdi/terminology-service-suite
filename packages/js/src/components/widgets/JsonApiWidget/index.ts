import { createJsonApi } from "./JsonApiWidget";


(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createJsonApi
};

export {
  createJsonApi
}