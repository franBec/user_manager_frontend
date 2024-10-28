import { Mail } from "lucide-react";

const UserEmail = ({ email }: { email: string }) => {
  return (
    <div className="grid grid-cols-[20px_1fr] items-center gap-2">
      <Mail className="h-5 w-5" />
      <a href={`mailto:${email}`} className="text-sm hover:underline">
        {email}
      </a>
    </div>
  );
};

export default UserEmail;
