import { EuiCard, EuiCardProps, EuiFlexGroup, EuiFlexItem, EuiLink, EuiSpacer, EuiTitle } from "@elastic/eui";
import React from "react";
import { BreadcrumbWidget, DescriptionWidget, IriWidget } from "../MetadataWidget";
import { switchEntityType } from '../../../utils/ApiUtils'


export type MetadataCompactProps = {
    api: string;
    result: any;
    targetLink?: string;
} & Partial<Omit<EuiCardProps, "layout">>;


function MetadataCompact(props: MetadataCompactProps) {
    const {
        api,
        result,
        targetLink,
        ...rest
    } = props;

    console.dir(result)

    return (
        <EuiCard
            textAlign="left"
            {...rest}
            href={targetLink ?
                (result.type != "ontology" ?
                    targetLink + "/ontologies/" + result.ontology_name + "/" + switchEntityType(result.type) + "?iri=" + result.iri
                    : targetLink + "/ontologies/" + result.ontology_name)
                : undefined}
            title={
                <EuiFlexGroup>
                    <EuiFlexItem grow={false}>
                        <EuiTitle><h2>{result.label}</h2></EuiTitle>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        {result.type != "ontology" && <BreadcrumbWidget api={api} iri={result.iri}/>}
                    </EuiFlexItem>
                </EuiFlexGroup>
            }
            children={
                <>
                    {result.type != "ontology" ? <IriWidget api={api} iri={result.iri}/> :
                        <EuiLink href={result.iri} target="_blank"> {/*TODO update IriWidget*/}
                            {result.iri}
                        </EuiLink>}
                    <EuiSpacer size="s"/>
                    <DescriptionWidget api={api} ontologyID={result.ontology_name} iri={result.iri}
                                       objType={result.type}/>
                </>
            }
        />

    );
}

export { MetadataCompact };
