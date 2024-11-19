"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/sidebar-context";

export const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/users", label: "Users" },
    { href: "/about", label: "About" },
  ];

  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`bg-secondary text-secondary-foreground w-64 flex-shrink-0 transition-all duration-300 ease-in-out border-r border-border ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static fixed inset-y-0 left-0 z-50 flex flex-col`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <Link href={"/"} className="text-xl font-bold">
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
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 px-4 rounded hover:bg-primary/10 ${
                pathname.startsWith(item.href) ? "bg-primary/10" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};
