import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiTitle } from "@elastic/eui";
import React from "react";
import { BreadcrumbWidget, DescriptionWidget, IriWidget } from "../MetadataWidget";
import { MetadataCompactProps } from "../../../app/types";
import { pluralizeType } from "../../../app/util";
import { BreadcrumbPresentation } from "../MetadataWidget/BreadcrumbWidget/BreadcrumbPresentation";
import { DescriptionPresentation } from "../MetadataWidget/DescriptionWidget/DescriptionPresentation";

function MetadataCompactPresentation(props: MetadataCompactProps) {
  const {
    iri,
    thingType,
    ontologyId,
    label,
    short_form,
    description,
    targetLink,
    ...rest
  } = props;

  return (
    <EuiCard
      textAlign="left"
      {...rest}
      href={targetLink ?
        (thingType != "ontology" ?
          targetLink + "ontologies/" + ontologyId + "/" + pluralizeType(thingType, true) + "?iri=" + encodeURIComponent(iri)
          : targetLink + "ontologies/" + ontologyId)
        : undefined}
      title={
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiTitle><h2>{label}</h2></EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            {thingType != "ontology" &&
              <BreadcrumbPresentation
                isDefiningOntology
                ontologyName={ontologyId}
                shortForm={short_form}
              />
            }
          </EuiFlexItem>
        </EuiFlexGroup>
      }
    >
      {thingType != "ontology" ? <IriWidget iri={iri} /> : undefined}
      <EuiSpacer size="s" />
      <DescriptionPresentation description={description} />
    </EuiCard>

  );
}

export { MetadataCompactPresentation };
