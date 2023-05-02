import { Mode, SelectSize } from "@nielsen-media/gds-types";
import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./index.scss?inline";

export interface GDSSelect {
  "aria-label"?: string;
  alt?: boolean;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  id: string;
  mode?: Mode;
  name?: string;
  size?: SelectSize;
}

@customElement("gds-select")
export class GDSSelect extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() "aria-label"? = "";
  @property({ type: Boolean, reflect: true }) alt? = false;
  @property({ type: Boolean, reflect: true }) checked? = false;
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property({ type: Boolean, reflect: true }) error? = false;
  @property() override id = "";
  @property() mode?: Mode = "light";
  @property() name? = "";
  @property() size?: SelectSize = "compact";

  override render() {
    return html`
      <button
        aria-label=${this["aria-label"]}
        alt=${ifDefined(this.alt ? this.alt : undefined)}
        mode=${ifDefined(this.mode ? this.mode : "light")}
        size=${ifDefined(this.size ? this.size : "regular")}
        error=${ifDefined(this.error ? this.error : false)}
        disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
      >
        <span class="module-text">
          <slot></slot>
        </span>
        <gds-display-icon
          size="24"
          icon="caret-down"
          foreground="${this.mode === "dark" ? "gray" : "gray"}"
          foreground-level="${this.mode === "dark" ? "100" : "500"}"
        >
        </gds-display-icon>
      </button>
    `;
  }
}
