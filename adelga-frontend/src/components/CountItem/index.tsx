"use client";

import { useCartStore } from "@/store/cart";
import styles from "./count-item.module.css";

export function CountItem() {
  const { cart } = useCartStore();
  return cart.length ? (
    <label className={styles.countItem}>{cart.length}</label>
  ) : null;
}
