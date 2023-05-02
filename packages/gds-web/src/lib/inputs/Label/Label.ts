import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./index.scss?inline";
import { InputLabelSize, Mode } from "@nielsen-media/gds-types";

export interface GDSLabel {
  disabled?: boolean;
  error?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  mode?: Mode;
  name?: string;
  required?: boolean;
  size?: InputLabelSize;
  value?: string;
}

@customElement("gds-label")
export class GDSLabel extends LitElement {
  static override styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property() direction?: "horizontal" | "vertical" = "vertical"; // takes a MenuItem id
  @property({ type: Boolean, reflect: true }) error? = false;
  @property() helpText? = "";
  @property() label? = "Label";
  @property() override id = "";
  @property() mode?: Mode = "light";
  @property() name? = "";
  @property({ type: Boolean, reflect: true }) required? = false;
  @property() size?: InputLabelSize = "compact";
  @property() value? = "";

  handleClick() {
    // Focus the input on Label click
    const slot = this.shadowRoot?.querySelector(`slot`);

    // const component = slot?.assignedElements({flatten: true})[0] as HTMLInputElement;
    const component = slot?.assignedElements({
      flatten: true,
    })[0] as HTMLElement;

    // Exit if no component exists
    if (!component) return;

    // Handles the case if slot is an input element
    const input = component.shadowRoot?.querySelector(
      `input`
    ) as HTMLInputElement;
    // Handles the case if slot is an button element
    const button = component.shadowRoot
      ?.querySelector(`gds-select`)
      ?.shadowRoot?.querySelector("button") as HTMLButtonElement;

    button?.focus();
    input?.focus();
  }

  override render() {
    return html`
      <label
        for="${this.name}"
        class="gds-label"
        tabindex="-1"
        size=${ifDefined(this.size ? this.size : undefined)}
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        error=${ifDefined(this.error ? true : false)}
        disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
        direction=${ifDefined(this.direction ? this.direction : undefined)}
        required=${ifDefined(this.required ? this.required : undefined)}
      >
        <div class="text-container">
          <slot name="label" class="label" @click=${this.handleClick}></slot>
          ${this.helpText
            ? html` <span class="helper-text">${this.helpText}</span> `
            : ""}
        </div>

        <slot name="input"></slot>
      </label>
    `;
  }
}
