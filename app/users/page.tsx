import { getGetUsersResponseMock } from "@/api/users/usersApi.msw";
import { DataTable } from "./_components/data-table";

export default async function Users() {
  const { content } = getGetUsersResponseMock();

  if (!content) {
    return <p>No content</p>;
  }
  return (
    <div className="container mx-auto py-10">
      <DataTable data={content} />
    </div>
  );
}
