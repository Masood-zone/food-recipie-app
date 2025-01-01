import AdminHeader from "@/pages/admin/components/header/header";
import React from "react";
import AddProductForm from "./add-product-form";

export default function AddProduct() {
  return (
    <section className="w-full max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <AdminHeader
        title="Add Product"
        description="Add a new product to your platform"
        buttons={[{ title: "Back", link: "/admin/products", type: "button" }]}
      />
      {/* Form */}
      <div>
        <AddProductForm />
      </div>
    </section>
  );
}
