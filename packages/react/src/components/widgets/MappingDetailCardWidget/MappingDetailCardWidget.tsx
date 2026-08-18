import {
  EuiDescriptionList,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";

import { MappingDetailCardWidgetProps } from "../../../app";

type MappingDetailCardRowTypes = {
  SourceVocabulary: string;
  SourceConcept: string;
  TargetVocabulary: string;
  TargetConcept: string;
  MappingType: string;
  Creator: string;
  CreationDate: string;
  // ModificationDate: string  -> we don't have it in the JSkos card
  Concordance: string;
  Identifier: string; //added by me
  MappingURI: string;
  Download: string;
  AdditionalIdentifiers: string;
  DownloadLinks: string;
};

function MappingDetailCardWidget(props: MappingDetailCardWidgetProps) {
  const { api, source } = props;

  return (
    <EuiPanel paddingSize="m">
      <EuiTitle size="s">
        <h2>Mapping details</h2>
      </EuiTitle>

      <EuiSpacer size="l" />

      <EuiDescriptionList
        listItems={[
          {
            title: "API",
            description: api || "-",
          },
          {
            title: "Source",
            description: source ? (
              <EuiLink href={source} target="_blank" rel="noreferrer">
                {source}
              </EuiLink>
            ) : (
              "—"
            ),
          },
          {
            title: "Identifier",
            description: "This is an Identifier",
          },
          {
            title: "Status",
            description: "This is the second simple version of the card.",
          },
        ]}
      />
    </EuiPanel>
  );
}

export function WrappedMappingDetailCardWidget() {
  return <MappingDetailCardWidget api={""} source={""} />;
}

export { MappingDetailCardWidget };
export default WrappedMappingDetailCardWidget;
