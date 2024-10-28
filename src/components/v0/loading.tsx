import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Loader2 className="h-5 w-5 animate-spin text-primary" />
      <span className="text-sm font-medium text-primary">Loading</span>
    </div>
  );
}
