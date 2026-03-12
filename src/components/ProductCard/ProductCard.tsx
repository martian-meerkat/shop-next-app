import { type FC } from "react";
import Image from "next/image";
import { useAuthStore } from "@/store/authStore";
import { type ProductCardProps } from "@/types/products";
import styles from "./ProductCard.module.scss";

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  category,
  image,
  onAddToCart,
}) => {
  const { user } = useAuthStore();

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} width={300} height={300} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.category}>{category}</p>
        <div className={styles.price}>${price.toFixed(2)}</div>
        {user && (
          <button
            onClick={onAddToCart ? () => onAddToCart(id) : undefined}
            className={styles.addToCartButton}
            aria-label="Add to cart"
          >
            <Image
              src="/svg/shopping-cart-outline-svgrepo-com.svg"
              alt="Add"
              width={20}
              height={20}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
