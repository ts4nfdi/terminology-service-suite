import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiTitle } from "@elastic/eui";
import React from "react";
import { BreadcrumbWidget, DescriptionWidget, IriWidget } from "../MetadataWidget";
import { switchEntityType } from '../../../utils/ApiUtils'
import {MetadataCompactProps} from "../../../utils/types";

function MetadataCompact(props: MetadataCompactProps) {
    const {
        api,
        result,
        targetLink,
        ...rest
    } = props;

    return (
        <EuiCard
            textAlign="left"
            {...rest}
            href={targetLink ?
                (result.type != "ontology" ?
                    targetLink + "ontologies/" + result.ontology_name + "/" + switchEntityType(result.type) + "?iri=" + result.iri
                    : targetLink + "ontologies/" + result.ontology_name)
                : undefined}
            title={
                <EuiFlexGroup>
                    <EuiFlexItem grow={false}>
                        <EuiTitle><h2>{result.label}</h2></EuiTitle>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        {result.type != "ontology" && <BreadcrumbWidget api={api} iri={result.iri} entityType={result.type} ontologyId={result.ontology_name}/>}
                    </EuiFlexItem>
                </EuiFlexGroup>
            }
        >
            {result.type != "ontology" ? <IriWidget iri={result.iri}/> : undefined}
            <EuiSpacer size="s"/>
            <DescriptionWidget api={api} ontologyId={result.ontology_name} iri={result.iri} thingType={result.type}/>
        </EuiCard>

    );
}

export { MetadataCompact };
