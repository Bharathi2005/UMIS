import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    currentAddress: '',
    permanentAddress: '',
    city: '',
    state: '',
    zip: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle function for the permanent address
  const handleToggle = () => {
    setIsSameAddress(!isSameAddress);
  };

  const handleSaveAndContinue = (e) => {
    e.preventDefault();
    // Perform any validation or save logic here if necessary
    navigate("/certificates"); // Navigate to the Bank Details page
  };

  return (
    <div className=" bg-gray-100  shadow-2xl rounded-lg p-6 max-w-lg mx-auto my-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Address Details</h2>
      <form onSubmit={handleSaveAndContinue} className="space-y-4">
        {/* Current Address */}
        <div className="input-field">
          <label htmlFor="currentAddress" className="block font-medium mb-1">
            Current Address
          </label>
          <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        {/* City */}
        <div className="input-field">
          <label htmlFor="city" className="block font-medium mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        {/* State */}
        <div className="input-field">
          <label htmlFor="state" className="block font-medium mb-1">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        {/* Zip Code */}
        <div className="input-field">
          <label htmlFor="zip" className="block font-medium mb-1">
            Zip Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        {/* Toggle for Same Address */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={isSameAddress}
            onChange={handleToggle}
          />
          <label>Permanent Address is different as Current Address</label>
        </div>

        {/* Permanent Address - Only shown when checkbox is checked */}
        {isSameAddress && (
          <>
            <div className="input-field">
              <label htmlFor="permanentAddress" className="block font-medium mb-1">
                Permanent Address
              </label>
              <input
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                value={formData.currentAddress} // Same as current address
                readOnly // Make it read-only since it should be the same
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            {/* Permanent Address City */}
            <div className="input-field">
              <label htmlFor="permanentCity" className="block font-medium mb-1">
                Permanent Address City
              </label>
              <input
                type="text"
                id="permanentCity"
                name="permanentCity"
                value={formData.city} // Same as current city
                readOnly // Make it read-only since it should be the same
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            {/* Permanent Address State */}
            <div className="input-field">
              <label htmlFor="permanentState" className="block font-medium mb-1">
                Permanent Address State
              </label>
              <input
                type="text"
                id="permanentState"
                name="permanentState"
                value={formData.state} // Same as current state
                readOnly // Make it read-only since it should be the same
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>

            {/* Permanent Address Zip Code */}
            <div className="input-field">
              <label htmlFor="permanentZip" className="block font-medium mb-1">
                Permanent Address Zip Code
              </label>
              <input
                type="text"
                id="permanentZip"
                name="permanentZip"
                value={formData.zip} // Same as current zip
                readOnly // Make it read-only since it should be the same
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
          </>
        )}

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
