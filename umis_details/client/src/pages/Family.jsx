import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext'; // Import the FormContext

const Family = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext); // Use context to get formData and setFormData

  const [formValues, setFormValues] = useState({
    fathername: '',
    fathermobile: '',
    fatheroccupation: '',
    annualincome: '',
    mothername: '',
    mothermobile: '',
    motheroccupation: '',
    gaurdianname: '',
    gaurdianmobile: '',
  });

  // Load form data from context if available
  useEffect(() => {
    if (formData.familyData) {
      setFormValues(formData.familyData);
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
      familyData: formValues,
    }));
    navigate('/bank');
  };

  return (
    <div className="instructions-container bg-gray-100 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto my-8">
      <div className="p-8">
        <form onSubmit={handleSaveAndContinue}>
          <div>
            <span className="title" style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}>
              <strong className="text-2xl">FAMILY DETAILS</strong>
            </span>

            <div className="fields">
              <div className="grid-container">
                
                <div className="input-field">
                  <label htmlFor="fathername">Father Name</label>
                  <input
                    type="text"
                    required
                    id="fathername"
                    name="fathername"
                    value={formValues.fathername}
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your full name')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Email */}
                <div className="input-field">
                  <label htmlFor="fathermobile">Father Mobile</label>
                  <input
                    type="tel"
                    id="fathermobile"
                    name="fathermobile"
                    value={formValues.fathermobile}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter a valid mobile number')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                <div className="input-field">
                  <label>Father Occupation</label>
                  <input
                    type="text"
                    name="fatheroccupation"
                    value={formValues.fatheroccupation}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter the occupation')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                
                <div className="input-field">
                  <label>Annual Income</label>
                  <input
                    type="number"
                    name="annualincome"
                    value={formValues.annualincome}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter annual income')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="mothername">Mother Name</label>
                  <input
                    type="text"
                    required
                    id="mothername"
                    name="mothername"
                    value={formValues.mothername}
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter full name')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Email */}
                <div className="input-field">
                  <label htmlFor="mothermobile">Mother Mobile</label>
                  <input
                    type="tel"
                    id="mothermobile"
                    name="mothermobile"
                    value={formValues.mothermobile}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter a valid mobile number')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                <div className="input-field">
                  <label>Mother Occupation</label>
                  <input
                    type="text"
                    name="motheroccupation"
                    value={formValues.motheroccupation}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter the occupation')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                
                <div className="input-field">
                  <label htmlFor="fathername">Gaurdian Name</label>
                  <input
                    type="text"
                    required
                    id="gaurdianname"
                    name="gaurdianname"
                    value={formValues.gaurdianname}
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter full name')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Email */}
                <div className="input-field">
                  <label htmlFor="gaurdianmobile">Gaurdian Mobile</label>
                  <input
                    type="tel"
                    id="gaurdianmobile"
                    name="gaurdianmobile"
                    value={formValues.gaurdianmobile}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter a valid mobile number')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>
                
              </div>
            </div>

            {/* Save and Continue Button */}
            <div className="flex justify-end items-end">
          <button type="submit" className="save-continue hover flex justify-end items-end">
            Save and Continue
          </button>
        </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Family;
