"use client";
import { useParams } from "next/navigation";
import { getId } from "./_utils/params-utils";
import Loading from "@/components/v0/loading";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import UserCard from "./_components/user-card";
import RedirectButton from "@/components/v0/redirect-button";
import { useGetUser } from "@/__generated__/api/users/usersApi";

const UserDetails = () => {
  const id = getId(useParams<{ id: string }>());
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useGetUser(id, {
    axios: { baseURL: process.env.NEXT_PUBLIC_API_USERS_BASE_URL },
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <UserCard user={response.data} />
        <div className="w-full flex justify-end">
          <RedirectButton href="/users" label="See Users" />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
