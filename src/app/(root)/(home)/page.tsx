"use client";

import { UserButton } from "@clerk/nextjs";
import { useTheme } from "../../../../context/ThemeProvider";

export default function Home() {
  const { mode } = useTheme();

  console.log(mode);

  return (
    <div>
      {/* <UserButton afterSwitchSessionUrl="/" /> */}
      <button>click</button>
    </div>
  );
}
