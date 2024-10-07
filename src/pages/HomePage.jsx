import { NavLink } from "react-router-dom";
import styles from "./Homepage.module.scss";

function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Food Connect</h1>
      <NavLink to={"catalogo"}>
        <button>Começar &rarr;</button>
      </NavLink>
    </main>
  );
}

export default HomePage;
