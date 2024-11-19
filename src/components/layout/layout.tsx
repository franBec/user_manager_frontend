"use client";

import React, { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { SidebarProvider } from "@/context/sidebar-context";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-background text-foreground">
        <Sidebar />
        <div className="flex-grow flex flex-col overflow-hidden">
          <Header />
          <main className="flex-grow overflow-auto bg-background p-6">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
