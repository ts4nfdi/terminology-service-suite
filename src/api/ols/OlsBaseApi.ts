import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {getUseLegacy} from "../../app/util";
import {check_for_errors} from "../../utils/olsApiUtils";

export class OlsBaseApi {
    protected axiosInstance: AxiosInstance;

    constructor(api: string | AxiosInstance) {
        this.axiosInstance = typeof api === 'string'
            ? axios.create({ baseURL: api, headers: { Accept: "application/json" } })
            : api;
    }

    protected async makeCall(
        url: string,
        config: AxiosRequestConfig<any> | undefined,
        useLegacy: boolean,
    ) {
        const apiVersionPrefix = getUseLegacy(useLegacy) ? "" : "v2/";
        const response = (await this.axiosInstance.get(apiVersionPrefix + url, config)).data;
        return check_for_errors(response);
    }
}