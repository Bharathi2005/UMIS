import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext'; // Import the FormContext

const Personal = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext); // Use context to get formData and setFormData

  const [formValues, setFormValues] = useState({
    fullnames: '',
    email: '',
    salutation: '',
    dob: '',
    gender: '',
    blood: '',
    nationality: '',
    religion: '',
    community: '',
    caste: '',
    aadhar: '',
    mobile: '',
    orphan: '',
  });

  // Load form data from context if available
  useEffect(() => {
    if (formData.personalData) {
      setFormValues(formData.personalData);
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
      personalData: formValues,
    }));
    navigate('/education');
  };

  return (
    <div className="instructions-container bg-gray-100 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto my-8">
      <div className="p-8">
        <form onSubmit={handleSaveAndContinue}>
          <div>
            <span className="title" style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}>
              <strong className="text-2xl">PERSONAL DETAILS</strong>
            </span>

            <div className="fields">
              <div className="grid-container">
                {/* Full Name */}
                <div className="input-field">
                  <label htmlFor="fullnames">Full Name</label>
                  <input
                    type="text"
                    required
                    id="fullnames"
                    name="fullnames"
                    value={formValues.fullnames}
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your full name')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Email */}
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter a valid email')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Salutation */}
                <div className="input-field">
                  <label>Salutation</label>
                  <select
                    name="salutation"
                    value={formValues.salutation}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please select a salutation')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  >
                    <option value="" disabled>
                      Select Salutation
                    </option>
                    <option>Selvan</option>
                    <option>Selvi</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div className="input-field">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formValues.dob}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please select your date of birth')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Gender */}
                <div className="input-field">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formValues.gender}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please select your gender')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>

                {/* Blood Group */}
                <div className="input-field">
                  <label>Blood Group</label>
                  <select
                    name="blood"
                    value={formValues.blood}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please select your blood group')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  >
                    <option value="" disabled>
                      Select Blood Group
                    </option>
                    <option value="A+ve">A+ve</option>
                    <option value="A1+ve">A1+ve</option>
                    <option value="B+ve">B+ve</option>
                    <option value="O+ve">O+ve</option>
                    <option value="AB+ve">AB+ve</option>
                    <option value="A-ve">A-ve</option>
                    <option value="B-ve">B-ve</option>
                    <option value="O-ve">O-ve</option>
                    <option value="AB-ve">AB-ve</option>
                  </select>
                </div>

                {/* Nationality */}
                <div className="input-field">
                  <label>Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formValues.nationality}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your nationality')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Religion */}
                <div className="input-field">
                  <label>Religion</label>
                  <select
                    name="religion"
                    value={formValues.religion}
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please select your religion')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  >
                    <option value="" disabled>
                      Select Religion
                    </option>
                    <option>Hindus</option>
                    <option>Muslims</option>
                    <option>Christians</option>
                    <option>Sikhism</option>
                    <option>Buddhism</option>
                    <option>Jainism</option>
                    <option>Zoroastrianism</option>
                    <option>Bahá'í Faith</option>
                    <option>Judaism</option>
                    <option>Tribal faiths</option>
                  </select>
                </div>

                {/* Community */}
                <div className="input-field">
                  <label>Community</label>
                  <select
                    name="community"
                    value={formValues.community}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please select your community')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  >
                    <option value="" disabled>
                      Select Community
                    </option>
                    <option value="OBC">OBC</option>
                    <option value="BC">BC</option>
                    <option value="MBC">MBC</option>
                    <option value="MBC/DNC">MBC/DNC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="BCM">BCM</option>
                  </select>
                </div>

                {/* Caste */}
                <div className="input-field">
                  <label>Caste</label>
                  <input
                    type="text"
                    name="caste"
                    value={formValues.caste}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your caste')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Aadhar Number */}
                <div className="input-field">
                  <label htmlFor="aadhar">Aadhar Number</label>
                  <input
                    type="text"
                    id="aadhar"
                    name="aadhar"
                    value={formValues.aadhar}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your Aadhar number')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Mobile Number */}
                <div className="input-field">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formValues.mobile}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please enter your mobile number')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                {/* Orphan */}
                <div className="input-field">
                  <label>Are you an orphan?</label>
                  <select
                    name="orphan"
                    value={formValues.orphan}
                    required
                    onChange={handleInputChange}
                    onInvalid={(e) => e.target.setCustomValidity('Please select if you are an orphan')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
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

export default Personal;
