import { css, html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement, state } from "lit/decorators.js";
import {
  MenuItem,
  MenuSize,
  MenuType,
  MenuWidth,
  Mode,
} from "@nielsen-media/gds-types";
import styles from "./multi.scss?inline";

function toggleMultiMenuListItem(
  input: HTMLInputElement,
  listItem: HTMLLIElement
) {
  if (input && input.checked) {
    input.checked = false;

    listItem?.removeAttribute("selected");
  } else if (input && !input.checked) {
    input.checked = true;
    listItem?.setAttribute("selected", "true");
  }
}

export interface GDSMenuMulti {
  defaultSelectedItem?: string;
  disabled?: boolean;
  divider?: boolean;
  items: MenuItem[];
  mode?: Mode;
  size?: MenuSize;
  type?: MenuType;
  width?: MenuWidth;
  onSelect?: (e: CustomEvent) => void;
  onKeydown?: (e: CustomEvent) => void;
}

@customElement("gds-menu-multi")
export class GDSMenuMulti extends LitElement {
  static override styles = unsafeCSS([
    styles,
    css`
      :host {
        display: inline-block;
        --width: var(--width);
      }
    `,
  ]);

  @property() defaultSelectedItems?: string[] = [];
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property({ type: Boolean, reflect: true }) divider? = false;
  @property() items: MenuItem[] = [];
  @property() mode?: Mode = "light";
  @property() size?: MenuSize = "regular";
  @property() type?: MenuType = "standard"; // standard
  @property({ reflect: true }) width?: MenuWidth = `256px`;

  @state() selected = false;
  @state()
  isUserMenu = false;
  @state()
  currentIndex = 0;

  override connectedCallback(): void {
    super.connectedCallback();

    if (this.parentElement?.classList.value === "module-switcher-container") {
      this.width = `${this.parentElement.clientWidth}px`;
    }

    // Wait until component is fully rendered before query.
    setTimeout(() => {
      // Checks for default Items and sets them to selected.
      this.shadowRoot?.querySelectorAll("gds-checkbox").forEach((cb) => {
        if (this.defaultSelectedItems?.includes(cb.id)) {
          const input = cb.shadowRoot?.querySelector(
            "input"
          ) as HTMLInputElement;

          input.checked = true;

          cb.parentElement?.parentElement?.setAttribute("selected", "true");
        } else {
          const input = cb.shadowRoot?.querySelector(
            "input"
          ) as HTMLInputElement;

          input.removeAttribute("checked");
        }
      });
    });
  }

  protected override updated(): void {
    const ul = this.shadowRoot?.querySelector("ul") as HTMLUListElement;
    if (ul) {
      ul.classList.add("focus");
      ul.focus();
    }

    if (this.parentElement?.classList.value === "module-switcher-container") {
      this.width = `${this.parentElement.clientWidth}px`;
    }
  }

  private handleSelect(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    const list = event.currentTarget as HTMLUListElement;
    const target = event.target as HTMLButtonElement;
    const input = target.shadowRoot?.querySelector("input");

    const lis = list.querySelectorAll("li") as NodeListOf<HTMLLIElement>;
    const isClickedLi: HTMLLIElement | undefined = [...lis].find((li) => {
      return li.children[0].children[0].id === target.id;
    });

    /**
     * Toggle the inputs on and off.
     */
    if (input && input.checked) {
      input.checked = false;
      isClickedLi?.removeAttribute("selected");
    } else if (input && !input.checked) {
      input.checked = true;
      isClickedLi?.setAttribute("selected", "true");
    }

    /**
     * Filter in all the items with a "selected" attribute.
     *
     * Reduce them down to information we want to give back to the user.
     */
    const filteredItems = [...lis]
      .filter((item) => item.hasAttribute("selected"))
      .reduce((acc, curr) => {
        const cb = curr.querySelector("gds-checkbox") as HTMLInputElement;
        const input = cb?.shadowRoot?.querySelector("input");
        const label = cb?.shadowRoot?.querySelector("label");

        acc.push({
          id: cb?.id,
          value: input?.name,
          label: label?.innerText,
        });

        return acc;
      }, [] as object[]);

    /**
     * Create our custom event to give back to the user on click.
     */
    const customEvt = new CustomEvent("onSelect", {
      bubbles: false,
      detail: {
        items: [...filteredItems],
      },
    });

    this.dispatchEvent(customEvt);
    return customEvt;
  }

