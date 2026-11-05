import { EntityListWidgetProps } from '../../../app';
import { EntityTypeName } from '../../../model/ModelTypeCheck';
export declare function isPropertyEntityType(entityType: EntityTypeName | undefined): entityType is "property" | "annotationProperty" | "dataProperty" | "objectProperty";
export declare function isIndividualEntityType(entityType: EntityTypeName | undefined): entityType is "individual";
declare function EntityListWidget(props: EntityListWidgetProps): React.JSX.Element;
export declare function WrappedEntityListWidget(props: EntityListWidgetProps): React.JSX.Element;
export { EntityListWidget };
export default WrappedEntityListWidget;
