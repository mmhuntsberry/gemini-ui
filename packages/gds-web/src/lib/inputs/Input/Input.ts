import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  InputIcon,
  InputSize,
  InputType,
  Mode,
} from "@nielsen-media/gds-types";

import styles from "./index.scss?inline";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export interface GDSInput {
  "aria-label"?: string;
  alt?: boolean;
  disabled?: boolean;
  error?: boolean;
  id: string;
  icon?: InputIcon | undefined;
  mode?: Mode;
  name?: string;
  placeholder?: string;
  required?: boolean;
  size?: InputSize;
  type?: InputType;
  value?: string;
  onChange?: (e: CustomEvent) => void;
  onInput?: (e: CustomEvent) => void;
}

@customElement("gds-input")
export class GDSInput extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() "aria-label"? = "";
  @property({ type: Boolean, reflect: true }) alt? = false;
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property({ type: Boolean, reflect: true }) error? = false;
  @property() override id = "";
  @property() icon?: InputIcon | undefined;
  @property() mode?: Mode = "light";
  @property() name? = "";
  @property() placeholder? = "";
  @property({ type: Boolean, reflect: true }) required? = false;
  @property() size?: InputSize = "compact";
  @property() type?: InputType = "text";
  @property() value? = "";
  onChange?: (e: CustomEvent) => void = this.handleChange;
  onInput?: (e: CustomEvent) => void = this.handleInput;

  handleChange(e: CustomEvent) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    this.validateInput(e, this.value, this.type ?? "text");

    const event = new CustomEvent("onChange", {
      detail: {
        value: target?.value,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  handleInput(e: CustomEvent) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    this.validateInput(e, this.value, this.type ?? "text");

    const event = new CustomEvent("onInput", {
      detail: {
        value: target?.value,
      },
      bubbles: false,
      composed: false,
    });

    return this.dispatchEvent(event);
  }

  validateInput = (e: Event, value: string, type: string) => {
    const target = e.target as HTMLInputElement;
    const isValid = validateEmail(target.value);
    switch (type) {
      case "email":
        isValid ? (this.error = false) : (this.error = true);
        break;
      case "passowrd":
        // TODO: Let user pass regex for password validation
        break;
      default:
        break;
    }
  };

  override render() {
    return html`
      <div
        class="input-container"
        alt=${ifDefined(this.alt ? this.alt : undefined)}
        size=${ifDefined(this.size ? this.size : "regular")}
        mode=${ifDefined(this.mode ? this.mode : "light")}
        icon=${ifDefined(this.icon?.name ? true : undefined)}
        error=${ifDefined(this.error ? this.error : false)}
        disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
      >
        ${this.icon?.name
          ? html`
              <gds-display-icon
                icon="${this.icon.name}"
                outlined=${this.icon.outlined}
                mode=${ifDefined(this.mode ? this.mode : "light")}
                foreground-level="500"
              ></gds-display-icon>
            `
          : null}
        <input
          aria-label=${this["aria-label"]}
          for="${this.name}"
          class="gds-input"
          tabindex="1"
          placeholder="${ifDefined(
            this.placeholder ? this.placeholder : undefined
          )}"
          type=${this.type}
          name=${this.name}
          @change=${this.handleChange}
          @input=${this.handleInput}
          id="${ifDefined(this.id ? this.id : undefined)})}"
          .value=${this.value}
          disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
          required=${ifDefined(this.required ? this.required : undefined)}
        />
      </div>
    `;
  }
}
