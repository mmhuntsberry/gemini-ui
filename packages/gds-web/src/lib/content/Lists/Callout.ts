import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./callout.scss?inline";
import {
  ListCalloutDirection,
  ListCalloutSize,
  Mode,
} from "@nielsen-media/gds-types";

export interface GDSCallout {
  direction?: ListCalloutDirection;
  mode?: Mode;
  size?: ListCalloutSize;
}

@customElement("gds-callout")
export class GDSCallout extends LitElement {
  static override styles = unsafeCSS(styles);
  @property() direction?: ListCalloutDirection = "horizontal";
  @property() mode?: Mode = "light";
  @property() size?: ListCalloutSize = "regular";

  override render() {
    return html`<ul
      size=${ifDefined(this.size ? this.size : undefined)}
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      direction=${ifDefined(this.direction ? this.direction : undefined)}
    >
      <slot></slot>
    </ul>`;
  }
}
