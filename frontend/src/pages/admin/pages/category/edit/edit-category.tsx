import AdminHeader from "@/pages/admin/components/header/header";
import { useFetchCategoryByIdQuery } from "@/pages/admin/services/queries/category/queries";
import { useParams } from "react-router-dom";
import EditCategoryForm from "./edit-category-form";

export default function EditCategory() {
  const id = useParams<{ categoryId: string }>();
  const { data: category } = useFetchCategoryByIdQuery(id.categoryId ?? "");
  if (!category)
    return (
      <div>
        <h1>Category with id {id.categoryId} not found</h1>
      </div>
    );

  return (
    <section className="space-y-5">
      {/* Header */}
      <AdminHeader
        title="Edit Category"
        description="Edit category details"
        buttons={[{ title: "Back", link: "/admin/category" }]}
      />
      {/* Form */}
      <div>
        <EditCategoryForm category={category} />
      </div>
    </section>
  );
}
