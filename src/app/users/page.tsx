"use client";
import { useSearchParams } from "next/navigation";
import { DataTable } from "./_components/data-table";
import {
  buildGetUsersParams,
  getPageNumberForFrontendPagination,
} from "./_utils/search-params-utils";
import { InputForm } from "./_components/input-form";
import { DataTablePagination } from "./_components/data-table-pagination";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import Loading from "@/components/v0/loading";
import { useGetUsers } from "@/api/users/usersApi";

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
    return <AxiosErrorAlert axiosError={error} />;
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
        response.data.totalElements !== undefined && (
          <div>
            <DataTablePagination
              pageNumber={getPageNumberForFrontendPagination(
                searchParams,
                "pageNumber"
              )}
              pageSize={response.data.pageable?.pageSize}
              total={response.data.totalElements}
            />
          </div>
        )}
    </div>
  );
}
