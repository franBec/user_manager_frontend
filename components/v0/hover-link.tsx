import Link from "next/link";

export default function HoverLink({ href = "#" }: Readonly<{ href?: string }>) {
  return (
    <Link
      href={href}
      className="text-primary no-underline hover:underline transition-all duration-200"
    >
      {"More info..."}
    </Link>
  );
}
