import { useState } from "react";
import styles from "./ProductsManagement.module.css";

export function ProductsManagement() {
  const [products, setProducts] = useState([
    { id: 1, title: "Smartphone X", price: 1500, description: "Descrição do Smartphone X" },
    { id: 2, title: "Notebook Pro", price: 4500, description: "Descrição do Notebook Pro" },
  ]);

  const [formState, setFormState] = useState({
    id: null,
    title: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (formState.id) {
          setProducts((prevProducts) =>
              prevProducts.map((p) => (p.id === formState.id ? { ...p, ...formState } : p))
          );
      } else {
          const newProduct = { ...formState, id: Date.now() };
          setProducts((prevProducts) => [...prevProducts, newProduct]);
      }
      setFormState({ id: null, title: "", price: "", description: "" });
  };

  const handleRemove = (id) => {
    if (window.confirm("Tem certeza que deseja remover este produto?")) {
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (product) => {
    setFormState(product);
  };

  return (
    <div className={styles.container}>
      <h2>Gerenciamento de Produtos</h2>

      <div className={styles.formSection}>
        <h3>{formState.id ? "Editar Produto" : "Adicionar Produto"}</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formState.title}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formState.price}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.button}>
            {formState.id ? "Salvar Alterações" : "Adicionar"}
          </button>
          {formState.id && (
            <button
              type="button"
              onClick={() => setFormState({ id: null, title: "", price: "", description: "" })}
              className={styles.cancelButton}
            >
              Cancelar Edição
            </button>
          )}
        </form>
      </div>

      <div className={styles.listSection}>
        <h3>Lista de Produtos</h3>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <div className={styles.productInfo}>
                <p>
                  <strong>{product.title}</strong> - R$ {product.price}
                </p>
                <p>{product.description}</p>
              </div>
              <div className={styles.productActions}>
                <button onClick={() => handleEdit(product)} className={styles.editButton}>
                  Editar
                </button>
                <button onClick={() => handleRemove(product.id)} className={styles.removeButton}>
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}