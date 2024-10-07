import styles from "./Product.module.scss";

function Product({ product }) {
  return (
    <li className={styles.container}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.quantidade}</p>
        <p>{product.description}</p>
      </div>
    </li>
  );
}

export default Product;
