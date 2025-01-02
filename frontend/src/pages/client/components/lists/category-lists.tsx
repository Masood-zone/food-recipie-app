import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
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
    <div className="mb-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-4 text-center"
      >
        Explore Our Categories
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories?.map((category) => (
          <motion.button
            onClick={() => setSelectedCategory(category.id)}
            className={`w-24 h-24 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform transform hover:scale-105 ${
              selectedCategory === category.id ? "ring-2 ring-primary" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={category.image}
              alt={category.type}
              className="w-full h-full object-cover"
            />
            {selectedCategory === category.id && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm font-medium text-blue-600"
              >
                {category.type}
              </motion.p>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
