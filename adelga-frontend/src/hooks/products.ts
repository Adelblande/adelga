import { ProductProps } from "@/components/Product";

export const useProducts = () => {
  const getProducts = async (): Promise<ProductProps[]> => {
    const response = await fetch(`${process.env.BASE_URL}/products`, {
      next: {
        revalidate: 10,
      },
    });

    const responseData = await response.json();
    return responseData;
  };
  const getProduct = async (id: string): Promise<ProductProps> => {
    const response = await fetch(`${process.env.BASE_URL}/products/${id}`, {
      next: {
        revalidate: 10,
      },
    });

    const responseData = await response.json();
    return responseData;
  };

  return { getProducts, getProduct };
};
