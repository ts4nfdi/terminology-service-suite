import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class JskosMappingApi {
    protected axiosInstance: AxiosInstance;
    constructor(api: string | AxiosInstance);
    protected makeCall(url: string, config?: AxiosRequestConfig): Promise<any>;
    getMappingsByFrom(iri: string): Promise<any>;
    getMappingsByTo(iri: string): Promise<any>;
    getMappingsInBothDirections(iri: string): Promise<any>;
}
