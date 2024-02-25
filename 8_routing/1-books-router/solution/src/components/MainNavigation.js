import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => (
  <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
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
            end
          >
            Livres
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books/books2"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Livres 2
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
