// SideNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = ({ toggleSidebar }) => {
  return (
    <aside className="navbg text-xl text-white font-bold w-60 h-screen fixed top-25 left-0 transition-transform duration-300" onClick={toggleSidebar}>
      <ul className="mt-12 space-y-4 px-4 flex flex-col">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
            }
          >
            Instruction
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personal"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
            }
          >
            Personal Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
            }
          >
            Education Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bank"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
            }
          >
            Bank Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/address"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
            }
          >
            Address
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
            }
          >
            Certificates
          </NavLink>
        </li>
        <NavLink
            to="/submission"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
            }
          >
            Submission
          </NavLink>
      </ul>
    </aside>
  );
};

export default SideNavbar;
