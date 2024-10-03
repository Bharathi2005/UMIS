import React from 'react';

const FormInstructions = () => {
  return (
    <div className="instructions-container bg-gray-100 p-8 rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">General Instructions for Filling Out the Form</h2>

      <ul className="list-disc ml-8 text-lg text-gray-700">
        <li className="mb-4">
          <strong>Read Carefully:</strong> Before starting, read through all fields and instructions to understand what information is required.
        </li>
        <li className="mb-4">
          <strong>Mandatory Fields:</strong> All the fields are mandatory and must be filled out to proceed.
        </li>
        <li className="mb-4">
          <strong>Use Accurate Information:</strong> Provide correct and up-to-date information, as it will be used for official purposes. Ensure all entries match your government-issued documents.
        </li>
        <li className="mb-4">
          <strong>Format Requirements:</strong> Follow the specific format requirements for fields like dates (e.g., YYYY-MM-DD), phone numbers, and email addresses.
        </li>
        <li className="mb-4">
          <strong>Avoid Special Characters:</strong> Unless specified, avoid using special characters like #, @, or & in the form fields.
        </li>
        <li className="mb-4">
          <strong>Double-Check Before Submission:</strong> Review all your entries to ensure accuracy. Incorrect or incomplete information may delay processing.
        </li>
        <li className="mb-4">
          <strong>Save Your Progress:</strong> Use any "Save" or "Save and Continue" buttons frequently to prevent data loss.
        </li>
        <li className="mb-4">
          <strong>Error Messages:</strong> If an error message appears, read it carefully and correct the information as needed. Errors must be resolved before proceeding.
        </li>
        <li className="mb-4">
          <strong>Contact Support:</strong> If you encounter issues or need clarification, contact support for assistance.
        </li>
      </ul>
    </div>
  );
};

export default FormInstructions;
