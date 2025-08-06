import { OlsBaseApi } from './OlsBaseApi';
import {apiCallFn} from "../../utils/olsApiTypes";
import {buildOtherParams, buildParamsForGet} from "../../utils/olsApiUtils";
import {Ontologies, Ontology} from "../../model/interfaces";
import {createModelObject} from "../../model/ModelObjectCreator";
import {OLS3Ontologies} from "../../model/ols3-model";
import {OLS4Ontologies} from "../../model/ols4-model";
import {getUseLegacy} from "../../app/util";

export class OlsOntologyApi extends OlsBaseApi {
    public getOntologies: apiCallFn = async (
        paginationParams,
        sortingParams,
        contentParams,
        parameter,
        useLegacy = true,
    ) => {
        return this.makeCall(
            "ontologies",
            {
                params: buildParamsForGet(
                    paginationParams,
                    sortingParams,
                    contentParams,
                    parameter,
                ),
            },
            useLegacy,
        );
    };

    /**
     * Fetch all ontologies. Currently only available for useLegacy since parameters aren't allowed in the OLS v2 API ontologies endpoint
     * @param parameter
     * @param useLegacy
     */
    public async getOntologiesData(
        parameter?: string,
        useLegacy = true,
    ): Promise<Ontologies> {
        let response;
        let ontologiesData: Ontology[] = [];

        let pageNum = 0;
        const pageSize = 500;

        if (useLegacy) {
            do {
                response = await this.getOntologies(
                    {size: pageSize.toString(), page: pageNum.toString()},
                    undefined,
                    undefined,
                    parameter,
                    useLegacy,
                ); // assuming there are no more than 500 ontologies

                if (
                    !response ||
                    !response["_embedded"] ||
                    !response["_embedded"]["ontologies"]
                ) {
                    throw new Error("Ontologies data not found"); //TODO consistent error handling
                } else {
                    ontologiesData = ontologiesData.concat(
                        response["_embedded"]["ontologies"].map((ontologyData: any) => {
                            return createModelObject(ontologyData);
                        }),
                    );
                }

                pageNum += 1;
            } while (pageNum < response["page"]["totalPages"]);

            return new OLS3Ontologies(ontologiesData);
        } else {
            do {
                response = await this.getOntologies(
                    {size: pageSize.toString(), page: pageNum.toString()},
                    undefined,
                    undefined,
                    parameter,
                    useLegacy,
                ); // assuming there are no more than 500 ontologies

                if (!response || !response["elements"]) {
                    throw new Error("Ontologies data not found"); //TODO consistent error handling
                } else {
                    ontologiesData = ontologiesData.concat(
                        response["elements"].map((ontologyData: any) => {
                            return createModelObject(ontologyData);
                        }),
                    );
                }

                pageNum += 1;
            } while (pageNum < response["totalPages"]);

            return new OLS4Ontologies(ontologiesData);
        }
    }

    public getOntology: apiCallFn = async (
        paginationParams,
        sortingParams,
        contentParams,
        parameter,
        useLegacy?: boolean,
    ) => {
        const params = {
            ...buildOtherParams(parameter),
        };
        return this.makeCall(
            "ontologies/" + contentParams?.ontologyId,
            params,
            getUseLegacy(useLegacy),
        );
    };

    /**
     * Returns an Ontology object.
     * Indirectly fetches the response JSON for the specified ontologyId, parameter and API version (useLegacy).
     *
     * @param ontologyId
     * @param parameter
     * @param useLegacy
     */
    public async getOntologyObject(
        ontologyId: string,
        parameter?: string,
        useLegacy?: boolean,
    ): Promise<Ontology> {
        const response = await this.getOntology(
            undefined,
            undefined,
            {ontologyId: ontologyId},
            parameter,
            useLegacy,
        );

        return createModelObject(response) as Ontology;
    }
}