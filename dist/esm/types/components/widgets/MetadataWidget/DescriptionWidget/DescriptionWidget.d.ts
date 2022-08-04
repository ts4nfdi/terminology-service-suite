/// <reference types="react" />
import { EuiTextProps } from '@elastic/eui/src/components/text/text';
interface DescriptionWidgetProps extends EuiTextProps {
    iri: string;
    api: string;
    descText?: string;
}
declare function DescriptionWidget(props: DescriptionWidgetProps): JSX.Element;
export { DescriptionWidget };
