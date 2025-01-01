import AdminHeader from "@/pages/admin/components/header/header";
import AddCategoryForm from "./add-category-form";

export default function AddCategory() {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <AdminHeader
        title="Add Category"
        description="Add a new food category to your platform"
        buttons={[{ title: "Back", link: "/admin/category", type: "button" }]}
      />
      {/* Form */}
      <div>
        <AddCategoryForm />
      </div>
    </section>
  );
}
