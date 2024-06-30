import styles from "./app.module.scss";

import { ProductCard } from "./components";
import { Navbar } from "./sections/navbar";

export const App = () => {
  return (
    <main className={styles["app"]}>
      <Navbar />

      <div className={styles["app__products"]}>
        <ProductCard title="Hoodie" price={79.99} />

        <ProductCard title="T-shirt" price={19.99} />

        <ProductCard title="Sneakers" price={299.98} />
      </div>
    </main>
  );
};
