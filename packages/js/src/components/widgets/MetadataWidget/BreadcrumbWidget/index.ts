import { createBreadcrumb } from "./BreadcrumbWidget";

(window as any)["ts4nfdiWidgets"] = {
  ...(window as any)["ts4nfdiWidgets"],
  createBreadcrumb,
};

export { createBreadcrumb };
