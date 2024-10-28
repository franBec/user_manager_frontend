"use client";
import { useParams } from "next/navigation";
import { useGetUser } from "@/api/users/usersApi";
import Loading from "@/components/v0/loading";
import AxiosErrorAlert from "@/components/v0/axios-error-alert";
import { getId } from "@/app/users/[id]/_utils/params-utils";
import UserCard from "@/app/users/[id]/_components/user-card";
import Modal from "@/components/gitdagray/modal";

const UserDetails = () => {
  const id = getId(useParams<{ id: string }>());
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useGetUser(id, {
    axios: { baseURL: process.env.NEXT_PUBLIC_API_USERS_BASE_URL },
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <AxiosErrorAlert axiosError={error} />;
  }

  return (
    <Modal>
      <UserCard user={response.data} />
    </Modal>
  );
};

export default UserDetails;
