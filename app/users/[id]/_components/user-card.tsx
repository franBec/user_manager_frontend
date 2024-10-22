import { User } from "@/api/users/model/user";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Mail, Phone } from "lucide-react";
import UserAddress from "./user-address";
import UserCompany from "./user-company";

const UserCard = ({ user }: { user: User }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback>
            {user.name?.charAt(0) ?? user.username?.charAt(0) ?? "?"}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>{user.name}</CardTitle>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-[20px_1fr] items-center gap-2">
          <Mail className="h-5 w-5" />
          <a href={`mailto:${user.email}`} className="text-sm hover:underline">
            {user.email}
          </a>
        </div>
        {user.phone && (
          <div className="grid grid-cols-[20px_1fr] items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="text-sm">{user.phone}</span>
          </div>
        )}
        {user.website && (
          <div className="grid grid-cols-[20px_1fr] items-center gap-2">
            <Globe className="h-5 w-5" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              {user.website}
            </a>
          </div>
        )}
        {user.address && <UserAddress address={user.address} />}
        {user.company && <UserCompany company={user.company} />}
      </CardContent>
    </Card>
  );
};

export default UserCard;
