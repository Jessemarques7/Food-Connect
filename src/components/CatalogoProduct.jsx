import { Link } from "react-router-dom"; // Importando o Link
import styles from "./CatalogoProduct.module.scss";

function CatalogoProduct({ product }) {
  return (
    <Link to="/inventario" className={styles.linkContainer}> {/* Adicionando o Link aqui */}
      <div className={styles.container}>
        <img src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.quantidade}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CatalogoProduct;
