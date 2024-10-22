import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams, useRouter } from "next/navigation";
import { TablePaginationItems } from "./table-pagination-items";

interface TablePaginationProps {
  pageNumber: number;
  pageSize: number;
  total: number;
}

export function TablePagination({
  pageNumber,
  pageSize,
  total,
}: Readonly<TablePaginationProps>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (pageNumber < 1 || pageSize < 1 || total < 1) {
    return <p>{"Pagination not available"}</p>;
  }

  const handlePageChange = (newPageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageNumber", String(newPageNumber));
    router.push(`?${params.toString()}`);
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(1, pageNumber - 1))}
            aria-disabled={pageNumber === 1}
          />
        </PaginationItem>
        {pageNumber > 2 && (
          <>
            <PaginationItem>
              <PaginationLink href="#" onClick={() => handlePageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            {pageNumber > 3 && <PaginationEllipsis />}
          </>
        )}
        <TablePaginationItems
          pageNumber={pageNumber}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
        {pageNumber < totalPages - 1 && (
          <>
            {pageNumber < totalPages - 2 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(Math.min(totalPages, pageNumber + 1))
            }
            aria-disabled={pageNumber === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
