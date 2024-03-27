import Image from "next/image";
import styles from "./product.module.css";
import { AddToCart } from "../AddToCart";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/utils/formatPrice";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  category: string;
  url: string;
  quantity?: number;
}

export function Product({ id, title, price, category, url }: ProductProps) {
  const product = {
    id,
    title,
    price,
    category,
    url,
    quantity: 1,
  };

  return (
    <div className={styles.boxItem}>
      <Link href={`/products/${id}`}>
        <div className={styles.boxImage}>
          <Image
            src={url}
            className={styles.image}
            alt=""
            width={140}
            height={140}
          />
        </div>
      </Link>
      <div className={styles.boxTitle}>
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
      </div>
      <AddToCart value="COMPRAR" product={product} />
    </div>
  );
}
