import CatalogoList from "../components/CatalogoList";
import SideMenu from "../components/SideMenu";
import styles from "./Catalogo.module.scss";

function Catalogo() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <section className={styles.container}>
        <CatalogoList />
      </section>
    </main>
  );
}

export default Catalogo;
