// src/components/Address.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../context/FormContext"; // Adjust the path if necessary

const InputField = ({ label, name, value, onChange, required, type = 'text' }) => (
  <div className="input-field">
    <label htmlFor={name} className="block font-medium mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="border border-gray-300 rounded px-3 py-2 w-full"
    />
  </div>
);

const Address = () => {
  const navigate = useNavigate();
  const [isSameAddress, setIsSameAddress] = useState(false);
  const { formData, setFormData } = useContext(FormContext); // Use context to get form data

  // Local state to manage the address data separately
  const [addressData, setAddressData] = useState(formData.addressData || {
    currentAddress: '',
    permanentAddress: '',
    city: '',
    permanentCity: '',
    state: '',
    permanentState: '',
    zip: '',
    permanentZip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedAddressData = { ...addressData, [name]: value };
    setAddressData(updatedAddressData); // Update local address data
    setFormData({ ...formData, addressData: updatedAddressData }); // Update context
  };

  const handleToggle = () => {
    setIsSameAddress(!isSameAddress);
    if (!isSameAddress) {
      setAddressData({
        ...addressData,
        permanentAddress: addressData.currentAddress,
        permanentCity: addressData.city,
        permanentState: addressData.state,
        permanentZip: addressData.zip,
      });
      setFormData({ ...formData, addressData: {
        ...addressData,
        permanentAddress: addressData.currentAddress,
        permanentCity: addressData.city,
        permanentState: addressData.state,
        permanentZip: addressData.zip,
      }});
    } else {
      setAddressData({
        ...addressData,
        permanentAddress: '',
        permanentCity: '',
        permanentState: '',
        permanentZip: '',
      });
      setFormData({ ...formData, addressData: {
        ...addressData,
        permanentAddress: '',
        permanentCity: '',
        permanentState: '',
        permanentZip: '',
      }});
    }
  };

  const handleSaveAndContinue = (e) => {
    e.preventDefault();
    navigate("/certificates"); // Navigate to the Certificates page
  };

  return (
    <div className="bg-gray-100 shadow-2xl rounded-lg p-6 max-w-lg mx-auto my-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Address Details</h2>
      <form onSubmit={handleSaveAndContinue} className="space-y-4">
        <InputField
          label="Current Address"
          name="currentAddress"
          value={addressData.currentAddress}
          onChange={handleChange}
          required
        />
        <InputField
          label="City"
          name="city"
          value={addressData.city}
          onChange={handleChange}
          required
        />
        <InputField
          label="State"
          name="state"
          value={addressData.state}
          onChange={handleChange}
          required
        />
        <InputField
          label="Zip Code"
          name="zip"
          value={addressData.zip}
          onChange={handleChange}
          required
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={isSameAddress}
            onChange={handleToggle}
          />
          <label>Permanent Address is the same as Current Address</label>
        </div>
        {!isSameAddress && (
          <>
            <InputField
              label="Permanent Address"
              name="permanentAddress"
              value={addressData.permanentAddress}
              onChange={handleChange}
              required
            />
            <InputField
              label="Permanent Address City"
              name="permanentCity"
              value={addressData.permanentCity}
              onChange={handleChange}
              required
            />
            <InputField
              label="Permanent Address State"
              name="permanentState"
              value={addressData.permanentState}
              onChange={handleChange}
              required
            />
            <InputField
              label="Permanent Address Zip Code"
              name="permanentZip"
              value={addressData.permanentZip}
              onChange={handleChange}
              required
            />
          </>
        )}
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
