import React, { createContext, useState, useContext } from "react";
import { IChildren } from "types/layout";

interface ScrollTopContextData {
  scrollTop: number;
  updateScrollTop(data: number): void;
}

const ScrollTopContext = createContext<ScrollTopContextData>(
  {} as ScrollTopContextData
);

export const ScrollTopProvider: React.FC<IChildren> = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);

  function updateScrollTop(data: number) {
    setScrollTop(data);
  }

  return (
    <ScrollTopContext.Provider
      value={{
        scrollTop,
        updateScrollTop,
      }}
    >
      {children}
    </ScrollTopContext.Provider>
  );
};

export function useScrollTop() {
  const context = useContext(ScrollTopContext);

  return context;
}
