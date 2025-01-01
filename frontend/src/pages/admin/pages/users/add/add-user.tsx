import AdminHeader from "@/pages/admin/components/header/header";
import AddUserForm from "./add-user-form";

export default function AddUser() {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <AdminHeader
        title="Add User"
        description="Add a new user to your platform"
        buttons={[{ title: "Back", link: "/admin/users", type: "button" }]}
      />
      {/* Form */}
      <div>
        <AddUserForm />
      </div>
    </section>
  );
}
