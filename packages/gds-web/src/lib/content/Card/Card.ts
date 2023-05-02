import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { Mode, CardSizes } from "@nielsen-media/gds-types";
import styles from "./index.scss?inline";

export interface GDSCard {
  size?: CardSizes;
  mode?: Mode;
}

@customElement("gds-card")
export class GDSCard extends LitElement {
  static override styles = unsafeCSS(styles);
  @property() size?: CardSizes = "regular";
  @property() mode?: Mode = "light";

  override render() {
    return html`<div
      class="gds-card"
      size=${ifDefined(this.size ? this.size : undefined)}
      mode=${ifDefined(this.mode ? this.mode : undefined)}
    >
      <slot></slot>
    </div>`;
  }
}
