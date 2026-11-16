import { MappingListWidgetProps } from '../../../app';
declare function MappingListWidget(props: MappingListWidgetProps): React.JSX.Element;
/**
 * Brings its own EUI and react-query providers, the way the other widgets do,
 * so the widget also renders and fetches inside a plain host application.
 */
declare function WrappedMappingListWidget(props: MappingListWidgetProps): React.JSX.Element;
export { MappingListWidget, WrappedMappingListWidget };
export default WrappedMappingListWidget;
