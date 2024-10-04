import React from "react";
import { useNavigate } from "react-router-dom";

const BankDetails = () => {
  const navigate = useNavigate();

  const handleSaveAndContinue = (e) => {
    e.preventDefault();
    // Perform any validation or save logic here if necessary
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select an account type")}
              onInput={(e) => e.target.setCustomValidity("")}
            >
              <option disabled selected>
                Select Account Type
              </option>
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
