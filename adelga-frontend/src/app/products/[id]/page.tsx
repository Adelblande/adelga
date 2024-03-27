// import { useProductsStore } from "@/store/products";
import { AddToCart } from "@/components/AddToCart";
import styles from "./page.module.css";
import { useProducts } from "@/hooks/products";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const { id } = params;
  const { getProduct } = useProducts();
  const product = await getProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.boxImage}>
        <Image
          src={product.url}
          fill
          // style={{ objectFit: "cover" }}
          // objectFit="cover"
          alt=""
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50hw"
        />
      </div>
      <div className={styles.boxDetails}>
        <h3>{product.title}</h3>
        <p>{formatPrice(product.price)}</p>
        <AddToCart value="COMPRAR" product={product} />
      </div>
    </div>
  );
}
