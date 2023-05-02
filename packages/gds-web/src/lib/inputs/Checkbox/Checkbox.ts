import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  GDSCheckbox as CheckboxType,
  Size,
  Mode,
} from "@nielsen-media/gds-types";

import styles from "./index.scss?inline";

export interface GDSCheckbox {
  "aria-label"?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  helpText?: string;
  id: string;
  indeterminate?: boolean;
  label?: string;
  mode?: Mode;
  size?: Size;
  value?: string;
  onClick?: (e: CustomEvent) => void;
}

@customElement("gds-checkbox")
export class GDSCheckbox extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() "aria-label"? = "";
  @property({ type: Boolean, reflect: true }) checked? = false;
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property() error? = false;
  @property() helpText? = "";
  @property() override id = "";
  @property() indeterminate? = false;
  @property() items?: CheckboxType[] = [];
  @property() label? = "";
  @property() mode?: Mode = "light";
  @property() size?: Size = "compact";
  @property() value? = "";
  @property() onClick?: (e: CustomEvent) => void = this.handleClick;

  private handleClick(e: CustomEvent) {
    e.stopPropagation();

    /**
     * Get the currently clicked item element
     */
    const target = e.target as HTMLInputElement;

    /**
     * Handle Selection -
     * This handles styles of checkbox and how its selected
     */
    this.handleSelection(target);

    /**
     * Gathers up any/all lis that is not the first child 'li'
     * !TECH DEBT: The first or 'main' li that acts as the root for a nested elemnt isn't nested in an li.  It needs to be in and li and some logic needs to be rewritten to look for and use the first-child li to act as the root.
     */
    const childrenElements = this.shadowRoot?.querySelectorAll(
      "li > input"
    ) as NodeListOf<HTMLInputElement>;

    /**
     * We need to turn nodeList into js array so we can use array methods.
     */
    const childrenElementArr = [...childrenElements] as HTMLInputElement[];

    /**
     * Filter in all elements that have been checked
     */
    const filteredChildren = childrenElementArr.filter((el) => el.checked);

    type Items = {
      id: string;
      name: string;
      checked: boolean;
    };

    /**
     * List out all of the child checkboxes that are 'checked' as an array.
     */
    const reducedChildren = filteredChildren.reduce((acc, curr) => {
      if (curr.checked) {
        acc.push({
          id: curr.id,
          name: curr.name,
          checked: curr.checked,
        });
      }
      return acc;
    }, [] as Items[]);

    /**
     * Set up custom event to give the use details on whats been selected, deselected, etc... by the user.
     * The information when logged is under 'event.detail'.
     */
    const event = new CustomEvent("onClick", {
      bubbles: false,
      composed: true,
      detail: {
        value: this.value,
        label: this.label,
        items: reducedChildren,
        checked: target.checked,
      },
    });

    this.dispatchEvent(event);
    return;
  }

  private handleSelection(element: HTMLInputElement) {
    /**
     * Get a reference to the root element.  There should always be a root element.
     */
    const parentElement = this.shadowRoot?.querySelector(
      "ul > input"
    ) as HTMLInputElement;

    /**
     * Eject if this is not a 'nested' checkbox.
     */
    if (!this.items?.length) {
      return;
    }

    /**
     * Gathers up any/all lis that is not the first child 'li'
     * !TECH DEBT: The first or 'main' li that acts as the root for a nested elemnt isn't nested in an li.  It needs to be in and li and some logic needs to be rewritten to look for and use the first-child li to act as the root.
     */
    const childrenElements = this.shadowRoot?.querySelectorAll(
      "li > input"
    ) as NodeListOf<HTMLInputElement>;

    /**
     * If the parent element is checked.  Check all of them.
     */
    if (parentElement === element && parentElement.checked) {
      childrenElements?.forEach((el) => {
        el.checked = true;
      });

      /**
       * If the parent element is unchecked.  Uncheck all of them.
       */
    } else if (parentElement === element && !parentElement.checked) {
      childrenElements.forEach((el) => {
        if (el.checked) {
          el.checked = false;
        }
      });
    }

    /**
     * Gather up the nested children.
     */
    const childrenElementArr = [...childrenElements] as HTMLInputElement[];

    /**
     * Check to see if all children are checked.
     */
    const every = [...childrenElements].every((el) => el.checked);

    /**
     * If every child and the parent is checked.
     * Remove any indeterminate state from the parent.
     */
    if (every) {
      parentElement.checked = true;
      parentElement.setAttribute("indeterminate", "false");
    } else {
      /**
       * We keep a running count of how many children are checked.
       *
       * If a child is selected we set an indeterminate state to the parent.
       * We also set a checked state to the child.
       *
       * If all children are unselected we remove all states
       * from child and parent.
       */
      let count = 0;

      childrenElementArr.forEach((el) => {
        if (el.checked) count++;
      });

      if (count === 0) {
        parentElement.removeAttribute("indeterminate");
        parentElement.checked = false;
        parentElement.removeAttribute("checked");
      } else if (count < childrenElementArr.length) {
        parentElement.checked = true;
        parentElement.setAttribute("indeterminate", "true");
      }
    }
  }

  /**
   * Check if inputs have updated.
   */
  override firstUpdated() {
    const input = this.shadowRoot?.querySelector(
      ".wrapper > input"
    ) as HTMLInputElement;

    if (input) {
      // input.checked = this.checked;
      input.setAttribute("checked", "true");
    }
  }

  override render() {
    /**
     * Render this if not a Nested Checkbox
     */
    if (this.items?.length === 0) {
      // const { label, value } = this.values;
      return html` <div
        class="wrapper"
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        size=${ifDefined(this.size ? this.size : undefined)}
      >
        <input
                  aria-label=${ifDefined(this["aria-label"] ? this["aria-label"] : undefined)}

          ?disabled="${this.disabled}"
          error=${ifDefined(this.error ? this.error : undefined)}
          id=${this.id}
          indeterminate=${ifDefined(
            this.indeterminate ? this.indeterminate : undefined
          )}
          @click=${this.handleClick}
          name=${this.value}
          size=${ifDefined(this.size ? this.size : undefined)}
          type="checkbox"
        />

        <label
          for=${this.id}
          disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
          >${this.label}
          ${this.helpText &&
          html`<legend size=${ifDefined(this.size ? this.size : undefined)}>
            ${this.helpText}
          </legend>`}
        </label>
      </div>`;

      /**
       * Render this if a Nested Checkbox
       */
    } else {
      // const { items } = this.it;
      return html` <div
        class="wrapper"
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        size=${ifDefined(this.size ? this.size : undefined)}
      >
        <ul>
          <input
                    aria-label=${ifDefined(this["aria-label"] ? this["aria-label"] : undefined)}

            ?disabled="${this.disabled}"
            error=${ifDefined(this.error ? this.error : undefined)}
            id=${this.id}
            indeterminate=${ifDefined(
              this.indeterminate ? this.indeterminate : undefined
            )}
            @click=${this.handleClick}
            name=${this.value}
            size=${ifDefined(this.size ? this.size : undefined)}
            type="checkbox"
            checked=${ifDefined(this.checked ? this.checked : undefined)}
          />
          <label
            for=${this.id}
            disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
            >${this.label}</label
          >

          ${this.items?.map(({ id, label, value, checked }) => {
            return html`
              <li>
                <input
                  ?disabled="${this.disabled}"
                  error=${ifDefined(this.error ? this.error : undefined)}
                  id=${id}
                  indeterminate=${ifDefined(
                    this.indeterminate ? this.indeterminate : undefined
                  )}
                  @click=${this.handleClick}
                  name=${value}
                  size=${ifDefined(this.size ? this.size : undefined)}
                  type="checkbox"
                  checked=${ifDefined(checked ? checked : undefined)}
                />
                <label
                  for=${id}
                  disabled=${ifDefined(
                    this.disabled ? this.disabled : undefined
                  )}
                  >${label}</label
                >
              </li>
            `;
          })}
        </ul>
      </div>`;
    }
  }
}
