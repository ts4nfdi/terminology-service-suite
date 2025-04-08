import * as React from "react";
import { OlsApi } from "../../../../api/OlsApi";
import { BreadcrumbPresentation } from "../../../../components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbPresentation";
import { BreadcrumbWidgetProps } from "../../../../app";

export default async function BreadcrumbWidget({
  api,
  useLegacy,
  iri,
  ontologyId,
  entityType,
  parameter,
  ...props
}: BreadcrumbWidgetProps) {
  /**
   * A SSR variant of the BreadcrumbWidget component using the same props API.
   */
  const olsApi = new OlsApi(api);
  const entityObject = await olsApi.getEntityObject(
    iri,
    entityType,
    ontologyId,
    parameter,
    useLegacy
  );
  return (
    <BreadcrumbPresentation
      ontologyId={entityObject.getOntologyId()}
      ontologyName={entityObject.getOntologyId()}
      shortForm={entityObject.getShortForm()}
      {...props}
    />
  );
}
