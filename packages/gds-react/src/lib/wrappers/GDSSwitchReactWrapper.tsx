import { GDSSwitch } from "@nielsen-media/gds-types";
import React, { useEffect, useRef } from "react";

interface WindowEventMap {
  onChange: CustomEvent;
}

export const GDSSwitchReactWrapper = (props: GDSSwitch) => {
  // 1. We have to setup a ref.
  //  - We feed it our component props.
  //  - While also extending addEventListener and overloading it to use our CustomEvent.
  // Check out this link to read up on what's happening here. https://stackoverflow.com/a/47171216
  const ref = useRef<
    GDSSwitch & {
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
      ref.current.addEventListener("onChange", (e: CustomEvent) => {
        // This prevents event firing twice.

        e.stopImmediatePropagation();
        if (props.onChange) {
          props.onChange(e);
        }
      });
    }
  }, []);

  // We need to pass all expected props/attributes
  return (
    <gds-switch
      ref={ref}
      checked={props.checked}
      disabled={props.disabled}
      helpText={props.helpText}
      id={props.id}
      label={props.label}
      mode={props.mode}
      size={props.size}
    ></gds-switch>
  );
};
