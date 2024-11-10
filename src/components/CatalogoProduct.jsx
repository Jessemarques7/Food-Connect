import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para navegação
import styles from "./CatalogoProduct.module.scss";

function CatalogoProduct({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1); // Controla a quantidade selecionada
  const [isClicked, setIsClicked] = useState(false); // Controla se o produto foi clicado
  const navigate = useNavigate(); // Hook de navegação do React Router

  const handleProductClick = () => {
    // Marca o produto como clicado para exibir a caixa de quantidade e o botão
    setIsClicked(true);
  };

  const handleAddToCart = () => {
    // Chama a função passada para adicionar ao carrinho
    onAddToCart(product, quantity);

    // Navega para a página de carrinho (Inventario) passando a quantidade selecionada
    navigate("/inventario", {
      state: { cartItem: { ...product, quantity } },
    });
  };

  return (
    <div className={styles.container} onClick={handleProductClick}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.quantidade}</p>
      <p>{product.description}</p>

      {isClicked && (
        <div>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
          <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>
      )}
    </div>
  );
}

export default CatalogoProduct;
