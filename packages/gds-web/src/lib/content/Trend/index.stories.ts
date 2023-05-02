import {
  GDSTrend,
  Mode,
  Size,
  Trend as TrendTypes,
} from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./Trend";

export default {
  title: "Foundations/Icons/Interface Icons/Trend",
  component: "gds-trend",
  argTypes: {
    size: {
      options: ["compact", "regular", "jumbo", "giant"],
      control: { type: "radio" },
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    trend: {
      options: ["up", "down", "zero"],
      control: { type: "radio" },
    },
    background: {
      disabled: true,
      defaultValue: false,
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSTrend> = ({
  size = "regular",
  mode = "light",
  trend = "up",
  background = false,
}: GDSTrend) =>
  html`
    <gds-trend
      size=${size}
      mode=${mode}
      trend=${trend}
      .background=${background}
    >
      <span slot="text">5.2%</span>
    </gds-trend>
  `;

export const Trend = Template.bind({});
Trend.args = {
  size: "regular",
  mode: "light",
  trend: "up",
  background: false,
};
