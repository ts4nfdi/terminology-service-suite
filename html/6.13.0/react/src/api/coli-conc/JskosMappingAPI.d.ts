import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class JskosMappingApi {
    protected axiosInstance: AxiosInstance;
    constructor(api: string | AxiosInstance);
    protected makeCall(url: string, config?: AxiosRequestConfig): Promise<any>;
    getMappingsByFrom(iri: string): Promise<any>;
}
