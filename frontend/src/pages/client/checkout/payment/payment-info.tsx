import { useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const paymentOptions = [
  { id: "credit_card", label: "Credit Card" },
  { id: "paypal", label: "PayPal" },
  { id: "stripe", label: "Stripe" },
];

export default function PaymentInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
      <RadioGroup defaultValue="credit_card">
        {paymentOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option.id}
              id={option.id}
              {...register("paymentMethod", { required: true })}
            />
            <Label htmlFor={option.id}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      {/* Add specific payment form fields based on selected payment method */}
    </div>
  );
}
