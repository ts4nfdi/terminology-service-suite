import React from "react";
import {HierarchyGraphWidgetProps, TabWidgetProps} from "../../../app/types";
import {OlsApi} from "../../../api/OlsApi";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {EuiLoadingSpinner, EuiProvider, EuiTabbedContent, EuiText} from "@elastic/eui";
import {HierarchyWidget, TabWidget} from "../MetadataWidget";
import {GraphViewWidget} from "../GraphViewWidget";
import {getErrorMessageToDisplay} from "../../../app/util";
import {
    classTypeNames, individualTypeNames, isClass,
    isEntity,
    isEntityTypeName,
    isOntology,
    isOntologyTypeName, propertyTypeNames
} from "../../../model/ModelTypeCheck";
import {Ontology} from "../../../model/interfaces";
import {OntologyEntityListWidget} from "../OntologyEntityListWidget";
import ReactDOM from "react-dom";

function renderOntologyWidget(props: HierarchyGraphWidgetProps, data: Ontology) {
    const classTabs = [
        {
            name: "Hierarchy",
            id: "classHierarchy",
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
            name: "List",
            id: "classList",
            content: <OntologyEntityListWidget
                api={props.api}
                entityType={classTypeNames[0]}
                ontologyId={props.ontologyId || data.getOntologyId()}
                useLegacy={props.useLegacy}
            />
        }
    ];

    const propertyTabs = [
        {
            name: "Hierarchy",
            id: "propertyHierarchy",
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
            name: "List",
            id: "propertyList",
            content: <OntologyEntityListWidget
                api={props.api}
                entityType={propertyTypeNames[0]}
                ontologyId={props.ontologyId || data.getOntologyId()}
                useLegacy={props.useLegacy}
            />
        }
    ];

    const individualTabs = [
        {
            name: "Hierarchy",
            disabled: true, // permanently disabled as long as HierarchyWidget is not featured for individuals
            id: "individualHierarchy",
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
        },
        {
            name: "List",
            id: "individualList",
            content: <OntologyEntityListWidget
                api={props.api}
                entityType={individualTypeNames[0]}
                ontologyId={props.ontologyId || data.getOntologyId()}
                useLegacy={props.useLegacy}
            />
        }
    ];

    const ontologyTabs = [
        {
            name: `Classes (${data.getNumClasses().toLocaleString()})`,
            disabled: data.getNumClasses() == 0,
            id: "classes",
            content: <EuiTabbedContent size="s" tabs={classTabs}/>
        },
        {
            name: `Properties (${data.getNumProperties().toLocaleString()})`,
            disabled: data.getNumProperties() == 0,
            id: "properties",
            content: <EuiTabbedContent size="s" tabs={propertyTabs}/>
        },
        {
            name: `Individuals (${data.getNumIndividuals().toLocaleString()})`,
            disabled: data.getNumIndividuals() == 0,
            id: "individuals",
            content: <EuiTabbedContent size="s" tabs={individualTabs} initialSelectedTab={individualTabs[1]}/>
        }
    ]

    return <EuiTabbedContent size="l" tabs={ontologyTabs} initialSelectedTab={ontologyTabs[0]}/>
}

function HierarchyGraphWidget(props: HierarchyGraphWidgetProps) {

    const olsApi = new OlsApi(props.api);

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useQuery(
        [props],
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
                                        id: "entityHierarchy",
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
                                        id: "entityGraph",
                                        disabled: !isClass(data),
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
                        // Ontology widget
                        renderOntologyWidget(props, data)
                    }
                </>
            }
        </>
    )
}

function createHierarchyGraph(props: HierarchyGraphWidgetProps, container: Element, callback?: ()=>void) {
    ReactDOM.render(WrappedHierarchyGraphWidget(props), container, callback);
}

function WrappedHierarchyGraphWidget(props: HierarchyGraphWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <HierarchyGraphWidget
                    api={props.api}
                    entityType={props.entityType}
                    ontologyId={props.ontologyId}
                    iri={props.iri}
                    parameter={props.parameter}
                    useLegacy={props.useLegacy}
                    includeObsoleteEntities={props.includeObsoleteEntities}
                    preferredRoots={props.preferredRoots}
                    showSiblingsOnInit={props.showSiblingsOnInit}
                    keepExpansionStates={props.keepExpansionStates}
                    onNavigateToEntity={props.onNavigateToEntity}
                    onNavigateToOntology={props.onNavigateToOntology}
                    onNavigateToDisambiguate={props.onNavigateToDisambiguate}
                    rootWalk={props.rootWalk}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { HierarchyGraphWidget, createHierarchyGraph }