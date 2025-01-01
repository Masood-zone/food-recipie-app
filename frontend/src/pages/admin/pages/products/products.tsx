import AdminHeader from "../../components/header/header";
import { TableError } from "../../components/loader/errors";
import { TableSkeleton } from "../../components/loader/table-loader";
import { useFetchAllProductsQuery } from "../../services/queries/products/queries";
import { useAdminDeleteResource } from "../../services/services";
import ProductTable from "./list/table";

export default function Products() {
  const {
    data: products,
    isPending,
    error,
    isError,
  } = useFetchAllProductsQuery();
  const { mutateAsync: deleteProduct } = useAdminDeleteResource(
    "recipe",
    "products"
  );

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      {/* Header */}
      <AdminHeader
        title="Products"
        description="Manage products in your platform"
        buttons={[{ title: "Create Product", link: "/admin/products/add" }]}
      />
      {/* Data Table */}
      {isPending ? (
        <TableSkeleton />
      ) : isError ? (
        <TableError error={error as unknown as Errors} />
      ) : (
        <ProductTable data={products} handleDelete={handleDelete} />
      )}
    </section>
  );
}
