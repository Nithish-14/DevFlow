"use client";

import { UserButton } from "@clerk/nextjs";
import { useTheme } from "../../../../context/ThemeProvider";

export default function Home() {
  const { mode, setMode } = useTheme();

  return (
    <div>
      {/* <UserButton afterSwitchSessionUrl="/" /> */}
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {mode}
      </button>
    </div>
  );
}
