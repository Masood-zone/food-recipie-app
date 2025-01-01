import AdminHeader from "@/pages/admin/components/header/header";
import { useFetchCustomerByIdQuery } from "@/pages/admin/services/queries/customers/queries";
import { useParams } from "react-router-dom";
import EditCustomerForm from "./edit-customer-form";

export default function EditCustomer() {
  const id = useParams<{ customerId: string }>();
  const { data: customer } = useFetchCustomerByIdQuery(id.customerId ?? "");
  if (!customer)
    return (
      <div>
        <h1>User with id {id.customerId} not found</h1>
      </div>
    );

  return (
    <section className="">
      {/* Header */}
      <AdminHeader
        title="Edit Customer"
        description="Edit customer details"
        buttons={[{ title: "Back", link: "/admin/customers" }]}
      />
      {/* Form */}
      <div>
        <EditCustomerForm customer={customer} />
      </div>
    </section>
  );
}
