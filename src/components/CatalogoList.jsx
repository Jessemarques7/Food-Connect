import CatalogoProduct from "./CatalogoProduct";
import styles from "./CatalogoList.module.scss";

export const InitialProducts = [
  {
    name: "Arroz",
    image: "/arroz.jpeg",
    quantidade: "1 kg",
    description: "Grão básico e nutritivo.",
  },
  {
    name: "Feijão",
    image: "/feijao.jpeg",
    quantidade: "500 g",
    description: "Fonte de proteína e fibras.",
  },
  {
    name: "Macarrão",
    image: "/macarrao.jpeg",
    quantidade: "500 g",
    description: "Versátil e fácil de armazenar.",
  },
  {
    name: "Leite em pó",
    image: "/leitepo.jpeg",
    quantidade: "400 g",
    description: "Fonte de cálcio e proteínas.",
  },
  {
    name: "Farinha",
    image: "/farinha.jpeg",
    quantidade: "200 g",
    description: "Fonte de fibras e fácil de armazenar.",
  },
  {
    name: "Biscoitos",
    image: "/biscoito.jpeg",
    quantidade: "300 g",
    description: "Lanche prático e energético.",
  },
];

function CatalogoList({ products = InitialProducts, onAddToCart }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <CatalogoProduct
          key={product.name}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default CatalogoList;
