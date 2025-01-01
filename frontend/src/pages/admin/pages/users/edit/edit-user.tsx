import AdminHeader from "@/pages/admin/components/header/header";
import { useFetchAdminByIdQuery } from "@/pages/admin/services/queries/users/queries";
import { useParams } from "react-router-dom";
import EditUserForm from "./edit-user-form";

export default function EditUser() {
  const id = useParams<{ userId: string }>();
  const { data: user } = useFetchAdminByIdQuery(id.userId ?? "");

  if (!user)
    return (
      <div>
        <h1>User with id {id.userId} not found</h1>
      </div>
    );

  return (
    <section className="w-full max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <AdminHeader
        title="Edit User"
        description="Edit user details"
        buttons={[{ title: "Back", link: "/admin/users" }]}
      />

      {/* Form */}
      <div>
        <EditUserForm user={user} />
      </div>
    </section>
  );
}
