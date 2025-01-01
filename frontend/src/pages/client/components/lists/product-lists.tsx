import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product: Recipe) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Recipe }) {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden">
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
        <p className="text-gray-600 dark:text-primary-foreground">
          {product.description}
        </p>
      </div>
    </div>
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
