<<<<<<< HEAD
=======
import { Link } from "react-router-dom"; // Importando o Link
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
import styles from "./CatalogoProduct.module.scss";

function CatalogoProduct({ product }) {
  return (
<<<<<<< HEAD
    <div className={styles.container}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.quantidade}</p>
        <p>{product.description}</p>
      </div>
    </div>
=======
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
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
  );
}

export default CatalogoProduct;
