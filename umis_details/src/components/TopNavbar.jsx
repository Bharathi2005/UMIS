// TopNavbar.js
import React, { useContext } from "react";
import logo from "../assets/img/logo.png.png"; 
import { FormContext } from '../context/FormContext'; // Import FormContext
import { AlignJustify } from "lucide-react"; // Import the AlignJustify icon

const TopNavbar = () => {
  const { toggleSidebar } = useContext(FormContext); // Access toggleSidebar from context

  return (
    <div className="navbg text-white p-4 flex items-center fixed top-0 w-full z-10">
      <button onClick={toggleSidebar} className="text-white mr-4 p-2 flex items-center rounded-lg bg-blue-400"> {/* Added flex for icon alignment */}
        <AlignJustify className="mr-2" /> {/* Add icon with margin */}
        UMIS DETAILS
      </button> {/* Toggle button for sidebar */}
      <div className="flex items-center justify-center flex-row flex-grow gap-10">
        <img src={logo} alt="Logo" className="h-20 w-20" />
        <div className="flex flex-col">
          <div className="text-white flex justify-center font-extrabold text-2xl">SRI SHAKTHI</div>
          <div className="font-extrabold text-white flex justify-center text-2xl">INSTITUTE OF ENGINEERING AND TECHNOLOGY</div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
