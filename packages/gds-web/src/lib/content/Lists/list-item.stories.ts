import { html, TemplateResult } from "lit";
import { GDSListItem, Size } from "@nielsen-media/gds-types";

import "../../foundations/DisplayIcon/DisplayIcon";
import "./ListItem";
import { displayIconList } from "@nielsen-media/gds-utilities";

export default {
  title: "Components/Content/Lists/List Item",
  component: "gds-list-item",
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
      control: { type: "radio" },
    },
    divider: {
      disable: true,
      defaultValue: true,
    },
    heading: {
      control: { type: "text" },
      defaultValue: "List Heading",
    },
    body: {
      control: { type: "text" },
      defaultValue: "List Body",
    },
    icon: {
      options: displayIconList,
      control: { type: "select" },
      defaultValue: "hiking",
    },
    color: {
      options: [
        "none",
        "default",
        "blurple",
        "aqua",
        "gray",
        "eggplant",
        "blue",
        "green",
        "red",
        "yellow",
        "orange",
        "white",
        "black",
      ],
      control: { type: "select" },
    },
    weight: {
      options: ["regular", "semibold"],
      control: { type: "radio" },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const getListItemIconSize = (size: Size, direction: string) => {
  if (direction === "horizontal" || direction === "horizontal-fixed") {
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

const Template: Story<GDSListItem> = ({
  size = "regular",
  mode = "light",
  direction = "vertical",
  divider = true,
  heading = "List Heading",
  body = "List Body",
  color = "black",
  weight = "regular",
}: GDSListItem) => html`
  <gds-list-item
    size=${size}
    mode=${mode}
    heading=${heading}
    body=${body}
    divider=${divider}
    direction=${direction}
    color=${color}
    weight=${weight}
  >
    <gds-display-icon
      slot="icon"
      icon="hiking"
      foreground-level="${mode === "dark" ? "100" : "900"}"
      size=${getListItemIconSize(size, direction)}
    ></gds-display-icon>
  </gds-list-item>
`;

export const ListItem = Template.bind({});
ListItem.args = {
  size: "regular",
  mode: "light",
  heading: "List Heading",
  body: "List Body",
  divider: true,
  direction: "vertical",
  color: "black",
  weight: "regular",
};
