import { create } from "zustand";
import { ProductsAPI } from "@/lib/api/products";
import { isApiError } from "@/types/errors";
import { type ProductsStore } from "@/types/products";
import { PRODUCT_ITEMS_LIMIT } from "@/constants/products";

export const useProductsStore = create<ProductsStore>((set) => ({
  products: null,
  isLoading: false,
  error: null,

  fetchProducts: async (limit = PRODUCT_ITEMS_LIMIT) => {
    set({ isLoading: true, error: null });
    try {
      const response = await ProductsAPI.getProducts(limit);
      const data = response.products;
      set({ products: data, isLoading: false });
    } catch (error) {
      set({
        error: isApiError(error) ? error.message : "Failed to fetch products",
        isLoading: false,
      });
    }
  },
}));
