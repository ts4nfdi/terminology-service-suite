import { default as React, ReactNode } from '../../../../../node_modules/react';
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
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): ReactNode;
}
export {};
