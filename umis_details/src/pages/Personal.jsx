import React from "react";

const Personal = () => {
  return (
    <div className="p-8">
<div>
  <span className="title" style={{textAlign: 'center'}}><strong>PERSONAL DETAILS</strong></span>
  <br /><br />
  <div className="fields">
    <div className="input-field">
      <label htmlFor="fullnames">Full Name</label>
      <input type="text" required id="fullnames" name="fullnames" />
    </div>
    <div className="input-field">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="mail" onblur="validateForm()" required />
    </div>
    <div className="input-field">
      <label>Salutation</label>
      <select style={{backgroundColor: 'white'}} name="salutation" required>
        <option disabled selected>Select Salutation</option>
        <option>Selvan</option>
        <option>Selvi</option>
      </select>
    </div>
    <div className="input-field">
      <label>Date of Birth</label>
      <input type="date" name="dob" required />
    </div>
    <div className="input-field">
      <label>Gender</label>
      <select style={{backgroundColor: 'white'}} name="gender" required>
        <option disabled selected>Select gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
    </div>
    <div className="input-field">
      <label>Blood Group</label>
      <select style={{backgroundColor: 'white'}} name="blood" id="BLOOD GROUPS">
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
    <div className="text">
      <label>Nationality</label>
      <input type="text" name="nationality" required />
    </div>
    <div className="input-field">
      <label>Religion</label>
      <select style={{backgroundColor: 'white'}} name="religion">
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
        <option> Tribal faiths</option>
      </select>
    </div>
    <div className="input-field">
      <label>Community</label>
      <select style={{backgroundColor: 'white'}} name="community" required>
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
    <div className="input-field">
      <label>Caste</label>
      <input type="text" name="caste" required />
    </div>
    <div className="input-field">
      <label htmlFor="aadhar">Aadhar Number</label>
      <input type="text" id="aadhar" name="aadhar" onblur="validateForm2()" required />
    </div>
    <div className="input-field">
      <label htmlFor="mobile">Mobile Number</label>
      <input type="tel" id="mobile" name="mobile" onblur="validateForm1()" required />
    </div>
    <div className="input-field">
      <label>Orphan</label>
      <select style={{backgroundColor: 'white'}} name="orphan" required>
        <option>YES</option>
        <option>NO</option>
      </select>
    </div>
  </div>
  <br /><br /><br /><br /><br />
</div>

    </div>
  );
};

export default Personal;
