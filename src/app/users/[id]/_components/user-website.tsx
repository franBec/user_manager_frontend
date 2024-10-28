import { Globe } from "lucide-react";

const UserWebsite = ({ website }: { website: string }) => {
  return (
    <div className="grid grid-cols-[20px_1fr] items-center gap-2">
      <Globe className="h-5 w-5" />
      <a
        href={`https://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:underline"
      >
        {website}
      </a>
    </div>
  );
};

export default UserWebsite;
