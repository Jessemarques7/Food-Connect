import SideMenu from "../components/SideMenu";
import styles from "./Inventario.module.scss";
import ProductsList from "../components/ProductsList";

function Inventario() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <section className={styles.container}>
        <ProductsList />
      </section>
    </main>
  );
}

export default Inventario;
