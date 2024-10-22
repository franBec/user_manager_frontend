import { Company } from "@/api/users/model";
import { Briefcase } from "lucide-react";

const UserCompany = ({ company }: { company: Company }) => {
  return (
    <div className="grid grid-cols-[20px_1fr] items-start gap-2">
      <Briefcase className="h-5 w-5 mt-0.5" />
      <div className="text-sm">
        <p className="font-medium">{company.name}</p>
        <p className="text-muted-foreground">{company.catchPhrase}</p>
        <p className="text-xs text-muted-foreground">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCompany;
