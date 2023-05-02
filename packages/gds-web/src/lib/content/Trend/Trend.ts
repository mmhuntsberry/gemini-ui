import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import styles from "./index.scss?inline";

import "../../foundations/DisplayIcon/DisplayIcon";
import { Mode, Trend, TrendSize } from "@nielsen-media/gds-types";

export interface GDSTrend {
  background?: boolean;
  mode?: Mode;
  trend?: Trend;
  size?: TrendSize;
}

@customElement("gds-trend")
export class GDSTrend extends LitElement {
  static override styles = unsafeCSS(styles);
  @property({ reflect: true }) background? = false;
  @property() mode?: Mode = "light";
  @property() trend?: Trend = "up";
  @property() size?: TrendSize = "regular";

  getIconSize(size: TrendSize) {
    switch (size) {
      case "giant":
        return "32";
      case "jumbo":
        return "24";
      case "compact":
        return "16";
      default:
        return "20";
    }
  }

  getIconBasedOnTrend(trend: Trend) {
    switch (trend) {
      case "up":
        if (!this.background) {
          return html`<gds-display-icon
            icon="arrow-up"
            mode=${this.mode}
            .outlined=${true}
            foreground="green"
            foreground-level="700"
            size=${this.size && this.getIconSize(this.size)}
          ></gds-display-icon>`;
        }

        return html` <gds-display-icon-bg
          icon="arrow-up"
          mode=${this.mode}
          background=${this.background ? "green" : "none"}
          size=${this.size && this.getIconSize(this.size)}
        ></gds-display-icon-bg>`;
      case "down":
        if (!this.background)
          return html`<gds-display-icon
            icon="arrow-down"
            mode=${this.mode}
            .outlined=${true}
            foreground="red"
            foreground-level="${this.mode === "light" ? "700" : "400"}"
            size=${this.size && this.getIconSize(this.size)}
          ></gds-display-icon>`;

        return html` <gds-display-icon-bg
          icon="arrow-down"
          foreground="red"
          foreground-level="${this.mode === "light" ? "700" : "300"}"
          mode=${this.mode}
          background=${this.background ? "red" : "none"}
          size=${this.size && this.getIconSize(this.size)}
        ></gds-display-icon-bg>`;
      case "zero":
        if (!this.background)
          return html`<gds-display-icon
            icon="anomaly-status"
            mode=${this.mode}
            .outlined=${false}
            foreground="gray"
            foreground-level="${this.mode === "light" ? "700" : "300"}"
            size=${this.size && this.getIconSize(this.size)}
          ></gds-display-icon>`;
        return html` <gds-display-icon-bg
          background=${this.background ? "gray" : "none"}
          foreground="gray"
          foreground-level="${this.mode === "light" ? "700" : "300"}"
          icon="anomaly-status"
          mode=${this.mode}
          outlined="true"
          size=${this.size && this.getIconSize(this.size)}
        ></gds-display-icon-bg>`;
    }
  }

  override render() {
    return html` <span
      class="gds-trend"
      size=${ifDefined(this.size ? this.size : undefined)}
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      trend=${ifDefined(this.trend ? this.trend : undefined)}
    >
      ${this.getIconBasedOnTrend(this.trend ?? "up")}
      <p>${this.trend === "zero" ? "0%" : html`<slot name="text"></slot>`}</p>
    </span>`;
  }
}
