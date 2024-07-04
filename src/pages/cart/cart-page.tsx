import styles from "./cart-page.module.scss";

import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cartSlice";
import { Product } from "../../store/productSlice";
import { ProductCard } from "../../components";

export const CartPage = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <main className={styles["cart-page"]}>
      <h1>My Cart</h1>

      <div className={styles["cart-page__items"]}>
        {cartItems.map((product: Product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};
