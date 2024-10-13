// src/context/FormContext.jsx
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalData: {},
    educationData: {},
    familyData:{},
    bankData: {},
    addressData: {},
    certificateData: {},
  });

  const [sidebarOpen, setSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggle sidebar open state
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, sidebarOpen, toggleSidebar }}>
      {children}
    </FormContext.Provider>
  );
};
