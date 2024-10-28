"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ErrorBoundary({ error }: Readonly<{ error: Error }>) {
  const errorMessage = error.message;

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full p-8 text-center">
        <Image
          src="/images/4079109977_0f8dd65f78_w.png"
          alt="Error Image"
          width={400}
          height={300}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-6">Something went wrong</p>
        <p className="mb-8">{errorMessage}</p>
        <Link href="/">
          <Button variant="outline" className="w-full">
            {"Go back to homepage"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
