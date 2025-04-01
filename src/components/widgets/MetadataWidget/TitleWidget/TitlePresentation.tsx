import React from "react";
import { EuiLink, EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { TitlePresentationProps } from "../../../../app/types";
import {
  getErrorMessageToDisplay,
  isEuiLinkColor,
  isHexColor,
  isRgbColor,
} from "../../../../app/util";
import "../../../../style/ts4nfdiStyles/ts4nfdiTitleStyle.css";

function TitlePresentation(props: TitlePresentationProps) {
  const {
    title,
    titleText,
    isLoading,
    error,
    defaultValue,
    className,
    navigateToIri,
    onNavigateTo,
    iri,
    ontologyId,
    thingType,
  } = props;
  const finalClassName = className || "ts4nfdi-title-style";

  const renderContent = () => {
    if (titleText) {
      return <EuiText>{titleText}</EuiText>;
    }

    if (isLoading) {
      return defaultValue ? (
        <EuiText>{defaultValue}</EuiText>
      ) : (
        <EuiLoadingSpinner size="s" />
      );
    }

    if (error) {
      return defaultValue ? (
        <EuiText>{defaultValue}</EuiText>
      ) : (
        <EuiText>{getErrorMessageToDisplay(error, "title")}</EuiText>
      );
    }

    if (navigateToIri) {
      return (
        <EuiLink href={iri} external={true}>
          <EuiText>{title}</EuiText>
        </EuiLink>
      );
    }

    if (typeof onNavigateTo === "function") {
      if (!onNavigateTo.name.includes("mockConstructor")) {
        return (
          <EuiLink
            href={""}
            external={true}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateTo)
                onNavigateTo(iri || "", ontologyId || "", thingType || "");
            }}
          >
            <EuiText>{title}</EuiText>
          </EuiLink>
        );
      }
    }

    return <EuiText>{title}</EuiText>;
  };

  return <div className={finalClassName}>{renderContent()}</div>;
}

export { TitlePresentation };
