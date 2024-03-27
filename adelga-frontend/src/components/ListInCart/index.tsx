"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { useCartStore } from "@/store/cart";
import { Trash } from "@phosphor-icons/react/dist/ssr";

import { formatPrice } from "../../utils/formatPrice";
import styles from "./list-in-cart.module.css";
import { ButtonQuantity } from "../ButtonQuantity";

export function ListInCart() {
  const { cart, removeItem, shippingAddress } = useCartStore();

  console.log("list-->", cart);
  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);
  }, [cart]);

  if (cart.length === 0) {
    return <p>Sua sacola esta vazia.</p>;
  }

  const handleNavigate = (e: Event) => {
    if (!shippingAddress) {
      e.preventDefault();
      toast.error("Confirme o endereço de entrega.");
    }
  };

  return (
    <>
      <div className={styles.boxItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.boxItem}>
            <Image src={item.url} width={100} height={100} alt="" />
            <div className={styles.boxTitle}>{item.title}</div>
            <div className={styles.boxQtd}>
              <ButtonQuantity quantity={item.quantity || 1} product={item} />
              {/* {item.quantity} */}
            </div>
            <div className={styles.boxSubtotal}>
              {formatPrice((item.quantity || 1) * item.price)}
            </div>
            <div className={styles.boxTrash}>
              <Trash
                size={25}
                color="#964b00"
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.subtotal}>
        <span>Total dos itens</span>
        <span>{formatPrice(totalItems)}</span>
      </div>
      <div className={styles.subtotal}>
        <span>Entrega</span>
        <span>{formatPrice(15)}</span>
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <span>{formatPrice(totalItems + 15)}</span>
      </div>
      <div className={styles.boxPayment}>
        <Link href="/">Continuar comprando</Link>
        <Link href="/payment" onClick={(e) => handleNavigate(e)}>
          Confirmar pedido
        </Link>
      </div>
    </>
  );
}
