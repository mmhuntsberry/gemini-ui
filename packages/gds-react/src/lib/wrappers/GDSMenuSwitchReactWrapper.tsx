import { GDSMenuSwitch } from "@nielsen-media/gds-types";
import { useEffect, useRef } from "react";

interface WindowEventMap {
  onSelect: CustomEvent;
  onKeydown: CustomEvent;
}

export const GDSMenuSwitchReactWrapper = (props: GDSMenuSwitch) => {
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
    GDSMenuSwitch & {
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
    }
  }, []);

  // We need to pass all expected props/attributes
  return (
    <gds-menu-switch
      ref={ref}
      id={props.id}
      mode={props.mode}
      size={props.size}
      width={props.width}
    ></gds-menu-switch>
  );
};
