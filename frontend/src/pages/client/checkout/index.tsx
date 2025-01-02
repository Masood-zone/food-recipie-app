import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCreateOrder } from "@/services/checkout/queries";
import { OrderSummary } from "./order-summary";

const steps = ["delivery-info", "payment-info", "confirmation"];

export default function CheckoutLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const methods = useForm();
  const { mutateAsync: createOrder } = useCreateOrder();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate(`/checkout/${steps[currentStep + 1]}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      navigate(`/checkout/${steps[currentStep - 1]}`);
    }
  };

  const onSubmit = (data) => {
    if (currentStep === steps.length - 1) {
      createOrder(data);
    } else {
      handleNext();
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-2/3"
          >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Outlet />
              <div className="mt-8 flex justify-between">
                {currentStep > 0 && (
                  <Button type="button" onClick={handleBack}>
                    Back
                  </Button>
                )}
                <Button type="submit">
                  {currentStep === steps.length - 1 ? "Place Order" : "Next"}
                </Button>
              </div>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3"
          >
            <OrderSummary />
          </motion.div>
        </div>
      </div>
    </FormProvider>
  );
}
