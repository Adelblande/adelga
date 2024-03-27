import { ListInCart } from "@/components/ListInCart";
import styles from "./page.module.css";
import { FormAddress } from "@/components/FormAddress";
import { useCartStore } from "@/store/cart";

export default function Cart() {
  console.log(useCartStore.getState().cart);
  return (
    <div className={styles.container}>
      <div className={styles.boxAddress}>
        <FormAddress />
      </div>
      <div className={styles.boxItems}>
        <ListInCart />
      </div>
    </div>
  );
}
