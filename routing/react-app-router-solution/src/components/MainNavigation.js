import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Livres
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
