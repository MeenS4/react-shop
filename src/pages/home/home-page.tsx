import { useDispatch } from "react-redux";
import { ProductCard } from "../../components";
import { Navbar } from "../../sections";
import styles from "./home-page.module.scss";
import { addProductToCart } from "../../store/cartSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  const handleProductAdd = (id: string) => {
    dispatch(addProductToCart(id));
  };

  return (
    <main className={styles["home-page"]}>
      <Navbar />

      <div className={styles["home-page__products"]}>
        <ProductCard
          id="0"
          title="Red Hoodie"
          price={79.99}
          onClick={handleProductAdd}
        />

        <ProductCard
          id="1"
          title="Black T-shirt"
          price={19.99}
          onClick={handleProductAdd}
        />

        <ProductCard
          id="2"
          title="Sneakers"
          price={299.98}
          onClick={handleProductAdd}
        />
      </div>
    </main>
  );
};
