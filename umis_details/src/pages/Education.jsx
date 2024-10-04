import React from "react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();

  const handleSaveAndContinue = (e) => {
    e.preventDefault();
    // You can perform any additional logic before navigation, if needed
    navigate("/bank");
  };

  return (
    <div className="instructions-container bg-gray-100 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto my-8">
      <div className="education-details p-8">
        <span className="title" style={{ textAlign: "center", display: "block", marginBottom: "20px" }}>
          <strong className="text-2xl">ACADEMIC DETAILS</strong>
        </span>

        <form className="fields grid-container" onSubmit={handleSaveAndContinue}>
          {/* Academic Year Of Joining */}
          <div className="input-field">
            <label htmlFor="year">Academic Year Of Joining</label>
            <input
              type="text"
              id="year"
              name="academic"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter the academic year of joining")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* EMIS Number */}
          <div className="input-field">
            <label>EMIS Number</label>
            <input
              type="text"
              name="emis"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter your EMIS number")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* Registration Number */}
          <div className="input-field">
            <label>Registration Number</label>
            <input
              type="text"
              name="regno"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter your registration number")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* Date Of Joining */}
          <div className="input-field">
            <label>Date Of Joining</label>
            <input
              type="date"
              name="joining"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select your date of joining")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* College Mail ID */}
          <div className="input-field">
            <label htmlFor="email">College Mail ID</label>
            <input
              type="email"
              id="email"
              name="mail"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter a valid college email ID")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          {/* Quota */}
          <div className="input-field">
            <label>Quota</label>
            <select
              name="quota"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select a quota")}
              onInput={(e) => e.target.setCustomValidity("")}
            >
              <option disabled selected>
                Select Quota
              </option>
              <option>MQ</option>
              <option>GQ</option>
              <option>GQ(7.5)</option>
            </select>
          </div>

          {/* First Graduate */}
          <div className="input-field">
            <label>First Graduate</label>
            <select
              name="first"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select if you are a first graduate")}
              onInput={(e) => e.target.setCustomValidity("")}
            >
              <option disabled selected>
                Select Option
              </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </div>

          {/* Special Admission */}
          <div className="input-field">
            <label>Special Admission</label>
            <select
              name="special"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select if you had special admission")}
              onInput={(e) => e.target.setCustomValidity("")}
            >
              <option disabled selected>
                Select Option
              </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </div>

          {/* Postmatric Scholarship */}
          <div className="input-field">
            <label>Postmatric Scholarship</label>
            <select
              name="scholarship"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select if you have a postmatric scholarship")}
              onInput={(e) => e.target.setCustomValidity("")}
            >
              <option disabled selected>
                Select Option
              </option>
              <option>NO</option>
              <option>YES</option>
            </select>
          </div>

          {/* Hostel */}
          <div className="input-field">
            <label>Hostel</label>
            <select
              name="hostel"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select if you require hostel accommodation")}
              onInput={(e) => e.target.setCustomValidity("")}
            >
              <option disabled selected>
                Select Option
              </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </div>

          {/* Hostel Date Of Joining */}
          <div className="input-field">
            <label>Hostel Date Of Joining</label>
            <input
              type="date"
              name="hosteldate"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please select your hostel date of joining")}
              onInput={(e) => e.target.setCustomValidity("")}
            />
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
          .input-field input[type="email"],
          .input-field input[type="date"],
          .input-field select {
            width: 100%;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Education;
