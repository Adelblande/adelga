import { create } from "zustand";
import { ProductProps } from "@/components/Product";
import { FormAddressProps } from "@/components/FormAddress";
import { toast } from "react-toastify";

interface CartStoreProps {
  cart: ProductProps[];
  shippingAddress: FormAddressProps | null;
  addItem: (product: ProductProps) => void;
  removeItem: (id: string) => void;
  incrementQtdItem: (id: string) => void;
  decrementQtdItem: (id: string) => void;
  addShippingAddress: (data: FormAddressProps) => void;
}

export const useCartStore = create<CartStoreProps>()((set, get) => ({
  cart: [],
  shippingAddress: null,

  addItem: (product: ProductProps) => {
    const index = get().cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newQuatity = [...get().cart];
      newQuatity[index].quantity! += 1;
      set(() => ({ cart: [...newQuatity] }));
    } else {
      set((state) => ({ cart: [...state.cart, product] }));
    }
    toast.success(`${product.title} adcionado à sacola.`);
  },

  removeItem: (id: string) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  addShippingAddress: (data: FormAddressProps) => {
    set(() => ({ shippingAddress: data }));
    toast.success("Endereço confirmado.");
  },

  incrementQtdItem: (id: string) => {
    const index = get().cart.findIndex((item) => item.id === id);
    const newQuatity = [...get().cart];
    newQuatity[index].quantity! += 1;
    set(() => ({ cart: [...newQuatity] }));
  },

  decrementQtdItem: (id: string) => {
    const index = get().cart.findIndex((item) => item.id === id);
    const newQuatity = [...get().cart];
    if (newQuatity[index].quantity! > 1) {
      newQuatity[index].quantity! -= 1;
    }
    set(() => ({ cart: [...newQuatity] }));
  },
}));
