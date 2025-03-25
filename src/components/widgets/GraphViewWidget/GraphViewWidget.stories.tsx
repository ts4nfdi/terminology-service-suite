import { GraphViewWidget } from "./GraphViewWidget";
import {
  GraphViewWidgetStoryArgTypes,
  GraphViewWidgetStoryArgs,
} from "./GraphViewWidgetStories";
import { GraphViewDescription } from "../../../app/widgetDescriptions";

export default {
  title: "Hierarchy and Graph/GraphViewWidget",
  component: GraphViewWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: GraphViewDescription,
      },
    },
  },
  argTypes: GraphViewWidgetStoryArgTypes,
  args: GraphViewWidgetStoryArgs,
};

export {
  GraphViewWidgetExample,
  RootWalkGraphExample,
  ChebiWater,
  ChebiWaterRootWalk,
} from "./GraphViewWidgetStories";
