import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import PersonalDetails from "./pages/Personal";
import EducationDetails from "./pages/Education";
import BankDetails from "./pages/Bank";
import Address from "./pages/Address";
import Certificates from "./pages/Certificates";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <TopNavbar />

        <div className="flex flex-row mt-16">
          <SideNavbar />

          <div className="flex-grow ml-64 p-8">
            <Routes>
              <Route path="/personal" element={<PersonalDetails />} />
              <Route path="/education" element={<EducationDetails />} />
              <Route path="/bank" element={<BankDetails />} />
              <Route path="/address" element={<Address />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/about" element={<About />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
