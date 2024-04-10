import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiTitle } from "@elastic/eui";
import React from "react";
import { BreadcrumbWidget, DescriptionWidget, IriWidget } from "../MetadataWidget";
import { switchEntityType } from '../../../utils/ApiUtils'
import {MetadataCompactProps} from "../../../utils/types";

function MetadataCompact(props: MetadataCompactProps) {
    const {
        api,
        result,
        onNavigateToEntity,
        ...rest
    } = props;

    // Wrapper function to match the expected type signature for the EuiCard's onClick handler
    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        const ontologyId = result.ontology_name;
        const entityType = switchEntityType(result.type);
        const iri = result.iri;

        if (onNavigateToEntity) {
            onNavigateToEntity(ontologyId, entityType, iri);
        }
    };


    return (
        <EuiCard
            textAlign="left"
            {...rest}
            onClick={handleClick}
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
