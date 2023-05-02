import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  Mode,
  Colors,
  ColorsLevel,
  ListItemWeight,
  ListCalloutItemAlignment,
  ListCalloutSize,
} from "@nielsen-media/gds-types";
import styles from "./callout-item.scss?inline";

export interface GDSCalloutItem {
  alignment?: ListCalloutItemAlignment;
  color?: Colors;
  "color-level": ColorsLevel;
  label?: string;
  mode?: Mode;
  size?: ListCalloutSize;
  value?: string;
  weight?: ListItemWeight;
}

@customElement("gds-callout-item")
export class GDSListCalloutItem extends LitElement {
  static override styles = unsafeCSS(styles);
  @property() alignment?: ListCalloutItemAlignment = "left";
  @property() color?: Colors = "none";
  @property() "color-level"?: ColorsLevel = "100";
  @property() label? = "Label";
  @property() mode?: Mode = "light";
  @property() size?: ListCalloutSize = "regular";
  @property() value? = "Value";
  @property() weight?: ListItemWeight = "regular";

  override render() {
    const getColor =
      this.color === "none"
        ? "none"
        : `var(--gds-${this.color}-${this["color-level"]})`;

    return html`<li
      class="gds-list-callout-item"
      size=${ifDefined(this.size ? this.size : undefined)}
      alignment=${ifDefined(this.alignment ? this.alignment : undefined)}
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      color=${ifDefined(this.color ? this.color : undefined)}
      color-level=${ifDefined(
        this["color-level"] ? this["color-level"] : undefined
      )}
      weight=${ifDefined(this.weight ? this.weight : undefined)}
    >
      <slot class="icon" name="icon"></slot>
      <div
        class="container"
        alignment=${ifDefined(this.alignment ? this.alignment : undefined)}
      >
        <label class="label"> ${this.label} </label>
        <span style="--color: ${getColor};" class="value"> ${this.value} </span>
      </div>
      <slot class="trend" name="trend"></slot>
    </li>`;
  }
}
