import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ThingTypeName } from '../../model/ModelTypeCheck';
import { Thing } from '../../model/interfaces';
export declare class OlsThingApi {
    protected axiosInstance: AxiosInstance;
    private entityService;
    private ontologyService;
    constructor(api: string | AxiosInstance);
    protected makeCall(url: string, config: AxiosRequestConfig<any> | undefined, useLegacy: boolean): Promise<any>;
    getThingObject(iri?: string, thingType?: ThingTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<Thing>;
}
