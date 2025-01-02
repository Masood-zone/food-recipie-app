import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useShopStore } from "@/store/use-shop-store";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateCartItemQuantity } =
    useShopStore();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-14 py-8"
    >
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-16 rounded-lg">
          <ShoppingCart className="mx-auto h-16 w-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="mb-4">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild>
            <Link to="/">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="flex items-center mt-2">
                    <Button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity - 1)
                      }
                      variant="outline"
                      size="icon"
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity + 1)
                      }
                      variant="outline"
                      size="icon"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="font-bold mr-4">
                  Ghc{(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold">Total Items: {totalItems}</p>
            <p className="text-2xl font-bold mt-2">
              Total Price: Ghc{totalPrice.toFixed(2)}
            </p>
            <div className="mt-4 space-x-4">
              <Button
                onClick={() => alert("Checkout functionality not implemented")}
              >
                Checkout
              </Button>
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
