import { Mode, SwitchSize } from "@nielsen-media/gds-types";
import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./index.scss?inline";

export interface GDSSwitch {
  checked?: boolean;
  disabled?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  mode?: Mode;
  size?: SwitchSize;
  onChange?: (e: CustomEvent) => void;
}

@customElement("gds-switch")
export class GDSSwitch extends LitElement {
  static override styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) checked? = false;
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property() helpText? = "";
  @property() label? = "";
  @property() override id = "";
  @property() mode?: Mode = "light";
  @property() size?: SwitchSize = "compact";
  @property() onChange? = this.handleChange;

  handleChange(e: CustomEvent) {
    const isChecked = (<HTMLInputElement>e.target).checked;

    const input = this.shadowRoot?.querySelector("input") as HTMLInputElement;

    const event = new CustomEvent("onChange", {
      bubbles: false,
      composed: true,
      detail: {
        id: input.id,
        label: this.label,
        checked: isChecked,
      },
    });

    this.dispatchEvent(event);
    return;
  }

  override render() {
    return html`
      <label
        for=${ifDefined(this.id ? this.id : "switch")}
        class="gds-switch"
        size=${ifDefined(this.size ? this.size : undefined)}
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
      >
        <input
          type="checkbox"
          role="switch"
          id="${ifDefined(this.id ? this.id : "switch")}"
          @change=${this.handleChange}
          .checked=${ifDefined(this.checked ? this.checked : undefined)}
        />
        ${this.label?.length
          ? html`<div class="text-container">
              <span class="label">${this.label}</span>
              ${this.helpText?.length
                ? html` <span class="help-text">${this.helpText}</span> `
                : ""}
            </div>`
          : null}
      </label>
    `;
  }
}
