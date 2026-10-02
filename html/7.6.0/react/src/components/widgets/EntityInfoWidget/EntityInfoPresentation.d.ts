import { EntityInfoPresentationProps } from '../../../app';
declare function EntityInfoPresentation(props: EntityInfoPresentationProps): React.JSX.Element;
/**
 * Brings its own EUI and react-query providers, the way the widgets do, so the
 * card also renders inside a plain host application. The react-query provider is
 * needed because a MathML annotation renders a MathFormulaWidget, which fetches.
 */
declare function WrappedEntityInfoPresentation(props: EntityInfoPresentationProps): React.JSX.Element;
export { EntityInfoPresentation, WrappedEntityInfoPresentation };
