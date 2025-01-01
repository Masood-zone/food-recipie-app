import AdminHeader from "../../components/header/header";
import { TableError } from "../../components/loader/errors";
import { TableSkeleton } from "../../components/loader/table-loader";
import { useFetchAllCustomersQuery } from "../../services/queries/customers/queries";
import { useAdminDeleteResource } from "../../services/services";
import CustomersTable from "./list/table";

export default function Customers() {
  const {
    data: customers,
    isPending,
    error,
    isError,
  } = useFetchAllCustomersQuery();
  const { mutateAsync: deleteCustomer } = useAdminDeleteResource(
    "client",
    "customers"
  );
  const handleDelete = async (id: number) => {
    try {
      await deleteCustomer(id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="">
      {/* Header */}
      <AdminHeader
        title="Customers"
        description="Manage customers in your platform"
        buttons={[{ title: "Create Customer", link: "/admin/customers/add" }]}
      />
      {/* Data table */}
      {isPending ? (
        <TableSkeleton />
      ) : isError ? (
        <TableError error={error as unknown as Errors} />
      ) : (
        <CustomersTable data={customers} handleDelete={handleDelete} />
      )}
    </section>
  );
}
