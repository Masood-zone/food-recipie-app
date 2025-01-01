import AdminHeader from "@/pages/admin/components/header/header";
import AddCustomerForm from "./add-customer-form";

export default function AddCustomer() {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <AdminHeader
        title="Add Customer"
        description="Add a new customer to your platform"
        buttons={[{ title: "Back", link: "/admin/customers", type: "button" }]}
      />
      {/* Form */}
      <div>
        <AddCustomerForm />
      </div>
    </section>
  );
}
