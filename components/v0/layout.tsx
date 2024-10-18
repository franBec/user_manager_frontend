"use client";

import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MenuIcon, XIcon } from "lucide-react";
import { ModeToggle } from "../dark-mode/mode-toogle";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={`bg-secondary text-secondary-foreground w-64 flex-shrink-0 transition-all duration-300 ease-in-out border-r border-border ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static fixed inset-y-0 left-0 z-50 flex flex-col`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <Link href={"/"} className="text-2xl font-bold">
            {"<PollitoDev/> 🐤"}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <XIcon className="h-6 w-6" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <nav className="p-4 space-y-2">
            <Link
              href="/users"
              className="block py-2 px-4 rounded hover:bg-primary/10"
            >
              Users
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 rounded hover:bg-primary/10"
            >
              About
            </Link>
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-secondary text-secondary-foreground shadow-sm z-10 border-b border-border h-16 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>
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

        {/* Page content */}
        <main className="flex-grow overflow-auto bg-background p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
