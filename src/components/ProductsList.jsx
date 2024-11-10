import { useForm } from "react-hook-form";
import Modal from "./Modal";
import Product from "./Product";
import styles from "./ProductsList.module.scss";
import { useState } from "react";

const InitialProducts = [
  {
    name: "Arroz",
    image: "../src/assets/arroz.jpeg",
    quantidade: "1 kg",
    description: "Grão básico e nutritivo.",
  },
  {
    name: "Feijão",
    image: "../src/assets/feijao.jpeg",
    quantidade: "500 g",
    description: "Fonte de proteína e fibras.",
  },
  {
    name: "Macarrão",
    image: "../src/assets/macarrao.jpeg",
    quantidade: "500 g",
    description: "Versátil e fácil de armazenar.",
  },
  {
    name: "Leite em pó",
    image: "../src/assets/leitepo.jpeg",
    quantidade: "400 g",
    description: "Fonte de cálcio e proteínas.",
  },
  {
    name: "Farinha",
    image: "../src/assets/farinha.jpeg",
    quantidade: "200 g",
    description: "Fonte de fibras e fácil de armazenar.",
  },
  {
    name: "Biscoitos",
    image: "../src/assets/biscoito.jpeg",
    quantidade: "300 g",
    description: "Lanche prático e energético.",
  },
];

function ProductsList() {
  const { register, handleSubmit } = useForm();

  const [listaProdutos, setListaProduto] = useState(InitialProducts);
  //**Apagamos a função cadCliente */
  function inserirProduto(Produtos) {
    //**Apagamos o e.preventDefault */
    setListaProduto([...listaProdutos, Produtos]);
  }
  return (
    <ul className={styles.container}>
      <div className={styles.head}>
        <Modal>
          <Modal.Open opens="produto">
            <button className={styles.button}>Add produto</button>
          </Modal.Open>
          <Modal.Window name="produto">
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit(inserirProduto)}>
                <fieldset>
                  <legend>Dados do produto</legend>
                  <label>
                    Nome:
                    <input
                      className={styles.input}
                      type="text"
                      {...register("name")}
                    />
                  </label>
                  <label>
                    Quantidade:
                    <input
                      className={styles.input}
                      type="text"
                      {...register("quantidade")}
                    />
                  </label>
                  <label>
                    Descrição:
                    <input
                      className={styles.input}
                      type="text"
                      {...register("description")}
                    />
                  </label>
                  <label>
                    Imagem:
                    <input
                      className={styles.FileInput}
                      type="file"
                      id="image"
                      accept="image/*"
                      {...register("image")}
                    />
                  </label>
                  <div className={styles.bottom}>
                    <button className={styles.button} type="submit">
                      Adicionar
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </Modal.Window>
        </Modal>
      </div>
      {listaProdutos.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </ul>
  );
}

export default ProductsList;
