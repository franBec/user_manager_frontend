"use client";

import { getGetUsersResponseMock } from "@/api/users/usersApi.msw";

const Table = () => {
  const { content } = getGetUsersResponseMock();
  if (!content) {
    return <p>No content</p>;
  }
  return <p>{JSON.stringify(content, null, 2)}</p>;
};

export default Table;
