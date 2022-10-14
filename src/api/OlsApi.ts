import axios, { AxiosInstance } from "axios";

interface PaginationParams {
  size?: string;
  page?: string;
}

export type apiCallFn = (paginationParams?: PaginationParams) => Promise<any>;

export class OlsApi {
  private axiosInstance: AxiosInstance;

  constructor(api: string) {
    this.axiosInstance = axios.create({
      baseURL: api,
      headers: {
        Accept: "application/json",
        Content_Type: "application/json",
      },
    });
  }

  public getOntologies: apiCallFn = async (paginationParams) => {
    return (await this.axiosInstance.get("ontologies", { params: paginationParams })).data;
  }

  public getTerms: apiCallFn = async (paginationParams) => {
    return (await this.axiosInstance.get("terms", { params: paginationParams })).data;
  }

  public getProperties: apiCallFn = async (paginationParams) => {
    return (await this.axiosInstance.get("properties", { params: paginationParams })).data;
  }

  public getIndividuals: apiCallFn = async (paginationParams) => {
    return (await this.axiosInstance.get("individuals", { params: paginationParams })).data;
  }
}
