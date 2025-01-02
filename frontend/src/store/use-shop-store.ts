import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
type CartItem = Recipe & { quantity: number };

type ShopStore = {
  selectedCategory: number | null;
  allProducts: Recipe[];
  filteredProducts: Recipe[];
  cart: CartItem[];
  setSelectedCategory: (category: number | null) => void;
  setAllProducts: (products: Recipe[]) => void;
  addToCart: (product: Recipe) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

export const useShopStore = create(
  persist<ShopStore>(
    (set) => ({
      selectedCategory: null,
      allProducts: [],
      filteredProducts: [],
      cart: [],
      setSelectedCategory: (category) =>
        set((state) => ({
          selectedCategory: category,
          filteredProducts: category
            ? state.allProducts.filter(
                (product) => product.categoryId === category
              )
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
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            toast.success(`Updated ${product.title} quantity in cart`);
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            toast.success(`Added ${product.title} to cart`);
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateCartItemQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: Math.max(0, quantity) }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "shop-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
