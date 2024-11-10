import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import Inventario from "./pages/Inventario";
import Chat from "./pages/Chat";
import Registro from "./pages/Registro";

function App() {
  const [cart, setCart] = useState([]); // Estado global do carrinho

  // Função para adicionar produtos ao carrinho
  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalogo" element={<Catalogo onAddToCart={handleAddToCart} />} />
        <Route path="/inventario" element={<Inventario cart={cart} />} />
        <Route path="chat" element={<Chat />} />
        <Route path="registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
