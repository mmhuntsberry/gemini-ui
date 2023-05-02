import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  Mode,
  ListGroupSize,
  ListCalloutDirection,
} from "@nielsen-media/gds-types";
import styles from "./list-group.scss?inline";

export interface GDSListGroup {
  direction?: ListCalloutDirection;
  mode?: Mode;
  size?: ListGroupSize;
}

@customElement("gds-list-group")
export class GDSListGroup extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() direction?: ListCalloutDirection = "vertical";
  @property() mode?: Mode = "light";
  @property() size?: ListGroupSize = "regular";

  override render() {
    return html`<ul
      class="gds-list-group"
      size=${ifDefined(this.size ? this.size : undefined)}
      direction=${ifDefined(this.direction ? this.direction : undefined)}
      mode=${ifDefined(this.mode ? this.mode : undefined)}
    >
      <slot size=${ifDefined(this.size ? this.size : undefined)}></slot>
    </ul>`;
  }
}
