import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ProductsManagement } from "./components/ProductsManagement";

export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <>
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        
        {/* Adicionando as novas rotas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/products" element={<ProductsManagement />} />
      </Routes>
    </>
  );
}