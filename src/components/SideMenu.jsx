import { NavLink } from "react-router-dom";
import styles from "./SideMenu.module.scss";

function SideMenu() {
  return (
    <nav>
      <NavLink to={"/"}>
        <div className={styles.logo}>
          <img src="/Logo.png" alt="logo" />
        </div>
      </NavLink>

      <ul>
        <li>
          <NavLink to={"/catalogo"}>Catalogo</NavLink>
        </li>
        <li>
<<<<<<< HEAD
          <NavLink to={"/inventario"}>Inventario</NavLink>
=======
          <NavLink to={"/inventario"}>Carrinho</NavLink>
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
        </li>
        <li>
          <NavLink to={"/chat"}>Parceiros</NavLink>
        </li>
<<<<<<< HEAD
        <li>
          <NavLink to={"/sobre"}>Sobre</NavLink>
        </li>
=======
>>>>>>> 8a59b6378660fb1ba179961e62ac0be6cc579814
      </ul>
    </nav>
  );
}

export default SideMenu;
