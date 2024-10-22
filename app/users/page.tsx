"use client";
import { useSearchParams } from "next/navigation";
import { DataTable } from "./_components/data-table";
import { useGetUsers } from "@/api/users/usersApi";
import {
  buildGetUsersParams,
  getPageNumberForFrontendPagination,
} from "./_utils/searchParamsUtils";
import { InputForm } from "./_components/input-form";
import { TablePagination } from "./_components/table-pagination";

export default function Users() {
  const searchParams = useSearchParams();

  const getUsersParams = buildGetUsersParams(searchParams);
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useGetUsers(getUsersParams, {
    axios: { baseURL: process.env.NEXT_PUBLIC_API_USERS_BASE_URL },
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto">
      <InputForm defaultValues={getUsersParams} />
      <div className="py-4">
        <DataTable data={response.data} />
      </div>
      {response.data.pageable?.pageSize !== undefined &&
      response.data.total !== undefined ? (
        <TablePagination
          pageNumber={getPageNumberForFrontendPagination(
            searchParams.get("pageNumber")
          )}
          pageSize={response.data.pageable?.pageSize}
          total={response.data.total}
        />
      ) : (
        <p>{"Pagination not available"}</p>
      )}
    </div>
  );
}
