import styles from "./cart-page.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { ProductCard } from "../../components";
import { removeItemFromCartById, selectCartItems } from "../../store/cartSlice";
import { Product } from "../../store/productSlice";

export const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleItemRemove = (id: string) => {
    dispatch(removeItemFromCartById(id));
  };

  return (
    <main className={styles["cart-page"]}>
      <h1>My Cart</h1>

      <div className={styles["cart-page__items"]}>
        {cartItems.map((product: Product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            onClick={handleItemRemove}
            buttonLabel="Remove from cart"
          />
        ))}
      </div>
    </main>
  );
};
