import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import React from "react";
import {
  BreadcrumbWidget,
  DescriptionWidget,
  IriWidget,
} from "../MetadataWidget";
import { MetadataCompactProps } from "../../../app/types";
import { pluralizeType } from "../../../app/util";

function MetadataCompact(props: MetadataCompactProps) {
  const { api, result, targetLink, className, ...rest } = props;

  return (
    <div className={className}>
      <EuiCard
        textAlign="left"
        {...rest}
        href={
          targetLink
            ? result.type != "ontology"
              ? targetLink +
                "ontologies/" +
                result.ontology_name +
                "/" +
                pluralizeType(result.type, true) +
                "?iri=" +
                encodeURIComponent(result.iri)
              : targetLink + "ontologies/" + result.ontology_name
            : undefined
        }
        titleElement={"span"}
        title={
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <EuiTitle>
                <h2>{result.label}</h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem>
              {result.type != "ontology" && (
                <BreadcrumbWidget
                  api={api}
                  iri={result.iri}
                  entityType={result.type}
                  ontologyId={result.ontology_name}
                  className={`${className}-breadcrumb`}
                />
              )}
            </EuiFlexItem>
          </EuiFlexGroup>
        }
      >
        {result.type != "ontology" ? (
          <IriWidget iri={result.iri} className={`${className}-iri`} />
        ) : undefined}
        <EuiSpacer size="s" />
        <DescriptionWidget
          api={api}
          ontologyId={result.ontology_name}
          iri={result.iri}
          thingType={result.type}
          className={`${className}-description`}
        />
      </EuiCard>
    </div>
  );
}

export { MetadataCompact };
