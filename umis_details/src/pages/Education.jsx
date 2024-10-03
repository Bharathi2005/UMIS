import React from 'react';

const Education = () => {
  return (
    <div className="address details p-8">
      <span className="title" style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}>
        <strong className='text-2xl'>ACADEMIC DETAILS</strong>
      </span>

      <form className="fields grid-container">
        {/* Academic Year Of Joining */}
        <div className="input-field">
          <label htmlFor="year">Academic Year Of Joining</label>
          <input type="text" id="year" name="academic" required />
        </div>

        {/* EMIS Number */}
        <div className="input-field">
          <label>EMIS Number</label>
          <input type="text" name="emis" required />
        </div>

        {/* Registration Number */}
        <div className="input-field">
          <label>Registration Number</label>
          <input type="text" name="regno" required />
        </div>

        {/* Date Of Joining */}
        <div className="input-field">
          <label>Date Of Joining</label>
          <input type="date" name="joining" required />
        </div>

        {/* College Mail ID */}
        <div className="input-field">
          <label htmlFor="email">College Mail id</label>
          <input type="email" id="email" name="mail" required />
        </div>

        {/* Quota */}
        <div className="input-field">
          <label>Quota</label>
          <select name="quota" required>
            <option disabled selected>Select Quota</option>
            <option>MQ</option>
            <option>GQ</option>
            <option>GQ(7.5)</option>
          </select>
        </div>

        {/* First Graduate */}
        <div className="input-field">
          <label>First Graduate</label>
          <select name="first" required>
            <option>YES</option>
            <option>NO</option>
          </select>
        </div>

        {/* Special Admission */}
        <div className="input-field">
          <label>Special Admission</label>
          <select name="special" required>
            <option>YES</option>
            <option>NO</option>
          </select>
        </div>

        {/* Postmatric Scholarship */}
        <div className="input-field">
          <label>Postmatric Scholarship</label>
          <select name="mobile" required>
            <option>NO</option>
            <option>YES</option>
          </select>
        </div>

        {/* Hostel */}
        <div className="input-field">
          <label>Hostel</label>
          <select name="hostel" required>
            <option>YES</option>
            <option>NO</option>
          </select>
        </div>

        {/* Hostel Date Of Joining */}
        <div className="input-field">
          <label>Hostel Date Of Joining</label>
          <input type="date" name="hosteldate" required />
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
        .input-field input[type="email"],
        .input-field input[type="date"],
        .input-field select {
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Education;
