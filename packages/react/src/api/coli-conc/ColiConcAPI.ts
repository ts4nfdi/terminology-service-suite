import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class ColiConcApi {
  protected axiosInstance: AxiosInstance;

  private labelCache = new Map<string, Promise<string | null>>();

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

  async getEntityLabel(schema: string, iri: string): Promise<string | null> {
    try {
      const response = await axios.get(
        `https://terminology.services.base4nfdi.de/api-gateway/ols/api/v2/ontologies/${schema}/entities`,
        {
          params: {
            iri,
          },
        },
      );

      return response.data?.elements?.[0]?.label ?? null;
    } catch {
      return null;
    }
  }
}
