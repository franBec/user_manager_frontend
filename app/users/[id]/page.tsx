"use client";
import { useParams } from "next/navigation";
import { getId } from "./_utils/paramsUtils";
import { useGetUser } from "@/api/users/usersApi";
import Loading from "@/components/v0/loading";
import ErrorAlert from "@/components/v0/error-alert";

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
    const errorMessage = error?.response?.data
      ? JSON.stringify(error.response.data, null, 2)
      : JSON.stringify(error, null, 2);

    return <ErrorAlert errorDetails={errorMessage} />;
  }

  return <p>{JSON.stringify(response, null, 2)}</p>;
};

export default UserDetails;
