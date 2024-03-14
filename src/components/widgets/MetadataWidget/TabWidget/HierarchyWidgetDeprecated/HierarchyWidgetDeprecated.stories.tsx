import { HierarchyWidgetDeprecated } from "./HierarchyWidgetDeprecated";
import {
  HierarchyWidgetDeprecatedStoryArgs,
  HierarchyWidgetDeprecatedStoryArgTypes
} from "root/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidgetDeprecated/HierarchyWidgetDeprecatedStories";
export default {
  title: "HierarchyWidgetDeprecated",
  component: HierarchyWidgetDeprecated,
  parameters: {
    layout: "centered",
  },
  argTypes: HierarchyWidgetDeprecatedStoryArgTypes,
  args: HierarchyWidgetDeprecatedStoryArgs
};

export {
  HierarchyWidgetDeprecated1
} from "root/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidgetDeprecated/HierarchyWidgetDeprecatedStories"
