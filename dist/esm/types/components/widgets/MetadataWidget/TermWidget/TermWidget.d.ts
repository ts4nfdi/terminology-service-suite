/// <reference types="react" />
export interface TermWidgetProps {
    iri: string;
    api: string;
    termText?: string;
}
declare function TermWidget(props: TermWidgetProps): JSX.Element;
export default TermWidget;
