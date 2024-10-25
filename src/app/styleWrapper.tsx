import React, { useLayoutEffect } from "react";

// @ts-ignore
function useElementSelectorStyles(styles) {
  useLayoutEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [styles]);
}

// @ts-ignore
export const ElementSelectorWrapper = ({ children, styles }) => {
  useElementSelectorStyles(styles);

  return <>{children}</>;
};

