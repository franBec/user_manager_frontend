"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "../dark-mode/mode-toogle";

export const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-secondary text-secondary-foreground shadow-sm z-10 border-b border-border h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        {/* <h1 className="text-2xl font-semibold">Dashboard</h1> */}
        <div></div>
        <div className="flex gap-2">
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
