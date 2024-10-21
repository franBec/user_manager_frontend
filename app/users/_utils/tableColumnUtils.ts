import { User } from "@/api/users/model/user";
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
];