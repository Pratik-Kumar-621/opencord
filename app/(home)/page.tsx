import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <UserButton />
      <ModeToggle />
    </div>
  );
};

export default HomePage;
