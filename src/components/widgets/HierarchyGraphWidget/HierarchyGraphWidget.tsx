import React from "react";
import {HierarchyGraphWidgetProps} from "../../../app/types";
import {OlsApi} from "../../../api/OlsApi";
import {useQuery} from "react-query";
import {EuiLoadingSpinner, EuiTabbedContent, EuiText} from "@elastic/eui";
import {HierarchyWidget} from "../MetadataWidget";
import {GraphViewWidget} from "../GraphViewWidget";
import {getErrorMessageToDisplay} from "../../../app/util";
import {
    classTypeNames, individualTypeNames,
    isEntity,
    isEntityTypeName,
    isOntology,
    isOntologyTypeName, propertyTypeNames
} from "../../../model/ModelTypeCheck";

//TODO: update props

function HierarchyGraphWidget(props: HierarchyGraphWidgetProps) {

    const olsApi = new OlsApi(props.api);

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useQuery(
        [props.ontologyId, props.api, props.useLegacy],
        async () => {
            if(props.ontologyId && props.entityType && isOntologyTypeName(props.entityType)) {
                return await olsApi.getOntologyObject(props.ontologyId, props.parameter, props.useLegacy);
            }
            else if(props.iri && props.entityType && isEntityTypeName(props.entityType)) {
                return await olsApi.getEntityObject(props.iri, props.entityType, props.ontologyId, props.parameter, props.useLegacy);
            }
            else {
                return await olsApi.getThingObject(props.iri, props.entityType, props.ontologyId, props.parameter, props.useLegacy);
            }
        }
        );

    return (
        <>
            {isLoading && <EuiLoadingSpinner />}
            {isError && <EuiText>{getErrorMessageToDisplay(error, "metadata")}</EuiText>}
            {isSuccess && data &&
                <>
                    {isEntity(data) &&
                        // Entity widget
                        <>
                            <EuiTabbedContent size="s" tabs={
                                [
                                    {
                                        name: "Hierarchy",
                                        id: "hierarchy",
                                        content: <HierarchyWidget
                                            // backend_type and apiKey missing here. If TabWidget/ MetadataWidget shall be used for other backend types later, this has to be provided
                                            apiUrl={props.api}
                                            iri={props.iri || data.getIri()}
                                            ontologyId={props.ontologyId || data.getOntologyId()}
                                            entityType={props.entityType || data.getType()}
                                            useLegacy={props.useLegacy}
                                            onNavigateToEntity={props.onNavigateToEntity}
                                            onNavigateToOntology={props.onNavigateToOntology}
                                            preferredRoots={props.preferredRoots}
                                            showSiblingsOnInit={props.showSiblingsOnInit}
                                            keepExpansionStates={props.keepExpansionStates}
                                        />
                                    },
                                    {
                                        name: "Graph",
                                        id: "graph",
                                        content: <GraphViewWidget
                                            api={props.api}
                                            iri={props.iri || data.getIri()}
                                            ontologyId={props.ontologyId || data.getOntologyId()}
                                            rootWalk={props.rootWalk}
                                        />
                                    }
                                ]
                            } />
                        </>
                    }
                    {isOntology(data) &&
                        // Ontology widget TODO: add lists tab
                        <>
                            <EuiTabbedContent size="l" tabs={
                                [
                                    {
                                        name: `Classes (${data.getNumClasses().toLocaleString()})`,
                                        disabled: data.getNumClasses() == 0,
                                        id: "classes",
                                        content: <HierarchyWidget
                                            // backend_type and apiKey missing here. If TabWidget/ MetadataWidget shall be used for other backend types later, this has to be provided
                                            apiUrl={props.api}
                                            ontologyId={props.ontologyId || data.getOntologyId()}
                                            entityType={classTypeNames[0]}
                                            useLegacy={props.useLegacy}
                                            onNavigateToEntity={props.onNavigateToEntity}
                                            onNavigateToOntology={props.onNavigateToOntology}
                                            preferredRoots={props.preferredRoots}
                                            showSiblingsOnInit={props.showSiblingsOnInit}
                                            keepExpansionStates={props.keepExpansionStates}
                                        />
                                    },
                                    {
                                        name: `Properties (${data.getNumProperties().toLocaleString()})`,
                                        disabled: data.getNumProperties() == 0,
                                        id: "properties",
                                        content: <HierarchyWidget
                                            // backend_type and apiKey missing here. If TabWidget/ MetadataWidget shall be used for other backend types later, this has to be provided
                                            apiUrl={props.api}
                                            ontologyId={props.ontologyId || data.getOntologyId()}
                                            entityType={propertyTypeNames[0]}
                                            useLegacy={props.useLegacy}
                                            onNavigateToEntity={props.onNavigateToEntity}
                                            onNavigateToOntology={props.onNavigateToOntology}
                                            preferredRoots={props.preferredRoots}
                                            showSiblingsOnInit={props.showSiblingsOnInit}
                                            keepExpansionStates={props.keepExpansionStates}
                                        />
                                    },
                                    {
                                        name: `Individuals (${data.getNumIndividuals().toLocaleString()})`,
                                        disabled: true || data.getNumIndividuals() == 0, // TODO: Currently always disabled due to individual hierarchy not working to date
                                        id: "individuals",
                                        content: <HierarchyWidget
                                            // backend_type and apiKey missing here. If TabWidget/ MetadataWidget shall be used for other backend types later, this has to be provided
                                            apiUrl={props.api}
                                            ontologyId={props.ontologyId || data.getOntologyId()}
                                            entityType={individualTypeNames[0]}
                                            useLegacy={props.useLegacy}
                                            onNavigateToEntity={props.onNavigateToEntity}
                                            onNavigateToOntology={props.onNavigateToOntology}
                                            preferredRoots={props.preferredRoots}
                                            showSiblingsOnInit={props.showSiblingsOnInit}
                                            keepExpansionStates={props.keepExpansionStates}
                                        />
                                    }
                                ]
                            }/>
                        </>
                    }
                </>
            }
        </>
    )
}

export { HierarchyGraphWidget }