import { Mode } from "@nielsen-media/gds-types";
import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import styles from "./table-label.scss?inline";

export interface GDSTableLabel {
  mode?: Mode;
  weight?: "regular" | "bold";
}

@customElement("gds-table-label")
export class GDSTableLabel extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() mode?: Mode = "light";
  @property() weight?: "regular" | "bold" = "regular";

  override render() {
    return html`<span mode=${this.mode} weight=${this.weight}
      ><slot></slot><span></span
    ></span>`;
  }
}
