"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User } from "@/api/users/model/user";
import { Users } from "@/api/users/model/users";
import { useSearchParams, useRouter } from "next/navigation";
import { getPageNumberForFrontendPagination } from "../_utils/utils";

export function DataTable({ data }: { readonly data: Users }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const columnHelper = createColumnHelper<User>();
  const columns = [
    columnHelper.accessor("id", {
      header: () => "Id",
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
    }),
    columnHelper.accessor("username", {
      header: () => "Username",
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
    }),
  ];

  const tableData = data.content ?? [];

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handlePageChange = (newPageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageNumber", String(newPageNumber));
    router.push(`?${params.toString()}`);
  };

  const pageNumber = getPageNumberForFrontendPagination(
    searchParams.get("pageNumber")
  );

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber <= 1} // Disable previous button if on page 1
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(pageNumber + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
}
