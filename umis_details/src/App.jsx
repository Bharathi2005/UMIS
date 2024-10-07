// App.js
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider, FormContext } from './context/FormContext'; // Import FormProvider and FormContext

import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import PersonalDetails from "./pages/Personal";
import EducationDetails from "./pages/Education";
import BankDetails from "./pages/Bank";
import Address from "./pages/Address";
import Certificates from "./pages/Certificates";
import Submission from "./pages/Submission";
import About from "./pages/About";

const App = () => {
  return (
    <FormProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <TopNavbar />
          <MainLayout />
        </div>
      </Router>
      <Submission/>
    </FormProvider>
  );
};

// New component for main layout
const MainLayout = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(FormContext); // Access sidebarOpen from context

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggle sidebar state
  };

  return (
    <div className="flex flex-row mt-16">
      <SideNavbar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent isOpen={sidebarOpen} /> {/* MainContent component to handle content */}
    </div>
  );
};

// New component for main content
const MainContent = ({ isOpen }) => {
  return (
    <div
      className={`flex-grow transition-all duration-300 p-8 ${
        isOpen ? "ml-64" : "mx-auto" // Adjust margin based on sidebar state
      }`}
    >
      <Routes>
        <Route path="/personal" element={<PersonalDetails />} />
        <Route path="/education" element={<EducationDetails />} />
        <Route path="/bank" element={<BankDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
