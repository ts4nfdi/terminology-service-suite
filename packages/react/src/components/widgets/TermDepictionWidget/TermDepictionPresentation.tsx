"use client";

import {
  EuiImage,
  EuiLoadingSpinner,
  EuiProvider,
  EuiText,
} from "@elastic/eui";
import "@google/model-viewer";
import { TermDepictionPresentationProps } from "../../../app";
import { getErrorMessageToDisplay } from "../../../app/util";

function TermDepictionPresentation(
  props: TermDepictionPresentationProps,
): React.JSX.Element {
  const { depictionUrls, isLoading, error } = props;

  return (
    <div data-testid="term-depiction">
      {isLoading && <EuiLoadingSpinner size="s" />}
      {depictionUrls && depictionUrls.length !== 0 && (
        <>
          {depictionUrls.map((url: string) => {
            if (url.includes(".glb")) {
              // the image is 3-d so we need to use model-viewer
              return (
                <model-viewer
                  style={{
                    width: "300px",
                    height: "300px",
                    display: "inline-block",
                  }}
                  src={url}
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                />
              );
            }
            return (
              <>
                <EuiImage
                  size="m"
                  hasShadow
                  allowFullScreen
                  alt={url}
                  src={url}
                />
                <p>
                  <small>Click to expand.</small>
                </p>
              </>
            );
          })}
        </>
      )}
      {error !== undefined && (
        <EuiText>{getErrorMessageToDisplay(error, "depiction")}</EuiText>
      )}
    </div>
  );
}

function WrappedTermDepictionPresentation(
  props: TermDepictionPresentationProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <TermDepictionPresentation {...props} />
    </EuiProvider>
  );
}

export { TermDepictionPresentation, WrappedTermDepictionPresentation };
