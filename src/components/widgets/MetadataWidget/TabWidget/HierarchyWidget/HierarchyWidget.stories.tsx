import { HierarchyWidget } from "./HierarchyWidget";
import {HierarchyWidgetStoryArgs, HierarchyWidgetStoryArgTypes} from "./HierarchyWidgetStories";

export default {
  title: "HierarchyWidget",
  component: HierarchyWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The HierarchyWidget is a component designed to visualize and interact with hierarchical data structures of ontology hierarchies, specifically tailored for the OLS4 API to retrieve and display hierarchical relationships between terms within a given ontology."
      }
    }
  },
  argTypes: HierarchyWidgetStoryArgTypes,
  args: HierarchyWidgetStoryArgs
};

export {
    HierarchyWidget1
} from "./HierarchyWidgetStories"
