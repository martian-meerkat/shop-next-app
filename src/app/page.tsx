"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";
import { useProductsStore } from "@/store/productsStore";
import ProductCard from "@/components/ProductCard";
import Loader from "@/components/Loader";
import { ErrorNotification } from "@/components/ErrorNotification/ErrorNotification";
import { PRODUCT_ITEMS_LIMIT } from "@/constants/products";

export default function Home() {
  const { products, isLoading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts(PRODUCT_ITEMS_LIMIT);
  }, [fetchProducts]);

  if (isLoading && !products) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {products &&
        (products?.length === 0 && !error ? (
          <p className={styles.empty}>Товары не найдены</p>
        ) : (
          <>
            <h1 className={styles.title}>Latest products</h1>
            <div className={styles.productsGrid}>
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  price={product.price}
                  category={product.category}
                  image={product.thumbnail}
                />
              ))}
            </div>
          </>
        ))}

      {error && <ErrorNotification message={error} />}
    </div>
  );
}
