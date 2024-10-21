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
import { getPageNumberForFrontendPagination } from "../_utils/searchParamsUtils";

interface TablePaginationProps {
  pageSize: number;
  total: number;
}

export function TablePagination({
  pageSize,
  total,
}: Readonly<TablePaginationProps>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageNumber", String(newPageNumber));
    router.push(`?${params.toString()}`);
  };

  const pageNumber = getPageNumberForFrontendPagination(
    searchParams.get("pageNumber")
  );
  const totalPages = Math.ceil(total / pageSize);

  const renderPageNumbers = () => {
    const items = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, pageNumber - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === pageNumber}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };
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
        {renderPageNumbers()}
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
