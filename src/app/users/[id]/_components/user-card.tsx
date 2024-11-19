import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserAddress from "./user-address";
import UserCompany from "./user-company";
import UserWebsite from "./user-website";
import UserPhone from "./user-phone";
import UserEmail from "./user-email";
import { User } from "@/__generated__/api/users/model";

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
        {user.email && <UserEmail email={user.email} />}
        {user.phone && <UserPhone phone={user.phone} />}
        {user.website && <UserWebsite website={user.website} />}
        {user.address && <UserAddress address={user.address} />}
        {user.company && <UserCompany company={user.company} />}
      </CardContent>
    </Card>
  );
};

export default UserCard;
