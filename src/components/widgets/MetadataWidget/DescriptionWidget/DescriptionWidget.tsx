import React from "react";
import { useQuery } from "react-query";
import {EuiFlexItem, EuiLoadingSpinner, EuiText} from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { OlsApi } from "../../../../api/OlsApi";
import {getPreferredOntologyJSON} from "../index";

export interface DescriptionWidgetProps extends EuiTextProps {
  iri?: string;
  ontologyId?: string;
  api: string;
  descText?: string;
  entityType:
    | "ontology"
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
  parameter?: string
}

const NO_DESCRIPTION = "No description available.";

async function getDescription(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string): Promise<any> {
  if (entityType == "ontology"){
    if(!ontologyId) {
      console.error(Error("ontology id has to be provided"))
      return {description: NO_DESCRIPTION}
    }
    else {
      const response = await olsApi.getOntology(undefined, undefined, {
        ontologyId: ontologyId
      }, parameter)
          .catch((error) => console.log(error));
      return {
        description: response?.config.description || NO_DESCRIPTION
      }
    }
  }
  if (entityType === "term" || entityType === "property" || entityType === "individual") {
    if(!iri) {
      console.error(Error("iri has to be provided"))
      return {description: NO_DESCRIPTION}
    }
    else {
      const response = await getPreferredOntologyJSON(olsApi, entityType, ontologyId, iri, parameter)
      return {
        description: response['description'] || NO_DESCRIPTION,
        inDefiningOntology: response['is_defining_ontology'],
        ontology: response['ontology_name']
      }
    }
  }
  //unacceptable object type
  console.error(Error("Unexpected entity type. Should be one of 'ontology', 'term', 'class', 'individual', 'property'"));
  return {
    description: NO_DESCRIPTION
  };
}

function DescriptionWidget(props: DescriptionWidgetProps) {
  const { api, ontologyId, iri, descText, entityType, parameter, ...rest } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: response,
    isLoading,
    isSuccess,
  } = useQuery([api, "description", fixedEntityType, ontologyId, iri, parameter], () => {return getDescription(olsApi, fixedEntityType, ontologyId, iri, parameter); });

  return (
    <>
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isSuccess &&
          <>
            {
                !props.ontologyId && !descText && !response.inDefiningOntology && fixedEntityType !== "ontology" &&
                <EuiFlexItem>
                  <EuiText>
                    <i>Defining ontology not available. Showing occurrence inside {response.ontology} instead.</i>
                  </EuiText>
                </EuiFlexItem>
            }
            <EuiText {...rest}>{descText || response.description}</EuiText>
          </>
      }
    </>
  );
}

export { DescriptionWidget };
