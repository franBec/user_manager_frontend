"use client";
import { DataTable } from "./_components/data-table";
import { InputForm } from "./_components/input-form";
import { DataTablePagination } from "./_components/data-table-pagination";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import Loading from "@/components/v0/loading";
import { useGetUsers } from "@/__generated__/api/users/usersApi";
import {parseAsInteger, parseAsStringLiteral, useQueryState} from "nuqs";
import {SortDirection, UserSortProperty} from "@/__generated__/api/users/model";

export default function Users() {
  const [q] = useQueryState('q')
  const [pageNumber] = useQueryState('pageNumber', parseAsInteger.withDefault(1))
  const [sortProperty] = useQueryState('sortProperty', parseAsStringLiteral(Object.values(UserSortProperty)).withDefault("id"))
  const [sortDirection] = useQueryState('sortDirection', parseAsStringLiteral(Object.values(SortDirection)).withDefault("ASC"))
  const pageSize = process.env.NEXT_PUBLIC_API_USERS_PAGE_SIZE;

  const getUsersParams = {
    pageNumber: pageNumber-1,
    pageSize: pageSize ? parseInt(pageSize) : undefined,
    sortProperty,
    sortDirection,
    q: q ?? undefined
  };

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
      {!!response.data.content?.length &&
        response.data.pageable?.pageSize !== undefined &&
        response.data.totalElements !== undefined && (
          <div>
            <DataTablePagination
              pageNumber={pageNumber}
              pageSize={response.data.pageable?.pageSize}
              total={response.data.totalElements}
            />
          </div>
        )}
    </div>
  );
}
