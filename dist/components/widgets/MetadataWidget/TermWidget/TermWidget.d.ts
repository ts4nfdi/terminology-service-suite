import { EuiTextProps } from '@elastic/eui/src/components/text/text';
interface TermWidgetProps extends EuiTextProps {
    iri: string;
    api: string;
    termText?: string;
    textSize?: 'xl' | 'l' | 'm' | 's' | 'xs';
}
declare function TermWidget(props: TermWidgetProps): JSX.Element;
export { TermWidget };
