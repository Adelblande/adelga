import { ProductsStoreProps } from "@/store/products";
import { Product, ProductProps } from "../Product";
import styles from "./products.module.css";

export default function Products({ products }: ProductsStoreProps) {
  return (
    <div className={styles.container}>
      {products.map((product: ProductProps) => {
        return (
          <div key={product.id}>
            <Product {...product} />
          </div>
        );
      })}
    </div>
  );
}
