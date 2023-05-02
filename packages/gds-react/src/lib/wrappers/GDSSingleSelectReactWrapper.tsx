import { GDSSingleSelect } from "@nielsen-media/gds-types";
import React, { useEffect, useRef } from "react";

interface WindowEventMap {
  onKeydown: CustomEvent;
  onSelect: CustomEvent;
}

export const GDSSingleSelectReactWrapper = (props: GDSSingleSelect) => {
  // 1. We have to setup a ref.
  //  - We feed it our component props.
  //  - While also extending addEventListener and overloading it to use our CustomEvent.
  // Check out this link to read up on what's happening here. https://stackoverflow.com/a/47171216
  const ref = useRef<
    GDSSingleSelect & {
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
      // Data needs to be added programmatically and directly
      // to the DOM element via ref
      ref.current.items = props.items;

      // We have to manually attach our listeners directly to DOM ref.
      ref.current.addEventListener("onSelect", (e: CustomEvent) => {
        // This prevents event firing twice.
        e.stopImmediatePropagation();
        if (props.onSelect) {
          props.onSelect(e);
        }
      });

      ref.current.addEventListener("onKeydown", (e: CustomEvent) => {
        e.stopImmediatePropagation();
        if (props.onKeydown) {
          props.onKeydown(e);
        }
      });
    }
  }, []);

  // We need to pass all expected props/attributes

  return (
    <gds-single-select
      ref={ref}
      alt={props.alt}
      disabled={props.disabled}
      error={props.error}
      id={props.id}
      mode={props.mode}
      size={props.size}
      defaultSelectedItem={props.defaultSelectedItem}
    ></gds-single-select>
  );
};
