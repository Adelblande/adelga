import { ProductProps } from "@/components/Product";
import { create } from "zustand";

export interface ProductsStoreProps {
  products: ProductProps[];
}

export const useProductsStore = create<ProductsStoreProps>()((set, get) => ({
  products: [],
}));
