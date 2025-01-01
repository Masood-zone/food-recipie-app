import AdminHeader from "../../components/header/header";
import { TableError } from "../../components/loader/errors";
import { TableSkeleton } from "../../components/loader/table-loader";
import { useFetchAllCategoriesQuery } from "../../services/queries/category/queries";
import { useAdminDeleteResource } from "../../services/services";
import CatgoryTable from "./list/table";

export default function Category() {
  const {
    data: categories,
    isPending,
    error,
    isError,
  } = useFetchAllCategoriesQuery();
  const { mutateAsync: deleteCategory } = useAdminDeleteResource(
    "category",
    "categories"
  );
  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      {/* Header */}
      <AdminHeader
        title="Categories"
        description="Manage food categories in your platform"
        buttons={[{ title: "Create Categories", link: "/admin/category/add" }]}
      />
      {/* Data Table */}
      {isPending ? (
        <TableSkeleton />
      ) : isError ? (
        <TableError error={error as unknown as Errors} />
      ) : (
        <CatgoryTable data={categories} handleDelete={handleDelete} />
      )}
    </section>
  );
}
