import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getUseLegacy } from "../../app/util";
import {
  entityTypeNames,
  isEntityTypeName,
  isOntologyTypeName,
  ontologyTypeNames,
  ThingTypeName,
  thingTypeNames,
} from "../../model/ModelTypeCheck";
import { Thing } from "../../model/interfaces";
import { check_for_errors } from "../../utils/olsApiUtils";
import { OlsEntityApi } from "./OlsEntityApi";
import { OlsOntologyApi } from "./OlsOntologyApi";

export class OlsThingApi {
  protected axiosInstance: AxiosInstance;
  private entityService: OlsEntityApi;
  private ontologyService: OlsOntologyApi;

  constructor(api: string | AxiosInstance) {
    this.axiosInstance =
      typeof api === "string"
        ? axios.create({
            baseURL: api,
            headers: { Accept: "application/json" },
          })
        : api;
    this.entityService = new OlsEntityApi(this.axiosInstance);
    this.ontologyService = new OlsOntologyApi(this.axiosInstance);
  }

  protected async makeCall(
    url: string,
    config: AxiosRequestConfig<any> | undefined,
    useLegacy: boolean,
  ) {
    const apiVersionPrefix = getUseLegacy(useLegacy) ? "" : "v2/";
    const response = (
      await this.axiosInstance.get(apiVersionPrefix + url, config)
    ).data;
    return check_for_errors(response);
  }

  public async getThingObject(
    iri?: string,
    thingType?: ThingTypeName,
    ontologyId?: string,
    parameter?: string,
    useLegacy?: boolean,
  ): Promise<Thing> {
    if (thingType) {
      if (isOntologyTypeName(thingType)) {
        if (!ontologyId)
          throw new Error(
            `ontologyId has to be provided if thingType in {"${ontologyTypeNames.join(
              '", "',
            )}"}.`,
          );
        else
          return await this.ontologyService.getOntologyObject(
            ontologyId,
            parameter,
            useLegacy,
          );
      } else if (isEntityTypeName(thingType)) {
        if (!iri)
          throw new Error(
            `iri has to be provided if thingType in {"${entityTypeNames.join(
              '", "',
            )}"}.`,
          );
        else
          return await this.entityService.getEntityObject(
            iri,
            thingType,
            ontologyId,
            parameter,
            useLegacy,
          );
      } else
        throw new Error(
          `Unsupported thingType "${thingType}" provided. Must be in {"${thingTypeNames.join(
            '", "',
          )}"}.`,
        );
    } else {
      if (!iri && ontologyId) {
        return await this.ontologyService.getOntologyObject(
          ontologyId,
          parameter,
          useLegacy,
        );
      } else if (iri) {
        return await this.entityService.getEntityObject(
          iri,
          thingType,
          ontologyId,
          parameter,
          useLegacy,
        );
      } else
        throw new Error(
          `iri or ontologyId has to be provided if thingType is not provided.`,
        );
    }
  }
}
