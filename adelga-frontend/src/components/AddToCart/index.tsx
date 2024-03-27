"use client";

import { useCartStore } from "@/store/cart";
import styles from "./add-to-cart.module.css";
import { Handbag } from "@phosphor-icons/react/dist/ssr";
import { ProductProps } from "../Product";

interface AddToCartProps {
  value: string;
  product: ProductProps;
}

export function AddToCart({ value, product }: AddToCartProps) {
  const { addItem } = useCartStore();

  const handleClick = async (product: ProductProps) => {
    product.quantity = 1;
    addItem(product);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => handleClick(product)}
    >
      <Handbag size={25} />
      {value}
    </button>
  );
}
