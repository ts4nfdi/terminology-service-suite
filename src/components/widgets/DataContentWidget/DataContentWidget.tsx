import React from "react";
import {EuiCard,
  EuiLoadingSpinner,
  EuiText,
  useEuiTheme,
} from "@elastic/eui";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import {Ontologies} from "../../../model/interfaces";
import {DataContentWidgetProps} from "../../../app/types";
import ReactDOM from "react-dom";

function DataContentWidget(props: DataContentWidgetProps) {
  const { api, parameter, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: ontologiesData,
    isLoading,
    isError,
    dataUpdatedAt
  } = useQuery<Ontologies>(
    ["ontologiesData", api, parameter],
    async () => {
      return olsApi.getOntologiesData(
        props.parameter
      );
    }
  );

  const { euiTheme } = useEuiTheme()
  const { base, colors, font } = euiTheme;

  const fontBodyScale = font.scale[font.body.scale];
  const fontReset = {
    fontFamily: font.family,
    fontSize: `${
      font.defaultUnits === 'px' ? fontBodyScale * base : fontBodyScale
    }${font.defaultUnits}`,
    lineHeight: base / (fontBodyScale * base),
    fontWeight: font.weight[font.body.weight],
  };

  return (
    <>
        <EuiCard
          css={{
            ...fontReset,
            color: euiTheme.colors.text,
            padding: "16px",
            ".euiCard__title": {
              marginTop: "4px",
              marginBottom: "-0.4em",
            },
        }}
          title="Data Content"
          description={
          <div
            style={{
              fontSize: "0.9em",
              marginBottom: "0.4em"
          }}
          >
            {dataUpdatedAt ? `Updated ${new Date(dataUpdatedAt).toLocaleString()}` : ""}
          </div>
        }
          layout="horizontal"
        >
          <EuiText
            {...rest}
            css={{
              ul: {
                paddingLeft: "25px",
                margin: 0,
              },
              li: {
                marginBottom: "4px",
                fontSize: "1.2em",
              },
            }}
          >
            {(isError) && <EuiText>No data content available</EuiText>}
            {isLoading
              ? <EuiLoadingSpinner size="s" />
              :
              <ul>
                {(ontologiesData?.getTotalOntologies()
                  ? <li>{ontologiesData?.getTotalOntologies().toLocaleString()} ontologies and terminologies</li>
                  : <li style={{ fontStyle: "italic" }}>ontology number not available</li>)}
                {(ontologiesData?.getNumClasses()
                  ? <li>{ontologiesData?.getNumClasses().toLocaleString()} terms</li>
                  : <li style={{ fontStyle: "italic" }}>term number not available</li>)}
                {(ontologiesData?.getNumProperties()
                  ? <li>{ontologiesData?.getNumProperties().toLocaleString()} properties</li>
                  : <li style={{ fontStyle: "italic" }}>property number not available</li>)}
                {(ontologiesData?.getNumIndividuals()
                  ? <li>{ontologiesData?.getNumIndividuals().toLocaleString()} individuals</li>
                  : <li style={{ fontStyle: "italic" }}>individual number not available</li>)}
                {/* <li>Version {NOT_AVAILABLE}</li> */} {/* TODO how to get API version? */}
              </ul>
            }
          </EuiText>
        </EuiCard>
          </>
  );
}

function createDataContent(props: DataContentWidgetProps, container: any, callback?: ()=>void) {
      ReactDOM.render(WrappedDataContentWidget(props), container, callback);
    }

      function WrappedDataContentWidget(props: DataContentWidgetProps) {
      const queryClient = new QueryClient();
      return (
      <QueryClientProvider client={queryClient}>
        <DataContentWidget
          api={props.api}
          parameter={props.parameter}
        />
      </QueryClientProvider>
  )
}

export { DataContentWidget, createDataContent };
