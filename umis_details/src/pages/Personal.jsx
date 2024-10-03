import React from "react";

const Personal = () => {
  return (
    <div className="p-8">
      <div>
        <span className="title" style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}>
          <strong className="text-2xl">PERSONAL DETAILS</strong>
        </span>
        <div className="fields">
          <div className="grid-container">
            {/* Full Name */}
            <div className="input-field">
              <label htmlFor="fullnames">Full Name</label>
              <input type="text" required id="fullnames" name="fullnames" />
            </div>

            {/* Email */}
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            {/* Salutation */}
            <div className="input-field">
              <label>Salutation</label>
              <select name="salutation" required>
                <option disabled selected>Select Salutation</option>
                <option>Selvan</option>
                <option>Selvi</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div className="input-field">
              <label>Date of Birth</label>
              <input type="date" name="dob" required />
            </div>

            {/* Gender */}
            <div className="input-field">
              <label>Gender</label>
              <select name="gender" required>
                <option disabled selected>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            {/* Blood Group */}
            <div className="input-field">
              <label>Blood Group</label>
              <select name="blood" id="blood-group" required>
                <option disabled selected>Select Blood Group</option>
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
              <input type="text" name="nationality" required />
            </div>

            {/* Religion */}
            <div className="input-field">
              <label>Religion</label>
              <select name="religion">
                <option disabled selected>Select Religion</option>
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
              <select name="community" required>
                <option disabled selected>Select Community</option>
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
              <input type="text" name="caste" required />
            </div>

            {/* Aadhar Number */}
            <div className="input-field">
              <label htmlFor="aadhar">Aadhar Number</label>
              <input type="text" id="aadhar" name="aadhar" required />
            </div>

            {/* Mobile Number */}
            <div className="input-field">
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" id="mobile" name="mobile" required />
            </div>

            {/* Orphan */}
            <div className="input-field">
              <label>Orphan</label>
              <select name="orphan" required>
                <option disabled selected>Select Option</option>
                <option>YES</option>
                <option>NO</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .input-field {
          display: flex;
          flex-direction: column;
        }

        .input-field label {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .input-field input, .input-field select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default Personal;
