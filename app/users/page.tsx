"use client";
import { useSearchParams } from "next/navigation";
import { DataTable } from "./_components/data-table";
import { useGetUsers } from "@/api/users/usersApi";
import {
  buildGetUsersParams,
  getPageNumberForFrontendPagination,
} from "./_utils/searchParamsUtils";
import { InputForm } from "./_components/input-form";
import { DataTablePagination } from "./_components/data-table-pagination";
import ErrorAlert from "@/components/v0/error-alert";
import Loading from "@/components/v0/loading";

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
    return <Loading />;
  }

  if (isError) {
    const errorMessage = error?.response?.data
      ? JSON.stringify(error.response.data, null, 2)
      : JSON.stringify(error, null, 2);

    return <ErrorAlert errorDetails={errorMessage} />;
  }

  return (
    <div className="container mx-auto flex flex-col space-y-4">
      <div>
        <InputForm defaultValues={getUsersParams} />
      </div>
      <div>
        <DataTable data={response.data} />
      </div>
      {response.data.pageable?.pageSize !== undefined &&
        response.data.total !== undefined && (
          <div>
            <DataTablePagination
              pageNumber={getPageNumberForFrontendPagination(
                searchParams,
                "pageNumber"
              )}
              pageSize={response.data.pageable?.pageSize}
              total={response.data.total}
            />
          </div>
        )}
    </div>
  );
}
