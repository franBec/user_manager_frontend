"use client";
import { useSearchParams } from "next/navigation";
import { DataTable } from "./_components/data-table";
import { useGetUsers } from "@/api/users/usersApi";
import { buildGetUsersParams } from "./_utils/searchParamsUtils";
import { InputForm } from "./_components/input-form";

export default function Users() {
  const getUsersParams = buildGetUsersParams(useSearchParams());
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useGetUsers(getUsersParams, {
    axios: { baseURL: process.env.NEXT_PUBLIC_API_USERS_BASE_URL },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container mx-auto py-10">
      <InputForm defaultValues={getUsersParams} />
      <div className="py-4">
        <DataTable data={response.data} />
      </div>
    </div>
  );
}
