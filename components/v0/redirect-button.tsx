"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideIcon, ArrowLeft } from "lucide-react";

interface RedirectButtonProps {
  href: string;
  label?: string;
  icon?: LucideIcon;
}

export default function RedirectButton({
  href,
  label = "Go Back",
  icon: Icon = ArrowLeft,
}: Readonly<RedirectButtonProps>) {
  return (
    <Button asChild variant="outline" className="flex items-center space-x-2">
      <Link href={href}>
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </Link>
    </Button>
  );
}
