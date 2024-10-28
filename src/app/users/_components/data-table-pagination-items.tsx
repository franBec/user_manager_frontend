import { PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface TablePaginationItemsProps {
  pageNumber: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export function DataTablePaginationItems({
  pageNumber,
  totalPages,
  handlePageChange,
}: Readonly<TablePaginationItemsProps>) {
  const maxVisiblePages = 5;

  let startPage = Math.max(1, pageNumber - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const items = [];
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

  return <>{items}</>;
}
