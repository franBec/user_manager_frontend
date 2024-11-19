import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import ClientProvider from "@/components/react-query/client-provider";
import { Toaster } from "@/components/ui/toaster";
import React, { Suspense } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Loading from "@/components/v0/loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pollito's user_manager_frontend",
  description:
    "A demonstration on how to consume a RESTful API following Design by Contract principles.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NuqsAdapter>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Layout>
                <Suspense fallback={<Loading />}>
                  {modal}
                  {children}
                </Suspense>
              </Layout>
              <Toaster />
            </ThemeProvider>
          </NuqsAdapter>
        </body>
      </html>
    </ClientProvider>
  );
}
