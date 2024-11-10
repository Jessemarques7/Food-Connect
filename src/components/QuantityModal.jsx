import { useState } from "react";
import styles from "./QuantityModal.module.scss";

function QuantityModal({ item, onClose, onAddToCart, onAddAdditionalItem }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(item, quantity); // Adiciona ao carrinho principal
    onClose();
  };

  const handleAddAdditionalItem = () => {
    onAddAdditionalItem(item, quantity); // Adiciona ao carrinho adicional
    onClose();
  };

  return (
    <div className={styles.modal}>
      <h2>Adicionar {item.name} ao Carrinho</h2>
      <p>{item.description}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
      />
      <button onClick={handleAddToCart}>Adicionar ao Carrinho Principal</button>
      <button onClick={handleAddAdditionalItem}>Adicionar ao Carrinho Adicional</button>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}

export default QuantityModal;
