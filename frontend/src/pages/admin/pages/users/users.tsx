import AdminHeader from "../../components/header/header";
import { useAdminDeleteResource } from "../../services/services";
import { useFetchAllAdminsQuery } from "../../services/queries/users/queries";
import { TableSkeleton } from "../../components/loader/table-loader";
import { TableError } from "../../components/loader/errors";
import UsersTable from "./list/table";

export default function Users() {
  const { data: users, isPending, error, isError } = useFetchAllAdminsQuery();
  const { mutateAsync: deleteUser } = useAdminDeleteResource(
    "client",
    "client"
  );

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="">
      {/* Header */}
      <AdminHeader
        title="Users"
        description="Manage users in your platform"
        buttons={[{ title: "Create User", link: "/admin/users/add" }]}
      />
      {/* Data table */}
      {isPending ? (
        <TableSkeleton />
      ) : isError ? (
        <TableError error={error as unknown as Errors} />
      ) : (
        <UsersTable data={users} handleDelete={handleDelete} />
      )}
    </section>
  );
}
