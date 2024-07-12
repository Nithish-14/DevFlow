"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const handleThemeChange = () => {
    if (mode === "dark") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
