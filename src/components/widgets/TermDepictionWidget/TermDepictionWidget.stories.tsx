import {TermDepictionWidget} from "./TermDepictionWidget";
import {     
    TermDepictionWidgetStoryArgs, 
    TermDepictionWidgetStoryArgTypes
} from "./TermDepictionWidgetStories";
import {TermDepictionDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Metadata/Entity Information/TermDepictionWidget",
  component: TermDepictionWidget,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: TermDepictionDescription
        }
    }
  },
  argTypes: TermDepictionWidgetStoryArgTypes,
  args: TermDepictionWidgetStoryArgs
};

export {TermDepictionWidgetExample} from "./TermDepictionWidgetStories"
