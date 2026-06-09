import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class ColiConcApi {
  protected axiosInstance: AxiosInstance;

  constructor(api: string | AxiosInstance) {
    this.axiosInstance =
      typeof api === "string"
        ? axios.create({
            baseURL: api,
            headers: {
              Accept: "application/json",
            },
          })
        : api;
  }

  protected async makeCall(url: string, config?: AxiosRequestConfig) {
    const response = await this.axiosInstance.get(url, config);

    return response.data;
  }

  async getMappingsByFrom(iri: string) {
    return this.makeCall("/mappings", {
      params: {
        from: iri,
      },
    });
  }

  async getEntityLabel(scheme: string, iri: string): Promise<string | null> {
    if (!scheme || !iri) return null;

    try {
      const response = await axios.get(
        `https://terminology.services.base4nfdi.de/api-gateway/ols/api/v2/ontologies/${encodeURIComponent(
          scheme,
        )}/entities`,
        {
          params: {
            iri,
          },
          headers: {
            Accept: "application/json",
          },
        },
      );

      return response.data?.elements?.[0]?.label ?? null;
    } catch {
      return null;
    }
  }
}
