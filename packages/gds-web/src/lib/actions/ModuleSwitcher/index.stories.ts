// import { html, TemplateResult } from "lit";
// import { GDSModuleSwitcher } from "@nielsen-media/gds-types";
// import "./ModuleSwitcher";

// export default {
//   title: "Internal/Components/Actions",
//   component: "gds-module-switcher",
//   argTypes: {
//     type: {
//       options: ["standard", "n1"],
//       control: { type: "select" },
//       defaultValue: "standard",
//     },
//     mode: {
//       options: ["light", "dark"],
//       control: { type: "select" },
//       defaultValue: "light",
//     },
//     disabled: {
//       disable: true,
//       defaultValue: false,
//     },
//     onClick: {
//       action: "click",
//     },
//   },
// };

// interface Story<T> {
//   (args: T): TemplateResult;
//   args?: Partial<T>;
//   argTypes?: Record<string, unknown>;
// }

// const Template: Story<GDSModuleSwitcher> = ({
//   type = "standard",
//   disabled = false,
//   onClick = () => null,
//   mode = "light",
// }: GDSModuleSwitcher) =>
//   html`<gds-module-switcher
//     type=${type}
//     ?disabled=${disabled}
//     @click=${onClick}
//     mode=${mode}
//   >
//     Nielsen Module One
//   </gds-module-switcher>`;

// export const ModuleSwitcher = Template.bind({});
// ModuleSwitcher.args = {
//   type: "standard",
//   disabled: false,
//   mode: "light",
// };
