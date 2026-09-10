import { EuiCard, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { MetadataCompactProps } from "../../../app";
import { getErrorMessageToDisplay, tryPluralizeType } from "../../../app/util";
import { Entity } from "../../../model/interfaces";
import { EntityTypeName } from "../../../model/ModelTypeCheck";
import {
  createModelObject,
  getPreferredOntologyJSON,
} from "../../../model/ols-model/ModelObjectCreator";
import {
  BreadcrumbWidget,
  DescriptionWidget,
  IriWidget,
} from "../MetadataWidget";
import { EntityDefinedByPresentation } from "../MetadataWidget/EntityDefinedByWidget/EntityDefinedByPresentation";
import { EntityOntoListPresentation } from "../MetadataWidget/EntityOntoListWidget/EntityOntoListPresentation";

type MetadataInfo = {
  entity: Entity;
  ontoList: string[];
  definedBy: string[];
};

function MetadataCompact(props: MetadataCompactProps): React.JSX.Element {
  const {
    api,
    result,
    targetLink,
    className,
    parameter,
    entityType,
    iri,
    ontologyId,
    useLegacy,
    onNavigateToOntology,
    OnNavigateToSearchResult,
    ...rest
  } = props;
  const olsApi = new OlsEntityApi(api);

  const { data, isError, error } = useQuery<MetadataInfo>(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      let entity: Entity, ontoList: string[], definedBy: string[];
      if (useLegacy) {
        const embedded = (
          await olsApi.getEntityResponse(
            iri,
            entityType,
            undefined,
            parameter,
            useLegacy,
          )
        )["_embedded"];
        entity = createModelObject({
          _embedded: {
            [Object.keys(embedded)[0]]: getPreferredOntologyJSON(
              embedded[Object.keys(embedded)[0]],
              useLegacy,
              ontologyId,
            ),
          },
        }) as Entity;
        ontoList = embedded[Object.keys(embedded)[0]].map(
          (entityInOntology: any) => entityInOntology["ontology_name"],
        );
        definedBy = embedded[Object.keys(embedded)[0]]
          .filter(
            (entityInOntology: any) => entityInOntology["is_defining_ontology"],
          )
          .map((entityInOntology: any) => entityInOntology["ontology_name"]);
      } else {
        entity = await olsApi.getEntityObject(
          iri,
          entityType,
          ontologyId,
          parameter,
          useLegacy,
        );
        ontoList = entity.getAppearsIn();
        definedBy = entity.getDefinedBy();
      }

      definedBy = definedBy
        .filter((onto: string) => onto != entity.getOntologyId())
        .sort();
      ontoList = ontoList
        .filter(
          (onto: string) =>
            onto != entity.getOntologyId() && !definedBy.includes(onto),
        )
        .sort();

      return {
        entity: entity,
        ontoList: ontoList,
        definedBy: definedBy,
      } as MetadataInfo;
    },
  );

  const ontologyHref = targetLink
    ? targetLink + "ontologies/" + result.ontology_name
    : undefined;
  // undefined for results carrying an unknown type - those link to the ontology instead
  const pluralizedType =
    result.type != "ontology" ? tryPluralizeType(result.type, true) : undefined;
  const resultHref =
    ontologyHref && pluralizedType
      ? ontologyHref +
        "/" +
        pluralizedType +
        "?iri=" +
        encodeURIComponent(result.iri)
      : ontologyHref;

  return (
    <div className={className}>
      <EuiCard
        textAlign="left"
        onClick={
          typeof OnNavigateToSearchResult === "function"
            ? (event: React.MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
                event.stopPropagation();
                OnNavigateToSearchResult(result);
              }
            : undefined
        }
        {...rest}
        href={resultHref}
        titleElement={"span"}
        title={
          <div>
            <EuiSpacer size="m" />
            <EuiTitle>
              <h2>{result.label}</h2>
            </EuiTitle>
          </div>
        }
      >
        {result.type != "ontology" && (
          <BreadcrumbWidget
            api={api}
            iri={result.iri}
            entityType={result.type}
            ontologyId={result.ontology_name}
            className={`${className}-breadcrumb`}
            onNavigateToOntology={onNavigateToOntology}
            useLegacy={useLegacy}
            parameter={parameter}
          />
        )}

        <EuiSpacer size="s" />

        {result.type != "ontology" ? (
          <IriWidget iri={result.iri} className={`${className}-iri`} />
        ) : undefined}

        <EuiSpacer size="s" />

        {isError && (
          <EuiText size="xs" color="subdued">
            {getErrorMessageToDisplay(error, "ontology information")}
          </EuiText>
        )}

        {data && (
          <div style={{ maxWidth: 600 }}>
            <EntityOntoListPresentation
              iri={result.iri}
              label={result.label || ""}
              ontolist={data.ontoList}
              entityType={(result.type || "class") as EntityTypeName}
              className={`${className}-entity-onto-list`}
              onNavigateToOntology={onNavigateToOntology}
            />
            <EntityDefinedByPresentation
              iri={result.iri}
              ontolist={data.definedBy}
              label={result.label || ""}
              entityType={(result.type || "class") as EntityTypeName}
              className={`${className}-entity-defined-by`}
              onNavigateToOntology={onNavigateToOntology}
            />
          </div>
        )}

        <EuiSpacer size="s" />

        <DescriptionWidget
          api={api}
          ontologyId={result.ontology_name}
          iri={result.iri}
          thingType={result.type}
          className={`${className}-description`}
          useLegacy={useLegacy}
          parameter={parameter}
        />
      </EuiCard>
    </div>
  );
}

export { MetadataCompact };
