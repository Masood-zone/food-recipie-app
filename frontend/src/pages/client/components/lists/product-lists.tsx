import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useShopStore } from "@/store/use-shop-store";

export function ProductList({ products, isLoading }: ProductListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-4 text-center"
      >
        Discover Our Delicious Offerings
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {products?.map((product: Recipe) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </div>
  );
}

function ProductCard({ product }: { product: Recipe }) {
  const { addToCart, cart, updateCartItemQuantity } = useShopStore();
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <motion.div
      className="rounded-lg shadow-md overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-primary font-bold text-xl mb-2">
          Ghc{product.price.toFixed(2)}
        </p>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600 dark:text-primary-foreground mb-4">
          {product.description}
        </p>
        {cartItem ? (
          <div className="flex items-center justify-between">
            <Button
              onClick={() =>
                updateCartItemQuantity(product.id, cartItem.quantity - 1)
              }
              variant="outline"
              size="icon"
            >
              -
            </Button>
            <span className="mx-2">{cartItem.quantity}</span>
            <Button
              onClick={() =>
                updateCartItemQuantity(product.id, cartItem.quantity + 1)
              }
              variant="outline"
              size="icon"
            >
              +
            </Button>
          </div>
        ) : (
          <Button onClick={() => addToCart(product)} className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        )}
      </div>
    </motion.div>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton className="w-full h-48" />
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
}
