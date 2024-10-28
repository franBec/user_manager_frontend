import { Phone } from "lucide-react";

const UserPhone = ({ phone }: { phone: string }) => {
  return (
    <div className="grid grid-cols-[20px_1fr] items-center gap-2">
      <Phone className="h-5 w-5" />
      <span className="text-sm">{phone}</span>
    </div>
  );
};

export default UserPhone;
