"use client";

import React, { useState, ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-grow overflow-auto bg-background p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
