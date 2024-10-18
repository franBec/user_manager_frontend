"use client";

import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MenuIcon, XIcon } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 flex-shrink-0 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static fixed inset-y-0 left-0 z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Sidebar</h2>
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
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              Home
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              About
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              Contact
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              Services
            </a>
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
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
        </header>

        {/* Page content */}
        <main className="flex-grow overflow-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