  private handleKeyboardSelect(event: KeyboardEvent) {
    const list = event.currentTarget as HTMLUListElement;
    const lis = Array.from(list.children) as HTMLLIElement[];
    const button = lis[this.currentIndex].children[0] as HTMLButtonElement;
    const input = button.children[0].shadowRoot?.querySelector("input");

    if (lis) {
      console.log(event);
      switch (event.code) {
        case "ArrowUp":
          // Remove the highlighting from the previous element
          lis[this.currentIndex].children[0].classList.remove("highlight");

          // Decrease the counter
          this.currentIndex = this.currentIndex > 0 ? --this.currentIndex : 0;

          // Highlight the new element
          lis[this.currentIndex].children[0].classList.add("highlight");
          break;
        case "ArrowDown":
          // Remove the highlighting from the previous element
          lis[this.currentIndex].children[0].classList.remove("highlight");

          // Increase counter
          this.currentIndex =
            this.currentIndex < lis.length - 1
              ? ++this.currentIndex
              : lis.length - 1;

          // Highlight the new element
          lis[this.currentIndex].children[0].classList.add("highlight");
          break;
        case "Enter":
          if (input && lis[this.currentIndex]) {
            toggleMultiMenuListItem(input, lis[this.currentIndex]);
          }
          break;
        case "Space":
          if (input && lis[this.currentIndex]) {
            toggleMultiMenuListItem(input, lis[this.currentIndex]);
          }
          break;
      }
    }

    // TODO: Find the default selected items and add
    // them to custom  event
    const filteredItems = [...lis]
      .filter((item) => item.hasAttribute("selected"))
      .reduce((acc, curr) => {
        const cb = curr.querySelector("gds-checkbox") as HTMLInputElement;
        const input = cb?.shadowRoot?.querySelector("input");
        const label = cb?.shadowRoot?.querySelector("label");

        acc.push({
          id: cb?.id,
          value: input?.name,
          label: label?.innerText,
        });

        return acc;
      }, [] as object[]);

    const customEvent = new CustomEvent("onKeydown", {
      detail: {
        code: event.code,
        items: filteredItems,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  }

  private handleblur(event: Event) {
    const ul = event.target as HTMLUListElement;
    ul.classList.remove("focus");
    const ulArr = [...ul.children];
    ulArr.forEach((li) => {
      // remove the highlight class from the button element when
      // moving away from the input.
      const btn = li.children[0];
      btn.classList.remove("highlight");
    });
  }

  override render() {
    return html` <ul
      style="width: ${this.width || "auto"};"
      role="menu"
      tabindex="1"
      @click="${this.handleSelect}"
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      type=${ifDefined(this.type ? this.type : undefined)}
      @keydown="${this.handleKeyboardSelect}"
      @blur="${this.handleblur}"
    >
      ${this.items.map((item) => {
        return html` <li
          role="menu-item"
          tabindex="-1"
          selected=${ifDefined(this.selected ? this.selected : undefined)}
          divider=${ifDefined(this.divider ? this.divider : undefined)}
          mode=${ifDefined(this.mode ? this.mode : undefined)}
          type=${ifDefined(this.type ? this.type : undefined)}
        >
          <button
            tabindex="-1"
            ?disabled="${this.disabled}"
            size=${ifDefined(this.size ? this.size : undefined)}
          >
            <gds-checkbox
              tabindex="-1"
              id=${item.id}
              mode=${ifDefined(this.mode ? this.mode : undefined)}
              size=${ifDefined(this.size ? this.size : undefined)}
              value=${item.value}
              label=${item.label}
            ></gds-checkbox>
          </button>
        </li>`;
      })}
    </ul>`;
  }
}
