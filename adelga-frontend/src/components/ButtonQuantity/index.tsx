"use client";

import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";
import { ProductProps } from "../Product";

import styles from "./button-quantity.module.css";
import { useCartStore } from "@/store/cart";

interface ButtonQuantityProps {
  quantity: number;
  product: ProductProps;
}

export function ButtonQuantity({ quantity, product }: ButtonQuantityProps) {
  const { incrementQtdItem, decrementQtdItem } = useCartStore();
  return (
    <div className={styles.boxButtonQuantity}>
      <button
        className={styles.button}
        onClick={() => decrementQtdItem(product.id)}
      >
        <Minus />
      </button>
      {quantity}
      <button
        className={styles.button}
        onClick={() => incrementQtdItem(product.id)}
      >
        <Plus />
      </button>
    </div>
  );
}
