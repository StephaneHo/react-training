import { NavLink, useParams } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const params = useParams();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/events/${params.id}`}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events Detail
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/events/new`}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/events/${params.id}/edit`}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Edit Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;