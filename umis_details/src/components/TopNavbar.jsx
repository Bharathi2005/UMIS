import React from "react";
import logo from "../assets/img/clglogo.jpg"; 
import brandName from "../assets/img/clgname.jpg";

const TopNavbar = () => {
  return (
    <div className="bg-green-600 text-black p-4 flex items-center fixed top-0 w-full z-10">
      <div className="font-bold text-lg mr-auto">
        UMIS DETAILS
      </div>
      <div className="flex items-center justify-center flex-grow">
        <img src={logo} alt="Logo" className="h-10" />
        <img src={brandName} alt="Brand Name" className="h-10 mx-4" />
      </div>
    </div>
  );
};

export default TopNavbar;
