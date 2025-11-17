import React from "react";
import { EuiLink, EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { TitlePresentationProps } from "../../../../app";
import {
  getErrorMessageToDisplay,
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
    onNavigateTo,
    iri,
    ontologyId,
    thingType,
    href,
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

    if (href) {
      return (
        <EuiLink href={href}>
          <EuiText>{title}</EuiText>
        </EuiLink>
      );
    }

    if (typeof onNavigateTo === "function") {
      if (!onNavigateTo.name.includes("mockConstructor")) {
        return (
          <EuiLink
            href={""}
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
