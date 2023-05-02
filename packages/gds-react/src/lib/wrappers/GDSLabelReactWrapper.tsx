import { GDSLabel } from "@nielsen-media/gds-types";

export const GDSLabelReactWrapper = (
  props: GDSLabel & {
    children?: React.ReactNode;
  }
) => {
  return (
    <gds-label
      disabled={props.disabled}
      error={props.error}
      helpText={props.helpText}
      id={props.id}
      label={props.label}
      mode={props.mode}
      name={props.name}
      required={props.required}
      size={props.size}
      value={props.value}
    >
      {props.children}
    </gds-label>
  );
};
