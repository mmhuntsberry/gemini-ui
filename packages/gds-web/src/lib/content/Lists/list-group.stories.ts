import {
  GDSListGroup,
  ListCalloutDirection,
  ListGroupSize,
} from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";

import "./ListGroup";
import "../../foundations/DisplayIcon/DisplayIcon";

export default {
  title: "Components/Content/Lists/List Group",
  component: "gds-list-group",
  argTypes: {
    size: {
      options: ["compact", "regular", "jumbo"],
      control: { type: "radio" },
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    direction: {
      options: ["vertical", "horizontal", "horizontal-fixed"],
      control: { type: "select" },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const getIconSize = (size: ListGroupSize, direction: ListCalloutDirection) => {
  if (direction === "horizontal") {
    switch (size) {
      case "regular":
        return "20";
      case "compact":
        return "16";
      case "tiny":
        return "16";
      default:
        return "24";
    }
  } else {
    switch (size) {
      case "regular":
        return "40";
      case "compact":
        return "32";
      case "tiny":
        return "24";
      default:
        return "48";
    }
  }
};

const arr = new Array(10).fill(0);

const Template: Story<GDSListGroup> = ({
  size = "regular",
  mode = "light",
  direction = "vertical",
}: GDSListGroup) => html`
  <gds-list-group size=${size} mode=${mode}>
    ${arr.map(
      (el) =>
        html`
          <gds-list-item
            size=${size}
            mode=${mode}
            divider="true"
            direction=${direction}
          >
            <gds-display-icon
              slot="icon"
              icon="hiking"
              foreground-level="${mode === "dark" ? "100" : "900"}"
              size=${getIconSize(size, direction)}
            ></gds-display-icon>
          </gds-list-item>
        `
    )}
  </gds-list-group>
`;

export const ListGroup = Template.bind({});
ListGroup.args = {
  size: "regular",
  mode: "light",
  direction: "vertical",
};
