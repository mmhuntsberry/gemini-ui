import { html, TemplateResult } from "lit";

import "../../foundations/DisplayIcon/DisplayIcon";
import "../Trend/Trend";
import "./CalloutItem";
import { colorsLevelList, colorsList } from "@nielsen-media/gds-utilities";
import { ListCalloutItemSize, GDSCalloutItem } from "@nielsen-media/gds-types";

export default {
  title: "Components/Content/Lists/Callout Item",
  component: "gds-callout-item",
  argTypes: {
    size: {
      options: ["compact", "regular", "jumbo", "giant"],
      control: { type: "select" },
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    alignment: {
      options: ["left", "center"],
      control: { type: "radio" },
    },
    label: {
      control: { type: "text" },
      defaultValue: "Label",
    },
    value: {
      control: { type: "text" },
      defaultValue: "Value",
    },
    color: {
      options: [...colorsList],
      control: { type: "select" },
    },
    "color-level": {
      options: [...colorsLevelList],
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

const getCalloutIconSize = (size: ListCalloutItemSize) => {
  switch (size) {
    case "regular":
      return "40";
    case "compact":
      return "32";
    default:
      return "48";
  }
};

const Template1: Story<GDSCalloutItem> = ({
  size = "regular",
  mode = "light",
  alignment = "left",
  label = "Label",
  value = "Value",
  color = "black",
  "color-level": colorLevel,
  weight = "semibold",
}: GDSCalloutItem) => html`
  <gds-callout-item
    size=${size}
    mode=${mode}
    label=${label}
    value=${value}
    alignment=${alignment}
    color=${color}
    color-level=${colorLevel}
    weight=${weight}
  >
  </gds-callout-item>
`;

const Template2: Story<GDSCalloutItem> = ({
  size = "regular",
  mode = "light",
  alignment = "left",
  label = "Label",
  value = "Value",
  color = "black",
  "color-level": colorLevel,
  weight = "semibold",
}: GDSCalloutItem) => html`
  <gds-callout-item
    size=${size}
    mode=${mode}
    label=${label}
    value=${value}
    alignment=${alignment}
    color=${color}
    color-level=${colorLevel}
    weight=${weight}
  >
    <gds-display-icon-bg
      slot="icon"
      icon="dashboard"
      size=${getCalloutIconSize(size)}
      background="aqua"
      mode="light"
      aria-label=""
      .outlined=${false}
    ></gds-display-icon-bg>
  </gds-callout-item>
`;

const Template3: Story<GDSCalloutItem> = ({
  size = "regular",
  mode = "light",
  alignment = "left",
  label = "Label",
  value = "Value",
  color = "black",
  "color-level": colorLevel,
  weight = "semibold",
}: GDSCalloutItem) => html`
  <gds-callout-item
    size=${size}
    mode=${mode}
    label=${label}
    value=${value}
    alignment=${alignment}
    color=${color}
    color-level=${colorLevel}
    weight=${weight}
  >
    <gds-display-icon-bg
      slot="icon"
      icon="dashboard"
      size=${getCalloutIconSize(size)}
      background="aqua"
      mode="light"
      aria-label=""
      .outlined=${false}
    ></gds-display-icon-bg>

    <gds-trend slot="trend" size=${size} mode=${mode} trend="up">
      5.2%
    </gds-trend>
  </gds-callout-item>
`;

export const CalloutItem = Template1.bind({});
CalloutItem.args = {
  mode: "light",
  size: "regular",
  alignment: "left",
  label: "Label",
  value: "Value",
  color: "black",
  "color-level": "500",
  weight: "semibold",
};

export const CalloutItemWithIcon = Template2.bind({});
CalloutItem.args = {
  mode: "light",
  size: "regular",
  alignment: "left",
  label: "Label",
  value: "Value",
  color: "black",
  "color-level": "500",
  weight: "semibold",
};

export const CalloutItemWithTrend = Template3.bind({});
CalloutItem.args = {
  mode: "light",
  size: "regular",
  alignment: "left",
  label: "Label",
  value: "Value",
  color: "black",
  "color-level": "500",
  weight: "semibold",
};
