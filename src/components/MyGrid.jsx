import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header1} ${styles.gridAreaBase}`}>Header</header>
      <header className={`${styles.header2} ${styles.gridAreaBase}`}>Header</header>
      <aside className={`${styles.aside1} ${styles.gridAreaBase}`}>Aside</aside>
      <aside className={`${styles.aside2} ${styles.gridAreaBase}`}>Aside</aside>

      {}
      <div className={`${styles.grid} ${styles.gridAreaBase}`}>
        Main
      </div>

      <footer className={`${styles.footer2} ${styles.gridAreaBase}`}>Footer</footer>
      <footer className={`${styles.bottomFooter} ${styles.gridAreaBase}`}>Footer</footer>
    </div>
  );
}
