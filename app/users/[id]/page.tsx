"use client";
import { useParams } from "next/navigation";
import { getId } from "./_utils/params-utils";
import { useGetUser } from "@/api/users/usersApi";
import Loading from "@/components/v0/loading";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";

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

  return <p>{JSON.stringify(response, null, 2)}</p>;
};

export default UserDetails;
