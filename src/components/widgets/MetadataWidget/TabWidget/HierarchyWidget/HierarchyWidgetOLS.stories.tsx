import { HierarchyWidgetOLS } from "./HierarchyWidgetOLS";
import {HierarchyWidgetOLSStoryArgs, HierarchyWidgetOLSStoryArgTypes} from "./HierarchyWidgetOLSStories";

export default {
  title: "Metadata/Ontology Information/HierarchyWidgetOLS",
  component: HierarchyWidgetOLS,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The HierarchyWidgetOLSOLS is a component designed to visualize and interact with hierarchical data structures of ontology hierarchies, specifically tailored for the OLS4 API to retrieve and display hierarchical relationships between terms within a given ontology."
      }
    }
  },
  argTypes: HierarchyWidgetOLSStoryArgTypes,
  args: HierarchyWidgetOLSStoryArgs
};

export {
    HierarchyWidgetOLS1
} from "./HierarchyWidgetOLSStories"
