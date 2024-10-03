import React from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <aside className="bg-green-600 text-xl text-black font-bold w-60 h-screen fixed top-25">
      <ul className="mt-12 space-y-4 px-4 flex flex-col">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-yellow-400 text-black" : "hover:bg-white"}`
            }
          >
            Instruction
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personal"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-yellow-400 text-black" : "hover:bg-white"}`
            }
          >
            Personal Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-yellow-400 text-black" : "hover:bg-white"}`
            }
          >
            Education Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bank"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-yellow-400 text-black" : "hover:bg-white"}`
            }
          >
            Bank Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/address"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-yellow-400 text-black" : "hover:bg-white"}`
            }
          >
            Address
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-yellow-400 text-black" : "hover:bg-white"}`
            }
          >
            Certificates
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavbar;
