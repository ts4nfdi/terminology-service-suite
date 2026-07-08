import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class OlsBaseApi {
    protected axiosInstance: AxiosInstance;
    constructor(api: string | AxiosInstance);
    protected makeCall(url: string, config: AxiosRequestConfig<any> | undefined, useLegacy: boolean): Promise<any>;
}
