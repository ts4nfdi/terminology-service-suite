import { EuiText } from "@elastic/eui";
import React, { ReactNode } from "react";

type ErrorBoundaryProps = {
  children?: ReactNode;
  /**
   * Rendered instead of {@link children} if rendering them threw. If omitted, a neutral
   * message is displayed.
   */
  fallback?: ReactNode | ((error: Error) => ReactNode);
};

type ErrorBoundaryState = {
  error?: Error;
};

/**
 * Catches errors thrown while rendering {@link ErrorBoundaryProps.children} and renders
 * {@link ErrorBoundaryProps.fallback} instead, so a single broken subtree does not unmount
 * the whole application.
 *
 * The boundary keeps showing the fallback until it is remounted. Pass a `key` that changes
 * with the rendered content (e.g. the entities' iri) to reset it.
 */
export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo.componentStack);
  }

  render(): ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    const { fallback } = this.props;
    if (typeof fallback === "function") return fallback(error);
    if (fallback !== undefined) return fallback;
    return <EuiText size="s">Content could not be displayed.</EuiText>;
  }
}
