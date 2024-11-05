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
          <NavLink to={"/inventario"}>Carrinho</NavLink>
        </li>
        <li>
          <NavLink to={"/chat"}>Parceiros</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
