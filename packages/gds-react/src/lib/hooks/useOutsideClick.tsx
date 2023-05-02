import * as React from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLButtonElement)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};
