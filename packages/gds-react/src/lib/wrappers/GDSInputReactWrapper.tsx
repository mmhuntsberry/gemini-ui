import { GDSInput } from "@nielsen-media/gds-types";
import { useEffect, useRef } from "react";
import "@nielsen-media/gds-web";

interface WindowEventMap {
  onInput: CustomEvent;
  onChange: CustomEvent;
}

export const GDSInputReactWrapper = (props: GDSInput) => {
  // Because of the way React and Web Components work together, we
  // need to extend our components props and add an event listener to it.
  // This is only for React.
  const ref = useRef<
    GDSInput & {
      addEventListener<K extends keyof WindowEventMap>(
        type: K,
        listener: (this: Window, ev: WindowEventMap[K]) => any,
        useCapture?: boolean
      ): void;
    }
  >(null);
  useEffect(() => {
    if (ref.current) {
      if (!props) return;
      // Data needs to be added programmatically and directly
      // to the DOM element via ref
      ref.current.icon = props.icon;

      if (props["aria-label"]) ref.current["aria-label"] = props["aria-label"];
      // We have to manually attach our listeners directly to DOM ref.
      ref.current.addEventListener("onInput", (e: CustomEvent) => {
        // This prevents event firing twice.
        e.stopImmediatePropagation();
        if (props.onInput) {
          props.onInput(e);
        }
      });

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
    <gds-input
      ref={ref}
      alt={props.alt}
      disabled={props.disabled}
      error={props.error}
      id={props.id}
      mode={props.mode}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type} // can accept email and password also
      value={props.value}
    ></gds-input>
  );
};
