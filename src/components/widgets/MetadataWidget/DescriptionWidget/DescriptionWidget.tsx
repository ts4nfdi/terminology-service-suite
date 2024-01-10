import React from "react";
import { useQuery } from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { OlsApi } from "../../../../api/OlsApi";
import { getErrorMessageToDisplay, getPreferredOntologyJSON } from "../../../../utils/helper";

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
      throw Error("ontology id has to be provided")
    }
    else {
      const response = await olsApi.getOntology(undefined, undefined, {
        ontologyId: ontologyId
      }, parameter)
      return {
        description: response?.config.description || NO_DESCRIPTION
      }
    }
  }
  if (entityType === "term" || entityType === "property" || entityType === "individual") {
    if(!iri) {
      throw Error("iri has to be provided")
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
  throw Error("Unexpected entity type. Should be one of 'ontology', 'term', 'class', 'individual', 'property'");
}

function DescriptionWidget(props: DescriptionWidgetProps) {
  const { api, ontologyId, iri, descText, entityType, parameter, ...rest } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: response,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery([api, "description", fixedEntityType, ontologyId, iri, parameter], () => {return getDescription(olsApi, fixedEntityType, ontologyId, iri, parameter); });

    // TODO: Should DescriptionWidget show the following info message if defining ontology is not available (placed inside isSuccess span)?
    /*{
      !props.ontologyId && !descText && !response.inDefiningOntology && fixedEntityType !== "ontology" &&
      <EuiFlexItem>
        <EuiText>
          <i>Defining ontology not available. Showing occurrence inside {response.ontology} instead.</i>
        </EuiText>
      </EuiFlexItem>
    }*/

  return (
    <>
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isSuccess &&
          <>
            <EuiText {...rest}>{descText || response.description}</EuiText>
          </>
      }
      {isError && <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>}
    </>
  );
}

export { DescriptionWidget };
