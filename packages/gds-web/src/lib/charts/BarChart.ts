import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import * as d3 from "d3";
import { Mode } from "@nielsen-media/gds-types";
import styles from "./bar-chart.scss?inline";
import { NumberValue } from "d3";

export interface GDSBarChart {
  mode?: Mode;
  data: any[];
  y: (d: any) => typeof d;
  x: (d: any) => typeof d;
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingInner?: number;
  paddingOuter?: number;
  tickFontSize?: string;
  chartTitle?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
}

@customElement("gds-bar-chart")
export class GDSBarChart extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() mode?: Mode = "light";
  @property() data: any[] = [];
  @property() y = (d: any) => d;
  @property() x = (d: any) => d;
  @property() width? = 640;
  @property() height? = 400;
  @property() marginTop? = 0;
  @property() marginRight? = 20;
  @property() marginBottom? = 60;
  @property() marginLeft? = 60;
  @property() paddingInner? = 0;
  @property() paddingOuter? = 0;
  @property() tickFontSize? = "16px";
  @property() chartTitle? = "Chart Title";
  @property() xAxisTitle? = "X-Axis Title";
  @property() yAxisTitle? = "Y-Axis Title";

  get boundedHeight() {
    if (!this.height || !this.marginTop || !this.marginBottom) return;
    return this.height - this.marginTop - this.marginBottom;
  }

  get boundedWidth() {
    if (!this.width || !this.marginLeft || !this.marginRight) return;
    return this.width - this.marginLeft - this.marginRight;
  }

  drawChart() {
    if (
      !this.width ||
      !this.height ||
      !this.boundedHeight ||
      !this.boundedWidth
    )
      return;

    const chart = this.shadowRoot?.querySelector("#wrapper");
    if (chart) {
      // Create canvas
      const wrapper = d3
        .select(chart)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height);

      // Create bounding box.
      // This follows the D3 margin convention.
      const bounds = wrapper
        .append("g")
        .attr("class", "bounds")
        .style(
          "transform",
          `translate(${this.marginLeft}px, ${this.marginTop}px)`
        );

      // Create Scales
      const xScale = d3
        .scaleBand()
        .domain(this.data.map(this.x))
        .range([0, this.boundedWidth])
        .padding(0.3);

      const yScale = d3
        .scaleLinear()
        .domain(d3.extent(this.data, this.y) as Iterable<NumberValue>)
        .range([this.boundedHeight, 0])
        .nice();

      // Create axes
      const xAxisGenerator = d3.axisBottom(xScale);
      const xAxisGroup = bounds
        .append("g")
        .style("transform", `translate(0, ${this.boundedHeight}px)`)
        .call(xAxisGenerator);

      // Remove horizontal rule line from xAxis
      xAxisGroup.selectAll(".domain, .tick path").remove();
      xAxisGroup.selectAll(".domain, .tick line").remove();

      xAxisGroup
        .selectAll(".domain, .tick text")
        .attr("transform", "rotate(-90)")
        .attr("y", -5)
        .attr("x", -20);

      const yAxisGenerator = d3.axisLeft(yScale).tickSize(-this.boundedWidth);
      const yAxisGroup = bounds
        .append("g")
        .attr("class", "grid")
        .call(yAxisGenerator);
      yAxisGroup.selectAll(".domain, .tick path").remove();
      yAxisGroup.selectAll(".domain, .tick text").attr("x", -8);
      yAxisGroup
        .selectAll(".domain, .tick:first-of-type text")
        .attr("x", -8)
        .attr("y", -4);
      yAxisGroup
        .selectAll(".domain, .tick:last-of-type text")
        .attr("x", -8)
        .attr("y", 4);
      yAxisGroup.selectAll(".domain, .tick:first-of-type line").remove();

      // X AXIS LABEL
      const xAxisLabel = xAxisGroup
        .append("text")
        .text(this.xAxisTitle || "")
        .attr("y", "50")
        .attr("class", "axis-label x-axis-label")
        .attr("x", this.boundedWidth / 2);

      // Y AXIS LABEL
      const yAxisLabel = yAxisGroup
        .append("text")
        .attr("x", -(this.boundedHeight / 2) + 30)
        .attr("y", -32)
        .attr("class", "axis-label y-axis-label")

        .attr("transform", "rotate(-90)")
        .text(this.yAxisTitle || "Y-AXIS TITLE");

      // Draw Data
      const rects = bounds
        .selectAll("rect")
        .data(this.data)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(this.x(d)) as number)
        .attr("y", (d) => yScale(this.y(d)))
        .attr("height", (d: any) => {
          if (!this.boundedHeight) return 0;
          return this.boundedHeight - yScale(d.count);
        })
        .attr("width", xScale.bandwidth);

      // Create X & Y Axes lines
      // We have to create these separately because
      // we can't remove just the top line of the .domain
      bounds
        .append("line")
        .attr("class", "axis-line")
        .attr("x1", 0)
        .attr("y1", this.boundedHeight)
        .attr("x2", this.boundedWidth)
        .attr("y2", this.boundedHeight)
        .style("z-index", 999);

      bounds
        .append("line")
        .attr("class", "axis-line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", this.boundedHeight)
        .style("z-index", 999);

      return wrapper.node();
    }

    return;
  }

  override firstUpdated() {
    this.drawChart();
  }

  override render() {
    return html` <h3 class="chart-title">${this.chartTitle}</h3>
      <div
        id="wrapper"
        class="gds-bar-chart"
        mode=${ifDefined(this.mode ? this.mode : undefined)}
      ></div>`;
  }
}
