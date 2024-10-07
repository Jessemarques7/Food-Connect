import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import Inventario from "./pages/Inventario";
import Chat from "./pages/Chat";
import Registro from "./pages/Registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="chat" element={<Chat />} />
        <Route path="registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
