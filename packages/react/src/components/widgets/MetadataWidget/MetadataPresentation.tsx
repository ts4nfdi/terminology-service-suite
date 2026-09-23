"use client";
import { EuiFlexGroup, EuiFlexItem, EuiLink } from "@elastic/eui";
import { MetadataPresentationProps } from "../../../app";
import "../../../style/ts4nfdiStyles/ts4nfdiMetadataStyle.css";
import "../../../style/tssStyles.css";
import { BreadcrumbPresentation } from "./BreadcrumbWidget";
import { DescriptionPresentation } from "./DescriptionWidget/DescriptionPresentation";
import { EntityDefinedByPresentation } from "./EntityDefinedByWidget/EntityDefinedByPresentation";
import { EntityOntoListPresentation } from "./EntityOntoListWidget/EntityOntoListPresentation";
import { IriWidget } from "./IriWidget";
import { TabWidget } from "./TabWidget";
import { TitlePresentation } from "./TitleWidget/TitlePresentation";

function MetadataPresentation(props: MetadataPresentationProps) {
  const {
    label,
    shortForm,
    description,
    ontoList,
    definedBy,
    isLoading,
    error,
    termLink,
    iriText,
    externalIcon,
    urlPrefix,
    copyButton,
    tabProps,
    colorFirst,
    descText,
    className,
    entityType,
    ontologyId,
    iri,
    onNavigateToOntology,
    colorSecond,
  } = props;
  const finalClassName = className || "ts4nfdi-metadata-style";

  return (
    <div className={finalClassName} data-testid="metadata">
      <EuiFlexGroup direction="column" gutterSize={"m"}>
        <EuiFlexItem grow={false}>
          {termLink ? (
            <EuiLink href={termLink} target="_blank" external={false}>
              <TitlePresentation
                title={label}
                className={`${finalClassName}-title`}
                isLoading={isLoading}
                error={error}
              />
            </EuiLink>
          ) : (
            <TitlePresentation
              title={label}
              className={`${finalClassName}-title`}
              isLoading={isLoading}
              error={error}
            />
          )}
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <span>
            <BreadcrumbPresentation
              onNavigateToOntology={props.onNavigateToOntology}
              ontologyId={ontologyId}
              shortForm={shortForm}
              className={`${finalClassName}-breadcrumb`}
              colorFirst={props.colorFirst}
              colorSecond={props.colorSecond}
            />
          </span>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <IriWidget
                    iri={iri}
                    className={`${finalClassName}-iri`}
                    iriText={props.iriText}
                    urlPrefix={props.urlPrefix}
                    externalIcon={props.externalIcon}
                    copyButton={props.copyButton}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem>
          <DescriptionPresentation
            description={description ?? ""}
            className={`${finalClassName}-description`}
            isLoading={isLoading}
            error={error}
            descText={props.descText}
          />
        </EuiFlexItem>

        {((ontoList ?? []).length > 0 || (definedBy ?? []).length > 0) && (
          <div style={{ margin: "0 12px 0" }}>
            <EntityOntoListPresentation
              iri={props.iri}
              label={label || ""}
              ontolist={ontoList ?? []}
              entityType={entityType}
              onNavigateToOntology={onNavigateToOntology}
              className={`${finalClassName}-entity-onto-list`}
            />
            <EntityDefinedByPresentation
              iri={props.iri}
              ontolist={definedBy ?? []}
              label={label || ""}
              entityType={entityType}
              onNavigateToOntology={onNavigateToOntology}
              className={`${finalClassName}-entity-defined-by`}
            />
          </div>
        )}

        {tabProps && (
          <EuiFlexItem>
            <TabWidget {...tabProps} className={`${finalClassName}-tab`} />
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    </div>
  );
}
export { MetadataPresentation };
