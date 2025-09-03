import { OlsEntityApi } from "../../api/ols/OlsEntityApi";

export interface entityObject {
  properties: {
    iri: string;
    ontologyId?: string;
    short_form?: string;
    [key: string]: any;
  };
}

export async function getBreadcrumbData({
  api,
  useLegacy,
  iri,
  ontologyId,
  entityType,
  parameter,
}: any): Promise<entityObject> {
  /**
   * Fetches the EntityObject using the same properties as the BreadcrumbWidget
   */
  const olsApi = new OlsEntityApi(api);
  const entityObject = await olsApi.getEntityObject(
    iri,
    entityType,
    ontologyId,
    parameter,
    useLegacy,
  );
  return JSON.parse(JSON.stringify(entityObject));
}
