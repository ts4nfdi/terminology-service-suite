import TermDepictionWidget from "./TermDepictionWidget";
import {     
    TermDepictionWidgetStoryArgs, 
    TermDepictionWidgetStoryArgTypes
} from "./TermDepictionWidgetStories";

export default {
  title: "TermDepictionWidget",
  component: TermDepictionWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: TermDepictionWidgetStoryArgTypes,
  args: TermDepictionWidgetStoryArgs
};

export {TermDepictionWidgetExample} from "./TermDepictionWidgetStories"
