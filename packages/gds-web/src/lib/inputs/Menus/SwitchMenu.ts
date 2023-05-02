import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement, state } from "lit/decorators.js";
import { MenuSize, Mode, SwitchMenuItem } from "@nielsen-media/gds-types";
import styles from "./switch-menu.scss?inline";

export interface GDSMenuSwitch {
  id: string;
  items: SwitchMenuItem[];
  mode?: Mode;
  size?: MenuSize;
  width?: string;
}

@customElement("gds-menu-switch")
export class GDSMenuSwitch extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() override id = "";
  @property() items: SwitchMenuItem[] = [];
  @property() mode?: Mode = "light";
  @property() size?: MenuSize = "regular";
  @property({ reflect: true }) width?: string | undefined = ``;

  // @state() selected = false;
  @state() type = "standard";
  @state() selectedItems = 0;
  @state() currentIndex = 0;

  override connectedCallback(): void {
    super.connectedCallback();
    // Get the total amount of selected items.  This is to display to users
    // and keep running count of selected.
    this.selectedItems = this.items.filter((item) => item.checked).length;
  }

  private handleKeyboardSelect(event: KeyboardEvent) {
    const items = this.shadowRoot?.querySelectorAll("li[role='menu-item']");

    //? This line highlight the first item in the list when the menu is in focus

    if (items) {
      // We have to define our button and our switch ahead of the conditionals
      const btn = items[this.currentIndex].querySelector("button");
      const sx = btn?.querySelector("gds-switch");

      if (items) {
        switch (event.code) {
          case "ArrowUp":
            // Remove the highlighting from the previous element
            items[this.currentIndex].children[0].classList.remove("highlight");
            // Decrease the counter
            this.currentIndex = this.currentIndex > 0 ? --this.currentIndex : 0;

            // Highlight the new element
            items[this.currentIndex].children[0].classList.add("highlight");
            break;

          case "ArrowDown":
            // btn?.removeAttribute("class");
            // Remove the highlighting from the previous element
            items[this.currentIndex].children[0].classList.remove("highlight");
            // Increase counter
            this.currentIndex =
              this.currentIndex < items.length - 1
                ? ++this.currentIndex
                : items.length - 1;

            // Highlight the new element
            items[this.currentIndex].children[0].classList.add("highlight");
            break;
          case "Enter":
            //? Abstract into function?
            if (sx?.hasAttribute("checked")) {
              sx.removeAttribute("checked");
              this.selectedItems = this.selectedItems - 1;
            } else {
              sx?.setAttribute("checked", "true");
              this.selectedItems = this.selectedItems + 1;
            }

            break;
          case "Space":
            //? Abstract into function?
            if (sx?.hasAttribute("checked")) {
              sx.removeAttribute("checked");
              this.selectedItems = this.selectedItems - 1;
            } else {
              sx?.setAttribute("checked", "true");
              this.selectedItems = this.selectedItems + 1;
            }
            break;
          default:
            break;
        }
      }
    }
  }

  handleKeydown = (e: KeyboardEvent) => {
    const items = this.shadowRoot?.querySelectorAll(
      "li[role='menu-item']"
    ) as NodeListOf<LitElement>;
    switch (e.code) {
      case "ArrowDown":
        items[0].focus();
        items[0].children[0].classList.add("highlight");

        items[0].style.outline = "none";
        break;
    }
  };

  private handleblur(event: Event) {
    const ul = this.shadowRoot?.querySelector("ul");
    if (!ul) return;
    console.log(ul);
    // ul?.classList.remove("focus");
    const ulArr = [...ul.children];
    ulArr.forEach((li) => {
      // remove the highlight class from the button element when
      // moving away from the input.
      const btn = li.children[0];
      btn.classList.remove("highlight");
    });
  }

  handleSelectAll = () => {
    const items = this.shadowRoot?.querySelectorAll("li[role='menu-item']");
    items?.forEach((item) => {
      // Get at each switch and if any of them are already checked,
      // don't do anything.  Otherwise flip the switch.
      const btn = item.querySelector("button") as HTMLButtonElement;
      const sx = btn.querySelector("gds-switch");
      if (sx?.hasAttribute("checked")) {
        return;
      }
      btn.click();
    });
  };

  handleClear = () => {
    const items = this.shadowRoot?.querySelectorAll("li[role='menu-item']");
    items?.forEach((item) => {
      const btn = item.querySelector("button") as HTMLButtonElement;
      const sx = btn.querySelector("gds-switch");
      if (!sx?.hasAttribute("checked")) {
        return;
      }
      btn.click();
    });
  };

  calculateSelectedItemsCount = () => {
    const items = this.shadowRoot?.querySelectorAll(
      "li[role='menu-item']"
    ) as NodeListOf<LitElement>;
    const arr = Array.from(items);
    const count = arr?.reduce((count, curr) => {
      const btn = curr?.querySelector("button") as HTMLButtonElement;
      const sx = btn.querySelector("gds-switch");
      return !sx?.hasAttribute("checked") ? count + 0 : count + 1;
    }, 0);

    this.selectedItems = count;
  };

  override render() {
    return html` <ul
      id=${this.id}
      style="width: ${this.width};"
      role="menu"
      tabindex="1"
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      type=${ifDefined(this.type ? this.type : undefined)}
    >
      <li
        role="menu-controls"
        class="list-controls"
        tabindex="-1"
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        type=${ifDefined(this.type ? this.type : undefined)}
      >
        <gds-button
          id="select-all"
          aria-label="Select all items"
          size="tiny"
          background="transparent"
          @keydown=${this.handleKeydown}
          @click=${(e: MouseEvent) => {
            const btn = e.currentTarget as HTMLButtonElement;
            this.blur();
            btn.focus();

            this.handleSelectAll();
          }}
          >Select All</gds-button
        >
        <gds-button
          aria-label="Clear all selected items"
          size="tiny"
          background="transparent"
          @keydown=${this.handleKeydown}
          @blur="${this.handleblur}"
          @click=${(e: MouseEvent) => {
            const btn = e.currentTarget as HTMLButtonElement;

            btn.focus();
            this.blur();
            this.handleClear();
          }}
          >Clear</gds-button
        >
        <h5 class="selected-count">${this.selectedItems} Selected</h5>
      </li>
      ${this.items.map((item) => {
        return html` <li
          tabindex="-1"
          role="menu-item"
          mode=${ifDefined(this.mode ? this.mode : undefined)}
          type=${ifDefined(this.type ? this.type : undefined)}
          @keydown="${this.handleKeyboardSelect}"
        >
          <button
            tabindex="-1"
            size=${ifDefined(this.size ? this.size : undefined)}
            id=${item.id}
            @keydown=${(e: KeyboardEvent) => {
              e.preventDefault();
            }}
            @click=${(e: MouseEvent) => {
              if (item.action) item.action(e);
              const btn = e.currentTarget as HTMLButtonElement;
              const sx = btn.querySelector(`#${btn.id}`) as HTMLInputElement;
              if (sx && sx.checked) {
                sx.checked = false;
                this.selectedItems = this.selectedItems - 1;
              } else {
                sx.checked = true;
                this.selectedItems = this.selectedItems + 1;
              }
            }}
          >
            ${item.label}
            <gds-switch
              tabindex="-1"
              id=${item.id}
              mode=${ifDefined(this.mode ? this.mode : undefined)}
              size=${ifDefined(this.size ? this.size : undefined)}
              value=${item.value}
              @click=${item.action}
              checked=${ifDefined(item.checked ? true : undefined)}
            ></gds-switch>
          </button>
        </li>`;
      })}
    </ul>`;
  }
}
