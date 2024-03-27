import Products from "@/components/Products";
import { useProducts } from "@/hooks/products";

export default async function Home() {
  const { getProducts } = useProducts();
  const products = await getProducts();

  return <Products products={products} />;
}
