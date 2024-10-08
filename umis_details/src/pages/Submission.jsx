import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import * as XLSX from "xlsx"; // For Excel export
import jsPDF from "jspdf"; // For PDF export

const Submission = () => {
  const { formData } = useContext(FormContext);
  const {
    personalData,
    educationData,
    bankData,
    addressData,
    certificateData,
  } = formData;

  const [format, setFormat] = React.useState("excel"); // Default format

  const handleDownload = () => {
    if (format === "excel") {
      exportToExcel();
    } else {
      exportToPDF();
    }
  };

  const exportToExcel = () => {
    const data = [
      {
        "Full Name": personalData.fullnames,
        Email: personalData.email,
        Salutation: personalData.salutation,
        "Date of Birth": personalData.dob,
        Gender: personalData.gender,
        "Blood Group": personalData.blood,
        Nationality: personalData.nationality,
        Religion: personalData.religion,
        Community: personalData.community,
        Caste: personalData.caste,
        Aadhar: personalData.aadhar,
        Mobile: personalData.mobile,
        Orphan: personalData.orphan,
      },
      {
        Academic: educationData.academic,
        EMIS: educationData.emis,
        "Registration Number": educationData.regno,
        "Joining Date": educationData.joining,
        Email: educationData.mail,
        Quota: educationData.quota,
        "First Name": educationData.first,
        Special: educationData.special,
        Scholarship: educationData.scholarship,
        Hostel: educationData.hostel,
        "Hostel Date": educationData.hosteldate,
      },
      {
        "Account Holder": bankData.accountHolder,
        "Bank Name": bankData.bankName,
        "Account Number": bankData.accountNumber,
        IFSC: bankData.ifsc,
        Branch: bankData.branch,
        "Account Type": bankData.accountType,
      },
      {
        "Current Address": addressData.currentAddress,
        "Permanent Address": addressData.permanentAddress,
        City: addressData.city,
        "Permanent City": addressData.permanentCity,
        State: addressData.state,
        "Permanent State": addressData.permanentState,
        "ZIP Code": addressData.zip,
        "Permanent ZIP Code": addressData.permanentZip,
      },
      {
        ...Object.fromEntries(
          Object.entries(certificateData).map(([key, value]) => [
            key.replace(/([A-Z])/g, " $1"),
            value ? value.name : "Not uploaded",
          ])
        ),
      },
    ];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Form Data");
    XLSX.writeFile(workbook, "form_data.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Submission Details", 10, 10);

    // Add Personal Details
    doc.setFontSize(14);
    doc.text("Personal Details:", 10, 20);
    doc.setFontSize(12);
    doc.text(`Full Name: ${personalData.fullnames}`, 10, 30);
    doc.text(`Email: ${personalData.email}`, 10, 40);
    doc.text(`Salutation: ${personalData.salutation}`, 10, 50);
    doc.text(`Date of Birth: ${personalData.dob}`, 10, 60);
    doc.text(`Gender: ${personalData.gender}`, 10, 70);
    doc.text(`Blood Group: ${personalData.blood}`, 10, 80);
    doc.text(`Nationality: ${personalData.nationality}`, 10, 90);
    doc.text(`Religion: ${personalData.religion}`, 10, 100);
    doc.text(`Community: ${personalData.community}`, 10, 110);
    doc.text(`Caste: ${personalData.caste}`, 10, 120);
    doc.text(`Aadhar: ${personalData.aadhar}`, 10, 130);
    doc.text(`Mobile: ${personalData.mobile}`, 10, 140);
    doc.text(`Orphan: ${personalData.orphan}`, 10, 150);

    // Add Education Details
    doc.addPage();
    doc.setFontSize(14);
    doc.text("Education Details:", 10, 20);
    doc.setFontSize(12);
    doc.text(`Academic: ${educationData.academic}`, 10, 30);
    doc.text(`EMIS: ${educationData.emis}`, 10, 40);
    doc.text(`Registration Number: ${educationData.regno}`, 10, 50);
    doc.text(`Joining Date: ${educationData.joining}`, 10, 60);
    doc.text(`Email: ${educationData.mail}`, 10, 70);
    doc.text(`Quota: ${educationData.quota}`, 10, 80);
    doc.text(`First Name: ${educationData.first}`, 10, 90);
    doc.text(`Special: ${educationData.special}`, 10, 100);
    doc.text(`Scholarship: ${educationData.scholarship}`, 10, 110);
    doc.text(`Hostel: ${educationData.hostel}`, 10, 120);
    doc.text(`Hostel Date: ${educationData.hosteldate}`, 10, 130);

    // Add Address Details
    doc.addPage();
    doc.setFontSize(14);
    doc.text("Address Details:", 10, 20);
    doc.setFontSize(12);
    doc.text(`Current Address: ${addressData.currentAddress}`, 10, 30);
    doc.text(`Permanent Address: ${addressData.permanentAddress}`, 10, 40);
    doc.text(`City: ${addressData.city}`, 10, 50);
    doc.text(`Permanent City: ${addressData.permanentCity}`, 10, 60);
    doc.text(`State: ${addressData.state}`, 10, 70);
    doc.text(`Permanent State: ${addressData.permanentState}`, 10, 80);
    doc.text(`ZIP Code: ${addressData.zip}`, 10, 90);
    doc.text(`Permanent ZIP Code: ${addressData.permanentZip}`, 10, 100);

    doc.save("form_data.pdf");
  };

  return (
    <>
    <br></br>
    <br></br>
    <div className="max-w-3xl my-8 mx-auto p-8 bg-gray-100 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-extrabold flex flex-row justify-center items-center mb-4">SUBMISSION DETAILS</h2>

     
<br></br>
      <h3 className="text-xl font-extrabold mb-2">Personal Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Full Name:</strong> {personalData.fullnames}</p>
        <p><strong>Email:</strong> {personalData.email}</p>
        <p><strong>Salutation:</strong> {personalData.salutation}</p>
        <p><strong>Date of Birth:</strong> {personalData.dob}</p>
        <p><strong>Gender:</strong> {personalData.gender}</p>
        <p><strong>Blood Group:</strong> {personalData.blood}</p>
        <p><strong>Nationality:</strong> {personalData.nationality}</p>
        <p><strong>Religion:</strong> {personalData.religion}</p>
        <p><strong>Community:</strong> {personalData.community}</p>
        <p><strong>Caste:</strong> {personalData.caste}</p>
        <p><strong>Aadhar:</strong> {personalData.aadhar}</p>
        <p><strong>Mobile:</strong> {personalData.mobile}</p>
        <p><strong>Orphan:</strong> {personalData.orphan}</p>
      </div>
        <br></br>
      <h3 className="text-xl font-extrabold mt-6 mb-2">Education Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Academic:</strong> {educationData.academic}</p>
        <p><strong>EMIS:</strong> {educationData.emis}</p>
        <p><strong>Registration Number:</strong> {educationData.regno}</p>
        <p><strong>Joining Date:</strong> {educationData.joining}</p>
        <p><strong>Email:</strong> {educationData.mail}</p>
        <p><strong>Quota:</strong> {educationData.quota}</p>
        <p><strong>First Name:</strong> {educationData.first}</p>
        <p><strong>Special:</strong> {educationData.special}</p>
        <p><strong>Scholarship:</strong> {educationData.scholarship}</p>
        <p><strong>Hostel:</strong> {educationData.hostel}</p>
        <p><strong>Hostel Date:</strong> {educationData.hosteldate}</p>
      </div>
        <br></br>
      <h3 className="text-xl font-extrabold mt-6 mb-2">Bank Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Account Holder:</strong> {bankData.accountHolder}</p>
        <p><strong>Bank Name:</strong> {bankData.bankName}</p>
        <p><strong>Account Number:</strong> {bankData.accountNumber}</p>
        <p><strong>IFSC:</strong> {bankData.ifsc}</p>
        <p><strong>Branch:</strong> {bankData.branch}</p>
        <p><strong>Account Type:</strong> {bankData.accountType}</p>
      </div>
    <br></br>
      <h3 className="text-xl font-extrabold mt-6 mb-2">Address Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Current Address:</strong> {addressData.currentAddress}</p>
        <p><strong>Permanent Address:</strong> {addressData.permanentAddress}</p>
        <p><strong>City:</strong> {addressData.city}</p>
        <p><strong>Permanent City:</strong> {addressData.permanentCity}</p>
        <p><strong>State:</strong> {addressData.state}</p>
        <p><strong>Permanent State:</strong> {addressData.permanentState}</p>
        <p><strong>ZIP Code:</strong> {addressData.zip}</p>
        <p><strong>Permanent ZIP Code:</strong> {addressData.permanentZip}</p>
      </div>
        <br></br>
      <h3 className="text-xl font-extrabold mt-6 mb-2">Certificate Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.keys(certificateData).map((key) => (
          <p key={key}>
            <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> 
            {certificateData[key] ? certificateData[key].name : "Not uploaded"}
          </p>
        ))}
      </div>
      <br></br>
      <br></br>
      <div className="mb-4">
        <label className="font-semibold mr-2">Export Format:</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="pdf">PDF</option>
          <option value="excel">Excel</option>
        </select>
        <button
          onClick={handleDownload}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download
        </button>
      </div>
    </div>
    </>
  );
};

export default Submission;
