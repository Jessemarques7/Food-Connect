import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para navegação
import CatalogoList, { InitialProducts as catalogProducts } from "../components/CatalogoList";
import SideMenu from "../components/SideMenu";
import QuantityModal from "../components/QuantityModal";
import styles from "./Catalogo.module.scss";

function Catalogo() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]); // Carrinho principal
  const [additionalCart, setAdditionalCart] = useState([]); // Carrinho adicional

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product, quantity) => {
    // Adiciona o produto ao carrinho principal ou adicional
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddAdditionalItem = (product, quantity) => {
    // Adiciona o produto ao carrinho adicional
    setAdditionalCart((prevCart) => [...prevCart, { ...product, quantity }]);
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleGoToCart = () => {
    // Navega para o inventário com ambos os carrinhos de produtos
    navigate("/inventario", {
      state: {
        cartItems: cart,
        additionalItems: additionalCart,
      },
    });
  };

  return (
    <main className={styles.main}>
      <SideMenu />
      <section className={styles.container}>
        <CatalogoList
          products={catalogProducts}
          onItemClick={handleProductClick}
          onAddToCart={handleAddToCart}
          onAddAdditionalItem={handleAddAdditionalItem} // Passa a função para adicionar ao carrinho adicional
        />

        {isModalOpen && (
          <QuantityModal
            onClose={closeModal}
            onAddToCart={handleAddToCart}
            onAddAdditionalItem={handleAddAdditionalItem}
            item={selectedProduct}
          />
        )}
      </section>
    </main>
  );
}

export default Catalogo;
