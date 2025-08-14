import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header({ cart }) {
  const totalItems = cart.length;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <h1>TJA Megastore</h1>
      </Link>
      <Link to="/cart" className={styles.link}>
        <div className={styles.cartInfo}>
          <div className={styles.iconWrapper}>
            <ShoppingBasket size={32} />
            {totalItems > 0 && (
              <span className={styles.itemCount}>{totalItems}</span>
            )}
          </div>
          <p>
            Total: ${" "}
            {cart
              .reduce((total, product) => total + product.price, 0)
              .toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}