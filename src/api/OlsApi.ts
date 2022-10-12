const fetchOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Content_Type: "application/json",
  },
};

interface PaginationParams {
  size?: string;
  page?: string;
}

function buildPaginatedUrl(api: string, path: string, paginationParams?: PaginationParams): string {
  let paginatedUrl = api + path;
  if (paginationParams) paginatedUrl += "?" + new URLSearchParams({ ...paginationParams });
  return paginatedUrl;
}

export type apiCallFn = (paginationParams?: PaginationParams) => Promise<any>;

export class OlsApi {
  private api: string;

  constructor(api: string) {
    this.api = api;
  }

  public getOntologies: apiCallFn = async (paginationParams) => {
    return (await fetch(buildPaginatedUrl(this.api, "ontologies", paginationParams), fetchOptions)).json();
  }

  public getTerms: apiCallFn = async (paginationParams) => {
    return (await fetch(buildPaginatedUrl(this.api, "terms", paginationParams), fetchOptions)).json();
  }

  public getProperties: apiCallFn = async (paginationParams) => {
    return (await fetch(buildPaginatedUrl(this.api, "properties", paginationParams), fetchOptions)).json();
  }

  public getIndividuals: apiCallFn = async (paginationParams) => {
    return (await fetch(buildPaginatedUrl(this.api, "individuals", paginationParams), fetchOptions)).json();
  }
}
