import { create } from "zustand";

export const useShopStore = create<ShopStore>((set) => ({
  selectedCategory: null,
  allProducts: [],
  filteredProducts: [],
  setSelectedCategory: (category) =>
    set((state) => ({
      selectedCategory: category,
      filteredProducts: category
        ? state.allProducts.filter((product) => product.categoryId === category)
        : state.allProducts,
    })),
  setAllProducts: (products) =>
    set((state) => ({
      allProducts: products,
      filteredProducts: state.selectedCategory
        ? products.filter(
            (product) => product.categoryId === state.selectedCategory
          )
        : products,
    })),
}));
