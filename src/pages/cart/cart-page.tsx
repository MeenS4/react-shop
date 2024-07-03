import { useSelector } from "react-redux";
import styles from "./cart-page.module.scss";
import { selectCartItems } from "../../store/cartSlice";

export const CartPage = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <main className={styles["cart-page"]}>
      <h1>My Cart</h1>
      {cartItems}
    </main>
  );
};
