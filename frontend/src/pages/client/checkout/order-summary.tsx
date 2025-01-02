import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/store/use-auth.store";
import { useShopStore } from "@/store/use-shop-store";

export function OrderSummary() {
  const cart = useShopStore((state) => state.cart);
  const user = useAuthStore();

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 5; // Example delivery fee
  const total = subTotal + deliveryFee;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>Ghc{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Ghc{subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>Ghc{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>Ghc{total.toFixed(2)}</span>
            </div>
          </div>
          {user && (
            <div className="mt-4">
              <p className="font-semibold">Order for:</p>
              <p>{user?.user?.username}</p>
              <p>{user?.user?.email}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
