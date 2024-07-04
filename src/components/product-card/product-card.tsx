import styles from "./product-card.module.scss";

export const ProductCard = ({
  id,
  title,
  price,
  onClick,
}: {
  id: string;
  title: string;
  price: number;
  onClick?: Function;
}) => {
  return (
    <div className={styles["product-card"]}>
      <p className={styles["product-card__title"]}>{title}</p>

      <p className={styles["product-card__price"]}>${price}</p>

      {onClick ? (
        <div
          className={styles["product-card__button"]}
          onClick={() => {
            onClick({ id, title, price, onClick });
          }}
        >
          Add to cart
        </div>
      ) : null}
    </div>
  );
};
