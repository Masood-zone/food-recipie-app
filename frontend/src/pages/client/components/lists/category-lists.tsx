import { Skeleton } from "@/components/ui/skeleton";
import { useShopStore } from "@/store/use-shop-store";

export function CategoryList({ categories, isLoading }: CategoryListProps) {
  const { selectedCategory, setSelectedCategory } = useShopStore();

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="w-24 h-24 rounded-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories?.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`w-24 h-24 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 ${
            selectedCategory === category.id ? "ring-2 ring-blue-500" : ""
          }`}
        >
          <img
            src={category.image}
            alt={category.type}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
