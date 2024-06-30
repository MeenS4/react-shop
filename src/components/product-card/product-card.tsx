import styles from "./product-card.module.scss";

export const ProductCard = ({
  title,
  price,
}: {
  title: string;
  price: number;
}) => {
  return (
    <div className={styles["product-card"]}>
      <p className={styles["product-card__title"]}>{title}</p>

      <p className={styles["product-card__price"]}>${price}</p>
    </div>
  );
};
