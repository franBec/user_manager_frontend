import { Address } from "@/api/users/model";
import { MapPin } from "lucide-react";

const UserAddress = ({ address }: { address: Address }) => {
  return (
    <div className="grid grid-cols-[20px_1fr] items-start gap-2">
      <MapPin className="h-5 w-5 mt-0.5" />
      <div className="text-sm">
        <p>
          {address.street}, {address.suite}
        </p>
        <p>
          {address.city}, {address.zipcode}
        </p>
        {address.geo && (
          <p className="text-xs text-muted-foreground">
            Lat: {address.geo.lat}, Lng: {address.geo.lng}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserAddress;
