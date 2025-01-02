import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function OrderConfirmed() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-4"
    >
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
      <h2 className="text-3xl font-bold">Order Confirmed!</h2>
      <p className="text-xl">
        Thank you for your order. Your food is being prepared and will be
        delivered soon.
      </p>
      <Button asChild>
        <Link to="/">Return to Home</Link>
      </Button>
    </motion.div>
  );
}
