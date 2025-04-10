import React from "react";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { DescriptionPresentationProps } from "../../../../app/types";
import { getErrorMessageToDisplay } from "../../../../app/util";
import "../../../../style/ts4nfdiStyles/ts4nfdiDescriptionStyle.css";

function DescriptionPresentation(props: DescriptionPresentationProps) {
  const { descText, description, isLoading, error, className } = props;
  const finalClassName = className || "ts4nfdi-description-style";

  const renderContent = () => {
    if (isLoading) {
      return <EuiLoadingSpinner size="s" />;
    }

    if (error) {
      return (
        <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>
      );
    }

    return <EuiText>{descText || description}</EuiText>;
  };
  return <div className={finalClassName}>{renderContent()}</div>;
}

export { DescriptionPresentation };
