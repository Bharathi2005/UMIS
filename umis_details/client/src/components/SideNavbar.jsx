// src/components/SideNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`navbg text-xl text-white font-bold h-screen fixed top-0 left-0 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-64" // Adjusts position based on isOpen
      }`}
    >
      <div className="px-4">
        
        <ul className="mt-12 space-y-4 flex flex-col">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
              to="/family"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
              }
            >
              Family Details
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
          <li>
            <NavLink
              to="/submission"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-neutral-500" : "hover:bg-slate-400"}`
              }
            >
              Submission
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNavbar;
