import { GDSCheckbox } from "@nielsen-media/gds-types";
import { useEffect, useRef } from "react";

interface WindowEventMap {
  onClick: CustomEvent;
}

export const GDSCheckboxReactWrapper = (props: GDSCheckbox) => {
  // Because of the way React and Web Components work together, we
  // need to extend our components props and add an event listener to it.
  // This is only for React.
  const ref = useRef<
    GDSCheckbox & {
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
      if (props.items) {
        // Data needs to be added programmatically and directly
        // to the DOM element via ref
        ref.current.items = props.items;
      }
      // We have to manually attach our listeners directly to DOM ref.
      ref.current.addEventListener("onClick", (e: CustomEvent) => {
        // This prevents event firing twice.
        e.stopImmediatePropagation();
        if (props.onClick) {
          props.onClick(e);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (!props) return;

    if (ref.current) {
      ref.current.checked = false;
    }
  }, []);

  // We need to pass all expected props/attributes
  return (
    <gds-checkbox
      ref={ref}
      checked={props.checked}
      disabled={props.disabled}
      error={props.error}
      helpText={props.helpText}
      id={props.id}
      items={props.items}
      indeterminate={props.indeterminate}
      label={props.label}
      mode={props.mode}
      size={props.size}
      value={props.value}
    ></gds-checkbox>
  );
};
