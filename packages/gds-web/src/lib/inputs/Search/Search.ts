import { Mode } from "@nielsen-media/gds-types";
import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import styles from "./index.scss?inline";

export interface GDSSearch {
  "aria-label"?: string;
  mode?: Mode;
  value?: string | undefined;
  width?: "full" | undefined;
}

@customElement("gds-search")
export class GDSSearch extends LitElement {
  static override styles = unsafeCSS(styles);
  /**
   * aria-label for search input.
   */
  @property() "aria-label"?: string = "Search";
  @property() mode?: Mode = "light";

  /**
   * Default value for search input.
   */
  @property() value? = "";

  /**
   * GDSSearch width can also be undefined. It makes
   * search input width shortend and border-right radii are set to 0.
   */
  @property() width?: "full" | undefined = undefined;

  /**
   * Change input value
   */
  changeValue(event: MouseEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  /**
   * Clear search input value
   */
  clearValue() {
    this.value = "";

    const input = this.shadowRoot?.querySelector("input");
    input?.focus();
  }

  renderActionIcon() {
    if (this.value)
      if (this.value.length > 0) {
        return html`<gds-action-icon
          aria-label="Clear Search Text"
          icon="close"
          size="compact"
          foreground="blurple"
          foreground-level="500"
          @click=${this.clearValue}
        ></gds-action-icon>`;
      }

    return null;
  }

  private getIconColor() {
    switch (this.mode) {
      case "dark":
        return this.value ? "blurple" : "gray";

      default:
        return this.value ? "blurple" : "gray";
    }
  }

  private getIconColorLevel() {
    switch (this.mode) {
      case "dark":
        return this.value ? "600" : "100";

      default:
        return this.value ? "600" : "1000";
    }
  }

  override render() {
    return html`
      <div
        aria-label=${ifDefined(this["aria-label"])}
        id="input-container"
        class="input-container"
        rounded="left"
        mode=${this.mode}
        width=${ifDefined(this.width ? this.width : "")}
        @click=${(e: MouseEvent) => {
          const inputContainer = e.currentTarget as HTMLDivElement;
          const input = inputContainer.children[1] as HTMLInputElement;

          input.setAttribute("foreground", this.getIconColor());
          input.setAttribute("foreground-level", this.getIconColorLevel());
          input.focus();
        }}
      >
        <gds-display-icon
          mode=${this.mode}
          icon="search"
          size="20"
          foreground=${this.getIconColor()}
          foreground-level=${this.getIconColorLevel()}
        ></gds-display-icon>
        <input
          @input="${this.changeValue}"
          id="search"
          type="text"
          placeholder="Type to Search..."
          @blur=${(e: MouseEvent) => {
            const input = e.target as HTMLDivElement;
            const icon = input.parentElement?.children[0];
            icon?.setAttribute("foreground", this.getIconColor());
            icon?.setAttribute("foreground-level", this.getIconColorLevel());
          }}
          .value=${this.value}
        />
        ${this.renderActionIcon()}
      </div>
    `;
  }
}
