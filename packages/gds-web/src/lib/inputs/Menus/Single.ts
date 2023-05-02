import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement, state } from "lit/decorators.js";

import { MenuItem, MenuSize, MenuType, Mode } from "@nielsen-media/gds-types";

import styles from "./single.scss?inline";

export interface GDSMenuSingle {
  defaultSelectedItem?: string;
  disabled?: boolean;
  divider?: boolean;
  items: MenuItem[];
  mode?: Mode;
  size?: MenuSize;
  type?: MenuType;
  width?: string;
  onSelect?: (e: CustomEvent) => void;
  onKeydown?: (e: CustomEvent) => void;
}

@customElement("gds-menu-single")
export class GDSMenuSingle extends LitElement {
  static override styles = unsafeCSS(styles);

  // Expects an ID of the item to be selected by default
  @property() defaultSelectedItem? = "";
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property({ type: Boolean, reflect: true }) divider? = false;
  @property() items: MenuItem[] = [];
  @property() mode?: Mode = "light";
  @property() size?: MenuSize = "regular";
  @property() type?: MenuType = "standard";
  @property() width? = "";

  @state()
  isUserMenu = false;
  @state()
  currentIndex = 0;

  override connectedCallback(): void {
    super.connectedCallback();

    if (this.parentElement?.classList.value === "user-menu") {
      this.isUserMenu = !this.isUserMenu;
    } else if (
      this.parentElement?.classList.value === "module-switcher-container"
    ) {
      this.width = `${this.parentElement.clientWidth}px`;
    }
    // else {
    //   this.width = `${this.parentElement?.clientWidth}px` || "auto";
    // }
  }

  protected override updated(): void {
    const ul = this.shadowRoot?.querySelector("ul") as HTMLUListElement;
    if (ul) {
      ul.classList.add("focus");
      ul.focus();
    }

    // TODO: SET CURRENT INDEX TO DEFAULT OR CURRENTLY SELECTED ITEM
    const li = ul.children;
    [...li].forEach((element) => {
      if (element.children[0].id === this.defaultSelectedItem) {
        element.setAttribute("selected", "true");
      }
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  private handleSelect(event: Event) {
    const btn = event.target as HTMLButtonElement;
    const li = btn.parentElement as HTMLLIElement;
    const ul = li.parentElement as HTMLUListElement;
    const lis = Array.from(ul.children) as HTMLLIElement[];

    if (li.hasAttribute("selected")) {
      li.removeAttribute("selected");
    } else {
      lis.forEach((element) => {
        // remove all selected
        element.removeAttribute("selected");
      });
      li.setAttribute("selected", "true");
    }

    let details;

    this.items.forEach((item) => {
      if (item.id === btn.id) {
        details = { ...item };
      }
    });

    const customEvent = new CustomEvent("onSelect", {
      detail: {
        item: details,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  }

  private handleKeyboardSelect(event: KeyboardEvent) {
    const ul = event.target as HTMLUListElement;
    const lis = Array.from(ul.children) as HTMLLIElement[];

    let details;

    if (lis) {
      switch (event.code) {
        case "ArrowUp":
          if (!lis[this.currentIndex]) return;

          // Remove the highlighting from the previous element
          lis[this.currentIndex].children[0].classList.remove("highlight");

          // Decrease the counter
          this.currentIndex = this.currentIndex > 0 ? --this.currentIndex : 0;

          // Highlight the new element
          lis[this.currentIndex].children[0].classList.add("highlight");
          break;
        case "ArrowDown":
          if (!lis[this.currentIndex]) return;
          // Remove the highlighting from the previous element
          lis[this.currentIndex].children[0].classList.remove("highlight");

          // If we're in user menu, we need to skip the last element, copyright info.
          if (this.isUserMenu) {
            // Increase counter
            this.currentIndex =
              this.currentIndex < lis.length - 2
                ? ++this.currentIndex
                : lis.length - 2;
          } else {
            // Increase counter
            this.currentIndex =
              this.currentIndex < lis.length - 1
                ? ++this.currentIndex
                : lis.length - 1;
          }

          // Highlight the new element
          lis[this.currentIndex].children[0].classList.add("highlight");
          break;
        case "Enter":
          if (!lis[this.currentIndex]) return;
          lis[this.currentIndex].setAttribute("selected", "true");
          break;
        case "Space":
          if (!lis[this.currentIndex]) return;
          lis[this.currentIndex].setAttribute("selected", "true");
          break;
      }
    }

    this.items.find((item) => {
      if (!lis[this.currentIndex]) return;
      if (item.id === lis[this.currentIndex].children[0].id) {
        details = { ...item };
      }
    });

    const customEvent = new CustomEvent("onKeydown", {
      detail: {
        code: event.code,
        item: details,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(customEvent);
  }

  private handleblur(event: Event) {
    const ul = event.target as HTMLUListElement;
    ul.classList.remove("focus");
  }

  override render() {
    return html` <ul
      style="--width: ${this.width};"
      role="menu"
      tabindex="1"
      mode=${ifDefined(this.mode ? this.mode : undefined)}
      type=${ifDefined(this.isUserMenu ? "settings" : undefined)}
      @keydown=${this.handleKeyboardSelect}
      @blur=${this.handleblur}
    >
      ${this.items.map((item) => {
        return html` <li
          role="menu-item"
          tabindex="-1"
          type=${ifDefined(this.type ? this.type : "standard")}
          divider=${ifDefined(this.divider ? this.divider : undefined)}
          mode=${ifDefined(this.mode ? this.mode : undefined)}
        >
          <button
            id=${item.id}
            tabindex="-1"
            ?disabled="${this.disabled}"
            @click="${this.handleSelect}"
            size=${ifDefined(this.size ? this.size : undefined)}
          >
            ${item.label}
          </button>
        </li>`;
      })}
      ${this.isUserMenu
        ? html`<li>
            <section class="copyright">
              <section class="copyright-info">
                <span>Copyright &copy; 2022</span>
                <span>The Nielsen Company (US), LLC.</span>
                <span>All Rights Reserved.</span>
              </section>
              <section class="terms-links">
                <gds-link
                  mode=${this.mode}
                  size="0"
                  color="secondary"
                  weight="bold"
                  >Terms of Use</gds-link
                >
                <gds-link
                  mode=${this.mode}
                  size="0"
                  color="secondary"
                  weight="bold"
                  >Privacy Policy</gds-link
                >
              </section>
            </section>
          </li>`
        : null}
    </ul>`;
  }
}
