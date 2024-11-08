import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import Inventario from "./pages/Inventario";
import Chat from "./pages/Chat";
import Registro from "./pages/Registro";
import Sobre from "./pages/sobre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="chat" element={<Chat />} />
        <Route path="registro" element={<Registro />} />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
