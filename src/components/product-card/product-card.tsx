import styles from "./product-card.module.scss";

export const ProductCard = ({
  id,
  title,
  price,
  onClick,
  buttonLabel = "Add to cart",
}: {
  id: string;
  title: string;
  price: number;
  onClick?: Function;
  buttonLabel?: string;
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
          {buttonLabel}
        </div>
      ) : null}
    </div>
  );
};
