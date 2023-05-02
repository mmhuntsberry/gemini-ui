import { GDSRadio } from "@nielsen-media/gds-types";
import { useEffect, useRef } from "react";

// Create an event map to extend our component props
// with event listener.
interface WindowEventMap {
  onClick: CustomEvent;
}

export const GDSRadioReactWrapper = (props: GDSRadio) => {
  // 1. We have to setup a ref.
  //  - We feed it our component props.
  //  - While also extending addEventListener and overloading it to use our CustomEvent.
  // Check out this link to read up on what's happening here. https://stackoverflow.com/a/47171216
  const ref = useRef<
    GDSRadio & {
      addEventListener<K extends keyof WindowEventMap>(
        type: K,
        listener: (this: Window, ev: WindowEventMap[K]) => any,
        useCapture?: boolean
      ): void;
    }
  >(null);

  useEffect(() => {
    if (!props) return;

    if (ref.current) {
      // We have to manually attach our listeners directly to DOM ref.
      ref.current.addEventListener("onClick", (e: CustomEvent) => {
        e.stopImmediatePropagation();

        if (props.onClick) {
          props.onClick(e);
        }
      });
    }
  }, []);

  // We need to pass all expected props/attributes
  return (
    <gds-radio
      ref={ref}
      id={props.id}
      checked={props.checked}
      disabled={props.disabled}
      error={props.error}
      helpText={props.helpText}
      label={props.label}
      mode={props.mode}
      name={props.name}
      size={props.size}
      value={props.value}
    ></gds-radio>
  );
};
