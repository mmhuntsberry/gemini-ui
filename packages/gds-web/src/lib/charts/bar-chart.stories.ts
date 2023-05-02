import { html, TemplateResult } from "lit";
import { GDSBarChart } from "@nielsen-media/gds-types";

import "./BarChart";

export default {
  title: "In Development/Components/Charts",
  component: "gds-bar-chart",
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSBarChart> = ({
  mode = "light",
  data = [],
  y = (d: any) => d,
  x = (d: any) => d,
  width = 640,
  height = 400,
  marginTop = 0,
  marginRight = 20,
  marginBottom = 60,
  marginLeft = 60,
  paddingInner = 0,
  paddingOuter = 0,
  tickFontSize = "16px",
  chartTitle = "Chart Title",
  xAxisTitle = "X-Axis Title",
  yAxisTitle = "Y-Axis Title",
}: GDSBarChart) =>
  html`
    <gds-bar-chart
      mode=${mode}
      chartTitle=${chartTitle}
      .data=${data}
      .x=${x}
      .y=${y}
      width=${width}
      height=${height}
      marginTop=${marginTop}
      marginRight=${marginRight}
      marginBottom=${marginBottom}
      marginLeft=${marginLeft}
      paddingInner=${paddingInner}
      paddingOuter=${paddingOuter}
      tickFontSize=${tickFontSize}
      xAxisTitle=${xAxisTitle}
      yAxisTitle=${yAxisTitle}
    >
    </gds-bar-chart>
  `;

export const BarChart = Template.bind({});
BarChart.args = {
  width: window.innerWidth * 0.9,
  height: 400,
  marginTop: 0,
  marginRight: 20,
  marginBottom: 60,
  marginLeft: 60,
  paddingInner: 0,
  paddingOuter: 0,
  tickFontSize: "16px",
  chartTitle: "Chart Title",
  xAxisTitle: "X-Axis Title",
  yAxisTitle: "Y-Axis Title",
  y: (d) => d.count,
  x: (d) => d.state,
  data: [
    {
      state: "FL",
      count: 89,
    },
    {
      state: "WA",
      count: 86,
    },
    {
      state: "NY",
      count: 64,
    },
    {
      state: "OR",
      count: 51,
    },
    {
      state: "AZ",
      count: 42,
    },
    {
      state: "AK",
      count: 97,
    },
    {
      state: "MA",
      count: 66,
    },
  ],
};
