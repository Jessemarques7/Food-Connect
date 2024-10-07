import SideMenu from "../components/SideMenu";
import styles from "./Catalogo.module.scss";

function Catalogo() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <section className={styles.container}></section>
    </main>
  );
}

export default Catalogo;
