import { Ontologies, Ontology } from '../../model/interfaces';
import { apiCallFn } from '../../utils/olsApiTypes';
import { OlsBaseApi } from './OlsBaseApi';
export declare class OlsOntologyApi extends OlsBaseApi {
    getOntologies: apiCallFn;
    /**
     * Fetch all ontologies. Currently only available for useLegacy since parameters aren't allowed in the OLS v2 API ontologies endpoint
     * @param parameter
     * @param useLegacy
     */
    getOntologiesData(parameter?: string, useLegacy?: boolean): Promise<Ontologies>;
    getOntology: apiCallFn;
    /**
     * Returns an Ontology object.
     * Indirectly fetches the response JSON for the specified ontologyId, parameter and API version (useLegacy).
     *
     * @param ontologyId
     * @param parameter
     * @param useLegacy
     */
    getOntologyObject(ontologyId: string, parameter?: string, useLegacy?: boolean): Promise<Ontology>;
}
