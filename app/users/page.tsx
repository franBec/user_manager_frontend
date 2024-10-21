"use client";
import { useSearchParams } from "next/navigation";
import { DataTable } from "./_components/data-table";
import { useGetUsers } from "@/api/users/usersApi";
import { buildParams } from "./_utils/searchParamsUtils";

export default function Users() {
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useGetUsers(buildParams(useSearchParams()), {
    axios: { baseURL: process.env.NEXT_PUBLIC_API_USERS_BASE_URL },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!response.data.content) {
    return <p>No content</p>;
  }
  return (
    <div className="container mx-auto py-10">
      <DataTable data={response.data} />
    </div>
  );
}
