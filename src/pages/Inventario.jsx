import { useLocation } from "react-router-dom"; // Importa o hook para acessar o estado da navegação
import SideMenu from "../components/SideMenu";
import styles from "./Inventario.module.scss";

function Inventario() {
  const location = useLocation(); // Hook para acessar o estado passado via navegação
  const cartItem = location.state?.cartItem; // Acessa o produto e a quantidade do estado

  return (
    <main className={styles.main}>
      <SideMenu />
      <section className={styles.container}>
        <h1>Carrinho</h1>

        {/* Se o item foi adicionado ao carrinho, exibe-o */}
        {cartItem ? (
          <div className={styles.cartItem}>
            <h3>{cartItem.name}</h3>
            <p>Quantidade: {cartItem.quantity}</p>
            <img src={cartItem.image} alt={cartItem.name} />
            <p>{cartItem.description}</p>
          </div>
        ) : (
          <p>Nenhum item no carrinho.</p>
        )}
      </section>
    </main>
  );
}

export default Inventario;
