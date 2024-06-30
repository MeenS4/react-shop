import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <section className={styles["navbar"]}>
      <p className={styles["navbar__logo"]}>React Online Shop</p>

      <p className={styles["navbar__cart"]}>[Future navigation to cart]</p>
    </section>
  );
};
