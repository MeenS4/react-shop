import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <section className={styles["navbar"]}>
      <p className={styles["navbar__logo"]}>React Online Shop</p>

      <Link className={styles["navbar__cart"]} to={"/cart"}>
        Go To Cart
      </Link>
    </section>
  );
};
