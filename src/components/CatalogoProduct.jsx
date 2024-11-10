import styles from "./CatalogoProduct.module.scss";

function CatalogoProduct({ product }) {
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.quantidade}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default CatalogoProduct;
