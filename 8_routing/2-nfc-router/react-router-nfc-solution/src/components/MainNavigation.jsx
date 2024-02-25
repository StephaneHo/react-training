import React from "react";
import { Link, NavLink } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <header>
      <ul className="my-20 flex justify-center">
        <li className="mx-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nfcs"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            }
          >
            NFCs
          </NavLink>{" "}
        </li>
      </ul>
    </header>
  );
};
