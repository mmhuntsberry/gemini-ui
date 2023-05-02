import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import {
  Colors,
  ListCalloutDirection,
  ListItemSize,
  ListItemWeight,
  Mode,
} from "@nielsen-media/gds-types";

import styles from "./list-item.scss?inline";

export interface GDSListItem {
  body?: string;
  color?: Colors;
  direction?: ListCalloutDirection;
  divider?: boolean;
  heading?: string;
  mode?: Mode;
  size?: ListItemSize;
  weight?: ListItemWeight;
}

@customElement("gds-list-item")
export class GDSListItem extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() body? = "List Body";
  @property() color?: Colors = "none";
  @property() direction?: ListCalloutDirection = "vertical";
  @property() divider? = true;
  @property() heading? = "List Heading";
  @property() mode?: Mode = "light";
  @property() size?: ListItemSize = "regular";
  @property() weight?: ListItemWeight = "regular";

  private getColor() {
    switch (this.mode) {
      case "light":
        return this.color === "none" ||
          this.color === "black" ||
          this.color === "default"
          ? "var(--gds-black);"
          : `var(--gds-${this.color}-500);`;

      default:
        return this.color === "none" ||
          this.color === "white" ||
          this.color === "default"
          ? "var(--gds-white);"
          : `var(--gds-${this.color}-500);`;
    }
  }

  override render() {
    return html`<li
      class="gds-list-item"
      size=${ifDefined(this.size ? this.size : undefined)}
      direction=${ifDefined(this.direction ? this.direction : undefined)}
      divider=${ifDefined(this.divider ? this.divider : undefined)}
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      color=${ifDefined(this.color ? this.color : undefined)}
    >
      <slot class="icon" name="icon"></slot>
      <div direction=${ifDefined(this.direction ? this.direction : undefined)}>
        <label class="heading"> ${this.heading} </label>
        <span
          style="--color: ${this.getColor()}"
          class="body"
          weight=${ifDefined(this.weight ? this.weight : undefined)}
        >
          ${this.body}
        </span>
      </div>
    </li>`;
  }
}
