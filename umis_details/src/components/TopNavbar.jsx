import React from "react";
import logo from "../assets/img/logo.png.png"; 

const TopNavbar = () => {
  return (
    <div className="bg-green-600 text-black p-4 flex items-center fixed top-0 w-full z-10">
      <div className="font-extrabold text-xl mr-auto ">
        UMIS DETAILS
      </div>
      <div className="flex items-center justify-center flex-grow gap-10">
        <img src={logo} alt="Logo" className="h-20 w20  " />
        {/* <img src={brandName} alt="Brand Name" className="h-10 mx-4" /> */}
        <div className="flex flex-col ">
        <div className=" text-black flex justify-center font-extrabold text-2xl">SRI SHAKTHI</div>
        <div className="font-extrabold text-black flex justify-center text-2xl"> INSTITUTE OF ENGINEERING AND TECHNOLOGY</div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
