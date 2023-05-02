import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-group.scss?inline";

export interface GDSRadioGroup {
  direction?: "horizontal" | "vertical";
  id: string;
  onClick?: (e: Event) => void;
  onKeydown?: (e: KeyboardEvent) => void;
}

@customElement("gds-radio-group")
export class GDSRadioGroup extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() direction?: "horizontal" | "vertical" = "horizontal";
  @property() override id = "";
  @property() onClick? = this.handleClick;
  @property() onKeydown? = this.handleKeyboardSelect;

  @state()
  currentIndex = 0;

  handleClick(e: Event) {
    const inputs = document.querySelectorAll(
      "gds-radio"
    ) as NodeListOf<HTMLInputElement>;
    const target = e.target as HTMLInputElement;

    // Filter in the inputs with the same name as the target
    [...inputs]
      .filter((el) => el.name === target.name)
      .forEach((el) => {
        const input = el.shadowRoot?.querySelector(`input`) as HTMLInputElement;
        if (el === target) {
          target.checked = true;
          input.checked = true;
        } else {
          el.checked = false;
          input.checked = false;
        }
      });

    this.currentIndex = [...inputs].findIndex((el) => el === target);

    // Get the currently selected radio button
    const current = inputs[this.currentIndex];

    if (current) {
      const event = new CustomEvent("onClick", {
        bubbles: false,
        composed: true,
        detail: {
          id: current.id,
          name: current.name,
          value: current.value,
        },
      });

      this.dispatchEvent(event);
    }
  }

  private handleKeyboardSelect(e: KeyboardEvent) {
    e.stopPropagation();

    const inputs = document.querySelectorAll(
      "gds-radio"
    ) as NodeListOf<HTMLInputElement>;
    const target = e.target as HTMLInputElement;

    target.focus();

    function clearInputs() {
      inputs.forEach((el) => {
        const input = el.shadowRoot?.querySelector(`input`) as HTMLInputElement;

        el.checked = false;
        input.checked = false;
        target.checked = false;
      });
    }

    const setInput = () => {
      const host = inputs[this.currentIndex];
      const input = inputs[this.currentIndex].shadowRoot?.querySelector(
        `input`
      ) as HTMLInputElement;
      input.focus();
      host.checked = true;
      input.checked = true;
    };

    switch (e.key) {
      case "ArrowUp":
        this.currentIndex = this.currentIndex > 0 ? --this.currentIndex : 0;
        clearInputs();
        setInput();

        break;
      case "ArrowDown":
        this.currentIndex =
          this.currentIndex < inputs.length - 1
            ? ++this.currentIndex
            : inputs.length - 1;
        clearInputs();
        setInput();
        break;
      case "ArrowLeft":
        this.currentIndex = this.currentIndex > 0 ? --this.currentIndex : 0;
        clearInputs();
        setInput();

        break;
      case "ArrowRight":
        this.currentIndex =
          this.currentIndex < inputs.length - 1
            ? ++this.currentIndex
            : inputs.length - 1;
        clearInputs();
        setInput();
        break;

      default:
        break;
    }

    const current = inputs[this.currentIndex];

    const event = new CustomEvent("onKeydown", {
      bubbles: false,
      composed: true,
      detail: {
        id: current.id,
        name: current.name,
        value: current.value,
      },
    });

    this.dispatchEvent(event);
  }

  handleFocus(e: Event) {
    this.blur();
  }

  handleblur(e: Event) {
    const inputs = document.querySelectorAll(
      "gds-radio"
    ) as NodeListOf<HTMLInputElement>;

    inputs.forEach((el, i) => {
      const input = el.shadowRoot?.querySelector(`input`) as HTMLInputElement;
      if (el.checked) {
        el.focus();
        input.focus();
        this.currentIndex = i;
      }
    });

    const current = inputs[this.currentIndex];

    const event = new CustomEvent("on-blur", {
      bubbles: false,
      composed: true,
      detail: {
        id: current.id,
        name: current.name,
        value: current.value,
      },
    });

    this.dispatchEvent(event);
  }

  override render() {
    return html`
      <fieldset
        tabindex="0"
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @keydown=${this.handleKeyboardSelect}
        @blur=${this.handleblur}
        direction=${ifDefined(this.direction ? this.direction : "horizontal")}
      >
        <slot></slot>
      </fieldset>
    `;
  }
}
