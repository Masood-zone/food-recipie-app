import { useFormContext } from "react-hook-form";

export default function OrderConfirmation() {
  const { getValues } = useFormContext();
  const formData = getValues();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Order Confirmation</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Delivery Information</h3>
        <p>
          {formData.firstname} {formData.lastname}
        </p>
        <p>{formData.email}</p>
        <p>{formData.street_name}</p>
        <p>
          {formData.city}, {formData.state} {formData.zipcode}
        </p>
        <p>{formData.country}</p>
        <p>{formData.phonenumber}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
        <p>{formData.paymentMethod}</p>
      </div>
    </div>
  );
}
