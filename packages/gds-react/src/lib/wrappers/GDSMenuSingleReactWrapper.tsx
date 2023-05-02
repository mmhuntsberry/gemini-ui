import { GDSMenuSingle } from "@nielsen-media/gds-types";
import { useEffect, useRef } from "react";

interface WindowEventMap {
  onSelect: CustomEvent;
  onKeydown: CustomEvent;
}

export const GDSMenuSingleReactWrapper = (props: GDSMenuSingle) => {
  /**
   * Because of the way that React & Web Component work together (rather don't work together),
   * We have to do a bit of setup to get our Component working corrent in React/TS.
   *
   */

  // 1. We have to setup a ref.
  //  - We feed it our component props.
  //  - While also extending addEventListener and overloading it to use our CustomEvent.
  // Check out this link to read up on what's happening here. https://stackoverflow.com/a/47171216
  const ref = useRef<
    GDSMenuSingle & {
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
      ref.current.defaultSelectedItem = "item-2";

      // We need to pass all expected props/attributes
      ref.current.addEventListener("onSelect", (e: CustomEvent) => {
        e.stopImmediatePropagation();
        if (props.onSelect) {
          props.onSelect(e);
        }
      });

      // We have to manually attach our listeners directly to DOM ref.
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
    <gds-menu-single
      ref={ref}
      disabled={props.disabled}
      divider={props.divider}
      mode={props.mode}
      size={props.size}
      type={props.type}
      width={props.width}
    ></gds-menu-single>
  );
};
