import React from "react";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { TitlePresentationProps } from "../../../../app/types";
import { getErrorMessageToDisplay } from "../../../../app/util";
import "../../../../style/ts4nfdiStyles/ts4nfdiTitleStyle.css";

function TitlePresentation(props: TitlePresentationProps) {
  const { title, titleText, isLoading, error, defaultValue, className } = props;
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

    return <EuiText>{title}</EuiText>;
  };

  return <div className={finalClassName}>{renderContent()}</div>;
}

export { TitlePresentation };
