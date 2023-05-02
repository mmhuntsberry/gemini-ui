// import { GDSToastProps } from "@nielsen-media/gds-types";
// import { html, TemplateResult } from "lit";

// import "./Toast";

// export default {
//   title: "Components/Feedback/Toast",
//   component: "gds-toast",
//   // https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     type: {
//       options: ["success", "neutral"],
//       control: { type: "select" },
//       defaultValue: "neutral",
//     },
//     timeout: {
//       description:
//         "Number of seconds before toast disappears automatically. Set to -1 for toast to be closed manually.",
//     },
//   },
// };

// interface Story<T> {
//   (args: T): TemplateResult;
//   args?: Partial<T>;
//   argTypes?: Record<string, unknown>;
// }

// const Template: Story<GDSToastProps> = ({
//   type,
//   message,
//   mode,
//   show,
//   timeout,
// }) => {
//   return html`<gds-toast
//     type=${type}
//     message=${message}
//     mode=${mode}
//     ?show=${show}
//     timeout=${timeout}
//   ></gds-toast>`;
// };

// export const Toast = Template.bind({});
// Toast.args = {
//   type: "success",
//   message: "Success!",
//   show: true,
//   timeout: -1,
// };
