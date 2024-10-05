// Submission.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Submission = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { personalData, educationData, bankData, addressData, certificateData } = location.state || {};

  const handleSubmit = async () => {
    const submissionData = {
      personalData,
      educationData,
      bankData,
      addressData,
      certificateData,
    };

    // Example API endpoint (replace with your actual endpoint)
    const apiEndpoint = '/api/submit';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful submission
      const result = await response.json();
      console.log('Submission successful:', result);
      alert('Submission successful!');
      // Optionally, navigate to a success page or reset forms
      navigate('/');
    } catch (error) {
      console.error('There was a problem with the submission:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  // Check if any data is missing
  if (!personalData || !educationData || !bankData || !addressData || !certificateData) {
    return <div className="text-red-600 text-center mt-20">Some data is missing. Please complete the form.</div>;
  }

  return (
    <div className="submission-container bg-gray-100 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto my-8 mt-20">
      <h2 className="text-2xl text-center mb-4">Submission</h2>

      <div className="flex justify-between mt-6">
        <button onClick={() => window.history.back()} className="bg-blue-500 text-white px-4 py-2 rounded">Back</button>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Submission;
