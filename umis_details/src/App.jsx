// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import PersonalDetails from "./pages/Personal";
import EducationDetails from "./pages/Education";
import BankDetails from "./pages/Bank";
import Address from "./pages/Address";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import { AlignJustify } from "lucide-react";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <TopNavbar />

        <div className="flex flex-row mt-16">
          {/* Conditional Rendering for Sidebar */}
          {isOpen && <SideNavbar toggleSidebar={toggleSidebar} />}

          <div
            className={`flex-grow transition-all duration-300 p-8 ${
              isOpen ? "ml-64" : "mx-auto"
            }`}
          >
            <button
              onClick={toggleSidebar}
              className="fixed top-10 left-4 z-50 bg-blue-600 text-white p-2 rounded-md focus:outline-none flex items-center gap-2"
            >
              <AlignJustify />
              <span>{isOpen ? "UMIS Details" : "UMIS Details"}</span>
            </button>

            <Routes>
              <Route path="/personal" element={<PersonalDetails />} />
              <Route path="/education" element={<EducationDetails />} />
              <Route path="/bank" element={<BankDetails />} />
              <Route path="/address" element={<Address />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
