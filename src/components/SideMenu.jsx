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
          <NavLink to={"/inventario"}>Inventario</NavLink>
        </li>
        <li>
          <NavLink to={"/chat"}>Parceiros</NavLink>
        </li>
        <li>
          <NavLink to={"/carrinho"}>Carrinho</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
