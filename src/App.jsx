import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import Inventario from "./pages/Inventario";
import Chat from "./pages/Chat";
import Registro from "./pages/Registro";
<<<<<<< HEAD
import Sobre from "./pages/sobre";
=======
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="chat" element={<Chat />} />
        <Route path="registro" element={<Registro />} />
<<<<<<< HEAD
        <Route path="sobre" element={<Sobre />} />
=======
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
      </Routes>
    </BrowserRouter>
  );
}

export default App;
