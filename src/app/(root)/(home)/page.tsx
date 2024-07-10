import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
      <h1 className="h1-bold">Hello</h1>
    </div>
  );
}
