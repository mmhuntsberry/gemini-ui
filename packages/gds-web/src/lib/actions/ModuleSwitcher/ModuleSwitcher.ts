import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement } from "lit/decorators.js";
import { Mode, ModuleSwitcherType } from "@nielsen-media/gds-types";

import styles from "./index.scss?inline";

export interface GDSModuleSwitcher {
  disabled?: boolean;
  mode?: Mode;
  type?: ModuleSwitcherType;
}

@customElement("gds-module-switcher")
export class GDSModuleSwitcher extends LitElement {
  static override styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property() mode?: Mode = "light";
  @property() type?: ModuleSwitcherType = "standard";

  override render() {
    return html` <div
      class="module-wrapper"
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      type=${ifDefined(this.type ? this.type : undefined)}
      disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
    >
      <button
        id="gds-button"
        background="outlined"
        type=${ifDefined(this.type ? this.type : undefined)}
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        rounded="all"
        size="compact"
        ?disabled="${this.disabled}"
      >
        <span class="module-text">
          <slot> </slot>
        </span>
        <gds-icon
          size="20"
          icon="arrow-down"
          foreground="${this.type === "n1"
            ? "blurple"
            : this.mode === "dark"
            ? "gray"
            : "eggplant"}"
          foreground-level="${this.type === "n1"
            ? "400"
            : this.mode === "dark"
            ? "100"
            : "1000"}"
        >
        </gds-icon>
      </button>
    </div>`;
  }
}
