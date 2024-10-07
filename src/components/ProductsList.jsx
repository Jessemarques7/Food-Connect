import Product from "./Product";
import styles from "./ProductsList.module.scss";

const InitialProducts = [
  {
    name: "Arroz",
    image: "../src/assets/food.jpeg",
    quantidade: "1 kg",
    description: "Grão básico e nutritivo.",
  },
  {
    name: "Feijão",
    image: "../src/assets/food.jpeg",
    quantidade: "500 g",
    description: "Fonte de proteína e fibras.",
  },
  {
    name: "Macarrão",
    image: "../src/assets/food.jpeg",
    quantidade: "500 g",
    description: "Versátil e fácil de armazenar.",
  },
  {
    name: "Leite em pó",
    image: "../src/assets/food.jpeg",
    quantidade: "400 g",
    description: "Fonte de cálcio e proteínas.",
  },
  {
    name: "Farinha",
    image: "../src/assets/food.jpeg",
    quantidade: "200 g",
    description: "Fonte de fibras e fácil de armazenar.",
  },
  {
    name: "Biscoitos",
    image: "../src/assets/food.jpeg",
    quantidade: "300 g",
    description: "Lanche prático e energético.",
  },
];

function ProductsList() {
  return (
    <ul className={styles.container}>
      {InitialProducts.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </ul>
  );
}

export default ProductsList;
