import { ProductCard } from "../../components";
import { Navbar } from "../../sections";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <main className={styles["home-page"]}>
      <Navbar />

      <div className={styles["home-page__products"]}>
        <ProductCard title="Hoodie" price={79.99} onClick={() => {}} />

        <ProductCard title="T-shirt" price={19.99} onClick={() => {}} />

        <ProductCard title="Sneakers" price={299.98} onClick={() => {}} />
      </div>
    </main>
  );
};
