import { Mode, RadioSize } from "@nielsen-media/gds-types";
import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio.scss?inline";

export interface GDSRadio {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  mode?: Mode;
  name?: string;
  size?: RadioSize;
  value?: string;
  onClick?: (e: CustomEvent) => void;
}

@customElement("gds-radio")
export class GDSRadio extends LitElement {
  static override styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) checked? = false;
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property({ type: Boolean, reflect: true }) error? = false;
  @property() helpText? = "Help text";
  @property() override id = "";
  @property() label? = "Label";
  @property() mode?: Mode = "light";
  @property() name? = "";
  @property() size?: RadioSize = "compact";
  @property() value? = "";
  @property() onClick?: (e: CustomEvent) => void = this.handleClick;

  handleClick() {
    const input = this.shadowRoot?.querySelector(
      `input[name=${this.name}]`
    ) as HTMLInputElement;
    const inputs = document.querySelectorAll(
      "gds-radio"
    ) as NodeListOf<HTMLInputElement>;

    inputs.forEach((el) => {
      const curr = el.shadowRoot?.querySelector(
        `input[name=${this.name}]`
      ) as HTMLInputElement;
      // input.focus();
      if (curr) {
        // input !== curr ? curr.checked = false : (curr.checked = true, curr.focus());
        input !== curr ? (curr.checked = false) : (curr.checked = true);
      }
    });

    const event = new CustomEvent("onClick", {
      bubbles: false,
      composed: true,
      detail: {
        id: input.id,
        name: input.name,
        value: input.value,
      },
    });

    this.dispatchEvent(event);
  }

  override render() {
    return html`
      <label
        for="radio"
        class="gds-radio"
        tabindex="-1"
        size=${ifDefined(this.size ? this.size : undefined)}
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        error=${ifDefined(this.error ? this.error : false)}
        disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
        checked=${ifDefined(this.checked ? this.checked : undefined)}
      >
        <input
          tabindex="1"
          type="radio"
          role="radio"
          name=${this.name}
          id="${ifDefined(this.id ? this.id : "radio")}"
          value=${this.value}
          @click=${this.handleClick}
          checked=${ifDefined(this.checked ? this.checked : undefined)}
        />
        <div class="text-container">
          <span class="label" @click=${this.handleClick}
            >${ifDefined(this.label ? this.label : undefined)}</span
          >
          ${this.helpText
            ? html` <span class="helper-text">${this.helpText}</span> `
            : ""}
        </div>
      </label>
    `;
  }
}
