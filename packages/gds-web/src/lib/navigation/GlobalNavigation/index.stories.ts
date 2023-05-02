// import { GDSGlobalNavigation } from "@nielsen-media/gds-types";
// import { html, TemplateResult } from "lit";
// import "./GlobalNavigation";

// // TODO Potential configration for the global nav
// // let config = {
// //   style: "n1", // standard, n1, gracenote
// //   moduleSwitcher: false,
// //   modules: [], //
// //   sideNavigation: "off", // 'expanded', 'overlay', 'off'
// //   colorMode: "light", // light, dark
// //   backgroundColor: "white",
// // };

// export default {
//   title: "In Development/Components/Navigation",
//   component: "gds-global-navigation",
//   argTypes: {
//     type: {
//       options: ["standard", "n1"],
//       control: { type: "select" },
//       defaultValue: "standard",
//     },
//     title: {
//       control: {
//         type: "text",
//         placeholder: "Application Name",
//       },
//     },
//     logo: {
//       options: ["nielsen", "gracenote"],
//       control: { type: "select" },
//     },
//     mode: {
//       options: ["light", "dark"],
//       control: { type: "select" },
//     },
//   },
// };

// interface Story<T> {
//   (args: T): TemplateResult;
//   args?: Partial<T>;
//   argTypes?: Record<string, unknown>;
// }

// const Template: Story<GDSGlobalNavigation> = ({
//   type = "standard",
//   title = "Application Name",
//   logo = "nielsen",
//   modules = [],
//   mode = "light",
//   actions: actionIcons,
// }: GDSGlobalNavigation) =>
//   html`
//     <gds-global-navigation
//       type="${type}"
//       title=${title}
//       logo=${logo}
//       .modules=${modules}
//       mode=${mode}
//       .actions=${actionIcons}
//     >
//     </gds-global-navigation>
//   `;

// export const GlobalNavigation = Template.bind({});
// GlobalNavigation.args = {
//   type: "standard",
//   title: "Application Name",
//   logo: "nielsen",
//   modules: [
//     {
//       id: "application-module-1",
//       label: "Nielsen Module One",
//       value: "/appliction-module-1",
//     },
//     {
//       id: "application-module-2",
//       label: "Nielsen One Planning",
//       value: "/appliction-module-2",
//     },
//     {
//       id: "application-module-3",
//       label: "Application Module Name 3",
//       value: "/appliction-module-3",
//     },
//     {
//       id: "application-module-4",
//       label: "Application Module Name 4",
//       value: "/appliction-module-4",
//     },
//   ],
//   mode: "light",
//   actions: {
//     hamburger: {
//       enabled: true,
//       action: (e: CustomEvent) => null,
//     },
//     search: {
//       enabled: true,
//       action: (e: CustomEvent) => null,
//     },
//     notifications: {
//       enabled: true,
//     },
//     support: {
//       enabled: true,
//     },
//     switcher: {
//       enabled: true,
//     },
//     user: {
//       enabled: true,
//     },
//   },
// };
