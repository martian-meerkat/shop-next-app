import apiClient from "../axios";
import { PRODUCT_ITEMS_LIMIT } from "@/constants/products";
import { type ProductsResponse } from "@/types/api";

export const ProductsAPI = {
  getProducts: async (
    limit: number = PRODUCT_ITEMS_LIMIT,
  ): Promise<ProductsResponse> => {
    const response = await apiClient.get("/products", {
      params: { limit },
    });
    return response.data;
  },
};

export default ProductsAPI;
