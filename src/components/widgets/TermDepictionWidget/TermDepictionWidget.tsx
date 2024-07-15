import React from "react";
import ReactDOM from "react-dom";
import { TermDepictionWidgetProps } from "../../../app/types";
import { OlsApi } from "../../../api/OlsApi";
import { Thing } from "../../../model/interfaces";
import { useQuery, QueryClient, QueryClientProvider} from "react-query";
import {EuiLoadingSpinner, EuiProvider, EuiText, EuiImage} from "@elastic/eui";
import { getErrorMessageToDisplay } from "../../../app/util";


const TermDepictionWidget: React.FC<TermDepictionWidgetProps> = (props) => {
    const {api, iri, ontologyId, useLegacy} = props;
    const olsApi = new OlsApi(api);

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
      } = useQuery<Thing>(
        ["termDepiction", api, iri, ontologyId, useLegacy],
        async () => {
          return olsApi.getThingObject(iri, "class", ontologyId, "", useLegacy);          
        }
      );
      
    
    return (
        <>
        {isLoading && <EuiLoadingSpinner size="s" />}
        {isSuccess && data &&
              <>              
              <EuiImage
                size="m"
                hasShadow
                allowFullScreen                
                alt={data.getDepictionUrl()}
                src={data.getDepictionUrl()}                
              />
              <p><small>Click to expand.</small></p>
              </>            
        }
        {isError && <EuiText>{getErrorMessageToDisplay(error, "depiction")}</EuiText>}
        </>
    );
}


function createDepiction(props: TermDepictionWidgetProps, container: Element, callback?: ()=>void) {
  ReactDOM.render(WrappedTermDepictionWidget(props), container, callback);
}

function WrappedTermDepictionWidget(props: TermDepictionWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
          <QueryClientProvider client={queryClient}>
              <TermDepictionWidget
                  api={props.api}                  
                  iri={props.iri}
                  ontologyId={props.ontologyId}                  
                  useLegacy={props.useLegacy}                  
              />
          </QueryClientProvider>
      </EuiProvider>
  )
}

export default TermDepictionWidget;
export {createDepiction};