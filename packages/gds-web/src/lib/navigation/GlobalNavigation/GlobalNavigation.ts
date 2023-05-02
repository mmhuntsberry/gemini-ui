import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement, state } from "lit/decorators.js";
import styles from "./index.scss?inline";
import {
  GlobalNavigationActions,
  GlobalNavigationLogo,
  GlobalNavigationType,
  MenuItem,
  Mode,
  User,
} from "@nielsen-media/gds-types";

@customElement("gds-global-navigation")
export class GDSGlobalNav extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() actions?: GlobalNavigationActions = {
    hamburger: {
      enabled: false,
    },
    search: {
      enabled: false,
    },
    notifications: {
      enabled: false,
    },
    support: {
      enabled: false,
    },
    switcher: {
      enabled: false,
    },
    user: {
      enabled: false,
    },
  };
  @property({ type: String, reflect: true }) logo: GlobalNavigationLogo =
    "nielsen";
  @property() mode: Mode = "light";
  @property() modules: MenuItem[] = [];
  @property() override title = "Application Name";
  @property() type: GlobalNavigationType = "standard";
  // TODO: Define what a user is and what information we need.
  @property() user: User = {
    name: "Walter",
  };
  // Application Module Switcher
  @state() currentModuleToggled: MenuItem = {
    id: "",
    label: "",
    value: "",
  };

  @state() isApplicationModuleToggled = false;
  @state() isUserSettingsToggled = false;

  onOutsideClick = (event: Event) => {
    this.isUserSettingsToggled = false;
    this.isApplicationModuleToggled = false;
  };
  // @property() onOutsideClick = (event: Event) => {
  //   this.isUserSettingsToggled = false;
  //   this.isApplicationModuleToggled = false;
  // };

  handleUserSettingsClick(event: Event) {
    event.stopPropagation();
    this.isUserSettingsToggled = !this.isUserSettingsToggled;
  }

  handleApplicationModuleClick(event: Event) {
    event.stopPropagation();
    this.isApplicationModuleToggled = !this.isApplicationModuleToggled;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("click", this.onOutsideClick);

    if (this.modules.length > 0) {
      // this.currentModuleToggled = this.modules[0].label;
      this.currentModuleToggled = this.modules[0];
    }
  }

  private handleApplicationModuleSelect(event: CustomEvent) {
    this.currentModuleToggled = event.detail.item;
    // this.currentModuleToggled = event.detail.item.label;
  }

  private handleApplicationModuleKeyDown(event: CustomEvent) {
    if (event.detail.code === "Enter") {
      // TODO: This will need to be updated to handle routes
      this.currentModuleToggled = event.detail.item;
      // this.currentModuleToggled = event.detail.item.label;
      this.onOutsideClick(event);
    }

    if (event.detail.code === "Escape") {
      this.onOutsideClick(event);
    }

    if (event.detail.code === "Tab") {
      this.onOutsideClick(event);
    }
  }

  private handleUserMenuSelect(event: CustomEvent) {
    // TODO: This will need to be updated to handle routes
    // this.currentModuleToggled = event.detail.item.label;
  }

  private handleUserMenuKeyDown(event: CustomEvent) {
    if (event.detail.code === "Enter") {
      // TODO: This will need to be updated to handle routes
      // this.currentModuleToggled = event.detail.item.label;
      this.onOutsideClick(event);
    }
  }

  override render() {
    return html`
      <header
        class="d-flex justify-content-center align-items-center"
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        type=${ifDefined(this.type ? this.type : undefined)}
      >
        <div class="d-flex w-100 justify-content-between align-items-center">
          <!-- Application menu refers to the hamburger menu and the case that the module switcher is present. -->
          <div class="application-menus">
            ${this["actions"]?.hamburger.enabled
              ? html`
                  <gds-action-icon
                    size="jumbo"
                    icon="hamburger-menu"
                    mode=${this.mode}
                    @click=${this["actions"]?.hamburger.action}
                  ></gds-action-icon>
                `
              : null}
            ${this.modules.length > 0
              ? html`
            <div class="module-switcher-container">
              <gds-module-switcher
                type=${this.type}
                icon="arrow-down"
                icon-position="right"
                size="compact"
                background="outlined" 
                color="darkroom"
                mode=${this.mode}
                @click=${this.handleApplicationModuleClick}
                @keydown=${this.handleApplicationModuleKeyDown}
                >
                  ${this.currentModuleToggled.label || this.modules[0].label}
              </gds-module-switcher>
              ${
                this.isApplicationModuleToggled
                  ? html` <gds-menu-single
                      type=${this.type}
                      class="application-module"
                      mode=${ifDefined(this.mode ? this.mode : undefined)}
                      @onSelect=${this.handleApplicationModuleSelect}
                      @onKeydown=${this.handleApplicationModuleKeyDown}
                      defaultSelectedItem=${this.currentModuleToggled.id}
                      size="regular"
                      .items=${this.modules}
                    >
                    </gds-menu-single>`
                  : ""
              }
            </div>
          </div>`
              : html`<h2 class="application-title">${this.title}</h2>`}
          </div>

          <div class="application-logo">
            <gds-logo
              size="compact"
              logo="${this.logo}"
              mode=${this.mode}
            ></gds-logo>
          </div>

          <div class="d-flex gap-column-300 gds-align-items-center">
            ${this["actions"]?.search.enabled
              ? html`
                  <div class="action-icon">
                    <gds-action-icon
                      size="jumbo"
                      icon="search"
                      mode=${this.mode}
                      @click=${this["actions"]?.search.action}
                    ></gds-action-icon>
                  </div>
                `
              : null}
            ${this["actions"]?.notifications.enabled
              ? html`
                  <div class="action-icon">
                    <gds-action-icon
                      size="jumbo"
                      icon="notifications"
                      slot="notifications"
                      mode=${this.mode}
                      outlined="{true}"
                      @click=${this["actions"]?.notifications.action}
                    ></gds-action-icon>
                  </div>
                `
              : null}
            ${this["actions"]?.support.enabled
              ? html`
                  <div class="action-icon">
                    <gds-action-icon
                      size="jumbo"
                      icon="support"
                      slot="support"
                      mode=${this.mode}
                      outlined="true"
                      @click=${this["actions"]?.support.action}
                    ></gds-action-icon>
                  </div>
                `
              : null}
            ${this["actions"]?.switcher.enabled
              ? html`
                  <div class="action-icon">
                    <gds-action-icon
                      size="jumbo"
                      icon="app-switcher"
                      slot="app-switcher"
                      mode=${this.mode}
                      @click=${this["actions"]?.switcher.action}
                    ></gds-action-icon>
                  </div>
                `
              : null}
            ${this["actions"]?.user.enabled
              ? html`
                  <div class="user-actions-container">
                    <div class="action-icon action-icon--mobile">
                      <gds-action-icon
                        size="jumbo"
                        icon="user-circle"
                        slot="user-settings--mobile"
                        mode=${this.mode}
                        @click=${this.handleUserSettingsClick}
                      ></gds-action-icon>
                    </div>
                    <div class="action-icon action-icon--desktop">
                      <gds-button
                        slot="user-settings--mobile"
                        icon="arrow-down"
                        icon-position="right"
                        size="compact"
                        color="tertiary"
                        mode=${this.mode}
                        @click=${this.handleUserSettingsClick}
                        >${this.user.name}</gds-button
                      >
                    </div>
                    <div class="user-menu">
                      ${this.isUserSettingsToggled
                        ? html`<gds-menu-single
                            type=${this.type}
                            slot="user-menu"
                            mode=${ifDefined(this.mode ? this.mode : undefined)}
                            @on-select=${this.handleUserMenuSelect}
                            @on-keydown=${this.handleUserMenuKeyDown}
                            size="regular"
                            .items=${[
                              {
                                id: "item-1",
                                label: "User Preferences",
                                value: "/preferences",
                              },
                              {
                                id: "item-2",
                                label: "My Account",
                                value: "/account",
                              },
                              {
                                id: "item-3",
                                label: "Logout",
                                value: "/logout",
                              },
                            ]}
                          >
                          </gds-menu-single>`
                        : null}
                    </div>
                  </div>
                `
              : null}
          </div>
        </div>
      </header>
    `;
  }
}
