import {OlsApi} from "../../../../../api/OlsApi";
import {BreadcrumbWidgetProps} from "../../../../../app";
import {Entity} from "../../../../../model/interfaces";

export async function getBreadcrumbData({
                                                   api,
                                                   useLegacy,
                                                   iri,
                                                   ontologyId,
                                                   entityType,
                                                   parameter,
                                                   ...props
                                               }: BreadcrumbWidgetProps) {
    /**
     * Fetches the EntityObject using the same properties as the BreadcrumbWidget
     */
    const olsApi = new OlsApi(api);
    const entityObject = await olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        useLegacy
    );
    return entityObject;
}