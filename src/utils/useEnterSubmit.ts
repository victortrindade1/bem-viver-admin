import { useEffect } from "react";

function useEnterSubmit(onSubmit: any) {
  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      // Coloquei isso pra tentar usar um listener pra cada input separado
      if (event.currentTarget !== event.target) {
        return;
      }

      if (event.key === "Enter") {
        onSubmit(event);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onSubmit]);
}

export default useEnterSubmit;
