import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext"; // Import the FormContext

const BankDetails = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext); // Use context to get formData and setFormData

  const [formValues, setFormValues] = useState({
    accountHolder: '',
    bankName: '',
    accountNumber: '',
    ifsc: '',
    branch: '',
    accountType: ''
  });

  // Load form data from context if available
  useEffect(() => {
    if (formData.bankData) {
      setFormValues(formData.bankData);
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSaveAndContinue = (e) => {
    e.preventDefault();
    // Save the current form data to the context
    setFormData((prevData) => ({
      ...prevData,
      bankData: formValues,
    }));
    navigate("/address"); // Replace with the actual next page route
  };

  return (
    <div className="instructions-container bg-gray-100 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto my-8">
      <div className="bank-details p-8">
        <span className="title" style={{ textAlign: "center", display: "block", marginBottom: "20px" }}>
          <strong className="text-2xl">BANK DETAILS</strong>
        </span>

        <form className="fields grid-container" onSubmit={handleSaveAndContinue}>
          {/* Account Holder's Name */}
          <div className="input-field">
            <label htmlFor="accountHolder">Account Holder's Name</label>
            <input
              type="text"
              id="accountHolder"
              name="accountHolder"
              value={formValues.accountHolder}
              required
              onChange={handleInputChange}
              onInvalid={(e) => e.target.setCustomValidity("Please enter the account holder's name")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* Bank Name */}
          <div className="input-field">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formValues.bankName}
              required
              onChange={handleInputChange}
              onInvalid={(e) => e.target.setCustomValidity("Please enter the bank name")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* Account Number */}
          <div className="input-field">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formValues.accountNumber}
              required
              onChange={handleInputChange}
              onInvalid={(e) => e.target.setCustomValidity("Please enter your account number")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* IFSC Code */}
          <div className="input-field">
            <label htmlFor="ifsc">IFSC Code</label>
            <input
              type="text"
              id="ifsc"
              name="ifsc"
              value={formValues.ifsc}
              required
              onChange={handleInputChange}
              onInvalid={(e) => e.target.setCustomValidity("Please enter your IFSC code")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* Branch Name */}
          <div className="input-field">
            <label htmlFor="branch">Branch Name</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formValues.branch}
              required
              onChange={handleInputChange}
              onInvalid={(e) => e.target.setCustomValidity("Please enter your branch name")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* Account Type */}
          <div className="input-field">
            <label htmlFor="accountType">Account Type</label>
            <select
              id="accountType"
              name="accountType"
              value={formValues.accountType}
              required
              onChange={handleInputChange}
              onInvalid={(e) => e.target.setCustomValidity("Please select an account type")}
              onInput={(e) => e.target.setCustomValidity("")}
            >
              <option value="" disabled>Select Account Type</option>
              <option>Savings</option>
              <option>Current</option>
              <option>Fixed Deposit</option>
            </select>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="save-continue bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save and Continue
            </button>
          </div>
        </form>

        <style jsx>{`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 20px;
          }

          .input-field {
            display: flex;
            flex-direction: column;
          }

          .input-field label {
            font-weight: bold;
            margin-bottom: 5px;
          }

          .input-field input,
          .input-field select {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
          }

          .input-field input[type="text"],
          .input-field select {
            width: 100%;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BankDetails;
