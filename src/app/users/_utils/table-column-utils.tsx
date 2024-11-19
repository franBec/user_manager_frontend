import { User } from "@/__generated__/api/users/model";
import HoverLink from "@/components/v0/hover-link";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<User>();
export const columns = [
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
  columnHelper.display({
    id: "actions",
    header: () => "Actions",
    cell: (cellContext) => {
      const userId = cellContext.row.original.id;
      return <HoverLink href={`/users/${userId}`} />;
    },
  }),
];
