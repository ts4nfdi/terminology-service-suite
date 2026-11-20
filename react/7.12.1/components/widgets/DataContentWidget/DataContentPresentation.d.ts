import { DataContentPresentationProps } from '../../../app';
declare function DataContentPresentation(props: DataContentPresentationProps): React.JSX.Element;
/**
 * Brings its own EUI provider, the way the widgets do, so the card also renders
 * inside a plain host application. It performs no request of its own.
 */
declare function WrappedDataContentPresentation(props: DataContentPresentationProps): React.JSX.Element;
export { DataContentPresentation, WrappedDataContentPresentation };
