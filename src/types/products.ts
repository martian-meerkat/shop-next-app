export interface ProductsStore {
  products: Product[] | null;
  isLoading: boolean;
  error: string | null;
  fetchProducts: (limit: number) => Promise<void>;
}

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  onAddToCart?: (productId: number) => void;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
}
