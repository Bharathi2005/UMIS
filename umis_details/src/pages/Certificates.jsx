// src/components/Certificates.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext'; // Import the FormContext

const Certificates = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext); // Use context to get form data

  // Initialize form values from the context or set defaults
  const [formValues, setFormValues] = useState(formData.certificateData || {
    communityCertificate: null,
    incomeCertificate: null,
    tenthMarksheet: null,
    eleventhMarksheet: null,
    twelfthMarksheet: null,
    allotmentOrder: null,
    transferCertificate: null,
    firstGraduateCertificate: null,
    firstGraduateDeclaration: null,
    siblingsBonafide: null,
    bankPassbook: null,
    nativityCertificate: null,
    migrationCertificate: null,
    aadharCard: null,
    photo: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const updatedFormValues = { ...formValues, [name]: files[0] };
    setFormValues(updatedFormValues); // Update local form values
    setFormData({ ...formData, certificateData: updatedFormValues }); // Update context with certificate data
  };

  const handleSaveAndContinue = (e) => {
    e.preventDefault();
    navigate('/submission'); // Update the navigation as needed
  };

  return (
    <div className="certificates-container bg-gray-100 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto my-8">
      <div className="p-8">
        <form onSubmit={handleSaveAndContinue}>
          <div>
            <span className="title" style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}>
              <strong className="text-2xl">CERTIFICATES</strong>
            </span>

            <div className="fields">
              <div className="grid-container">
                {/* Each certificate field */}
                {[ 
                  { label: 'Community Certificate', name: 'communityCertificate' },
                  { label: 'Income Certificate', name: 'incomeCertificate' },
                  { label: '10th Marksheet', name: 'tenthMarksheet' },
                  { label: '11th Marksheet', name: 'eleventhMarksheet' },
                  { label: '12th Marksheet', name: 'twelfthMarksheet' },
                  { label: 'Allotment Order', name: 'allotmentOrder' },
                  { label: 'Transfer Certificate', name: 'transferCertificate' },
                  { label: 'First Graduate Certificate', name: 'firstGraduateCertificate' },
                  { label: 'First Graduate Declaration', name: 'firstGraduateDeclaration' },
                  { label: "Sibling's Bonafide (If 1st Graduate)", name: 'siblingsBonafide' },
                  { label: 'Bank Passbook', name: 'bankPassbook' },
                  { label: 'Nativity Certificate', name: 'nativityCertificate' },
                  { label: 'Migration Certificate', name: 'migrationCertificate' },
                  { label: 'Aadhar Card', name: 'aadharCard' },
                  { label: 'Photo', name: 'photo', accept: '.jpg, .jpeg, .png' },
                ].map((item, index) => (
                  <div key={index} className="input-field mb-4">
                    <label className="block mb-2 font-semibold">{item.label}</label>
                    <input
                      type="file"
                      accept={item.accept ? item.accept : '.pdf'} // Allow jpg/png for photo
                      name={item.name}
                      onChange={handleFileChange}
                      className="border p-2 rounded-md w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end items-end mt-4">
            <button type="submit" className="save-continue hover flex justify-end items-end">
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Certificates;
