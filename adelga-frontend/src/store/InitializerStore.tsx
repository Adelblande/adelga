"use client";

import { ProductProps } from "@/components/Product";
import { useRef } from "react";
import { useCartStore } from "./cart";

interface InitializerStoreProps {
  cart: ProductProps[];
}

export function InitializerStore({ cart }: InitializerStoreProps) {
  const initializer = useRef(false);

  if (!initializer.current) {
    useCartStore.setState({ cart: cart ?? [] });
    initializer.current = true;
  }

  return null;
}
