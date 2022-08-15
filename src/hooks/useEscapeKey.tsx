import { useCallback, useEffect } from "react";

const useEscapeKey = (
  fireFunction: () => void,
  closeOnEscape: boolean,
  closeable: boolean
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        if (closeable && closeOnEscape) {
          fireFunction();
        }
      }
    },
    [closeOnEscape, closeable, fireFunction]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useEscapeKey;
