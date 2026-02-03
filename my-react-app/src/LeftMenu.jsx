import { NavLink } from "react-router-dom";
import "./LeftMenu.css";

function LeftMenu() {
  return (
    <aside className="left-menu">
      <h3>🍽 Меню</h3>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "menu-btn active" : "menu-btn"
        }
      >
        🍔 Fast Food
      </NavLink>

      <NavLink
        to="/sushi"
        className={({ isActive }) =>
          isActive ? "menu-btn active sushi" : "menu-btn sushi"
        }
      >
        🍣 Sushi
      </NavLink>
    </aside>
  );
}

export default LeftMenu;
