import { GraphViewWidget } from "./GraphViewWidget";
import { GraphViewWidgetStoryArgTypes, GraphViewWidgetStoryArgs } from "./GraphViewWidgetStories";

export default {
  title: "GraphViewWidget",
  component: GraphViewWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: GraphViewWidgetStoryArgTypes,
  args: GraphViewWidgetStoryArgs
};

export {
  GraphViewWidgetExample,
  RootWalkGraphExample,
  ChebiExample
} from './GraphViewWidgetStories';
