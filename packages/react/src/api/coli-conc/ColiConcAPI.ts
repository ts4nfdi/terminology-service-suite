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
}
