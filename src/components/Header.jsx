import { ShoppingBasket, LogIn, UserPlus, Settings } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header({ cart }) {
  const totalItems = cart.length;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <h1>TJA Megastore</h1>
      </Link>
      
      {}
      <nav className={styles.navMenu}>
        <Link to="/login" className={styles.navLink}>
          <LogIn size={24} />
          <span>Login</span>
        </Link>
        <Link to="/register" className={styles.navLink}>
          <UserPlus size={24} />
          <span>Cadastro</span>
        </Link>
        <Link to="/admin/products" className={styles.navLink}>
          <Settings size={24} />
          <span>Admin</span>
        </Link>
      </nav>

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