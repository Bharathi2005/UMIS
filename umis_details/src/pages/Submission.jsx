// import React, { useContext } from 'react';
// import { FormContext } from '../context/FormContext';
// import * as XLSX from "xlsx";

// const Submission = () => {
// const { formData } = useContext(FormContext);
// console.log(formData);
// const { personalData, educationData, bankData, addressData, certificateData } = formData;

// const exportToExcel = () => {
// // Prepare data for Excel with headings
// const data = [
// {
// "Full Name": personalData.fullnames,
// "Email": personalData.email,
// "Salutation": personalData.salutation,
// "Date of Birth": personalData.dob,
// "Gender": personalData.gender,
// "Blood Group": personalData.blood,
// "Nationality": personalData.nationality,
// "Religion": personalData.religion,
// "Community": personalData.community,
// "Caste": personalData.caste,
// "Aadhar": personalData.aadhar,
// "Mobile": personalData.mobile,
// "Orphan": personalData.orphan,
// },
// {
// "Academic": educationData.academic,
// "EMIS": educationData.emis,
// "Registration Number": educationData.regno,
// "Joining Date": educationData.joining,
// "Email": educationData.mail,
// "Quota": educationData.quota,
// "First Name": educationData.first,
// "Special": educationData.special,
// "Scholarship": educationData.scholarship,
// "Hostel": educationData.hostel,
// "Hostel Date": educationData.hosteldate,
// },
// {
// "Account Holder": bankData.accountHolder,
// "Bank Name": bankData.bankName,
// "Account Number": bankData.accountNumber,
// "IFSC": bankData.ifsc,
// "Branch": bankData.branch,
// "Account Type": bankData.accountType,
// },
// {
// "Current Address": addressData.currentAddress,
// "Permanent Address": addressData.permanentAddress,
// "City": addressData.city,
// "Permanent City": addressData.permanentCity,
// "State": addressData.state,
// "Permanent State": addressData.permanentState,
// "ZIP Code": addressData.zip,
// "Permanent ZIP Code": addressData.permanentZip,
// },
// {
// // Assuming each certificate has a name property
// ...Object.fromEntries(
// Object.entries(certificateData).map(([key, value]) => [
// key.replace(/([A-Z])/g, ' $1'), // Format camelCase to spaced words
// value ? value.name : 'Not uploaded'
// ])
// ),
// }
// ];

// // Create a new workbook
// const workbook = XLSX.utils.book_new();

// // Convert JSON data to a worksheet
// const worksheet = XLSX.utils.json_to_sheet(data);

// // Append the worksheet to the workbook
// XLSX.utils.book_append_sheet(workbook, worksheet, 'Form Data');

// // Export the workbook as an Excel file
// XLSX.writeFile(workbook, 'form_data.xlsx');
// };

// return (
// <div>
// <div>
// <h2>Submission Details</h2>
// {/* Your existing code for displaying form data */}

// <button onClick={exportToExcel}>Export to Excel</button>
// </div>
// <div>
// <h2>Personal Details</h2>
// <div>
// <p>Full Name: {personalData.fullnames}</p>
// <p>Email: {personalData.email}</p>
// <p>Salutation: {personalData.salutation}</p>
// <p>Date of Birth: {personalData.dob}</p>
// <p>Gender: {personalData.gender}</p>
// <p>Blood Group: {personalData.blood}</p>
// <p>Nationality: {personalData.nationality}</p>
// <p>Religion: {personalData.religion}</p>
// <p>Community: {personalData.community}</p>
// <p>Caste: {personalData.caste}</p>
// <p>Aadhar: {personalData.aadhar}</p>
// <p>Mobile: {personalData.mobile}</p>
// <p>Orphan: {personalData.orphan}</p>
// </div>

// <h2>Education Details</h2>
// <div>
// <p>Academic: {educationData.academic}</p>
// <p>EMIS: {educationData.emis}</p>
// <p>Registration Number: {educationData.regno}</p>
// <p>Joining Date: {educationData.joining}</p>
// <p>Email: {educationData.mail}</p>
// <p>Quota: {educationData.quota}</p>
// <p>First Name: {educationData.first}</p>
// <p>Special: {educationData.special}</p>
// <p>Scholarship: {educationData.scholarship}</p>
// <p>Hostel: {educationData.hostel}</p>
// <p>Hostel Date: {educationData.hosteldate}</p>
// </div>

// <h2>Bank Details</h2>
// <div>
// <p>Account Holder: {bankData.accountHolder}</p>
// <p>Bank Name: {bankData.bankName}</p>
// <p>Account Number: {bankData.accountNumber}</p>
// <p>IFSC: {bankData.ifsc}</p>
// <p>Branch: {bankData.branch}</p>
// <p>Account Type: {bankData.accountType}</p>
// </div>

// <h2>Address Details</h2>
// <div>
// <p>Current Address: {addressData.currentAddress}</p>
// <p>Permanent Address: {addressData.permanentAddress}</p>
// <p>City: {addressData.city}</p>
// <p>Permanent City: {addressData.permanentCity}</p>
// <p>State: {addressData.state}</p>
// <p>Permanent State: {addressData.permanentState}</p>
// <p>ZIP Code: {addressData.zip}</p>
// <p>Permanent ZIP Code: {addressData.permanentZip}</p>
// </div>

// <h2>Document Uploads</h2>
// <div>
// <p>Community Certificate: {certificateData.communityCertificate ? certificateData.communityCertificate.name : "Not uploaded"}</p>
// <p>Income Certificate: {certificateData.incomeCertificate ? certificateData.incomeCertificate.name : "Not uploaded"}</p>
// <p>Tenth Marksheet: {certificateData.tenthMarksheet ? certificateData.tenthMarksheet.name : "Not uploaded"}</p>
// <p>Eleventh Marksheet: {certificateData.eleventhMarksheet ? certificateData.eleventhMarksheet.name : "Not uploaded"}</p>
// <p>Twelfth Marksheet: {certificateData.twelfthMarksheet ? certificateData.twelfthMarksheet.name : "Not uploaded"}</p>
// <p>Allotment Order: {certificateData.allotmentOrder ? certificateData.allotmentOrder.name : "Not uploaded"}</p>
// <p>Transfer Certificate: {certificateData.transferCertificate ? certificateData.transferCertificate.name : "Not uploaded"}</p>
// <p>First Graduate Certificate: {certificateData.firstGraduateCertificate ? certificateData.firstGraduateCertificate.name : "Not uploaded"}</p>
// <p>First Graduate Declaration: {certificateData.firstGraduateDeclaration ? certificateData.firstGraduateDeclaration.name : "Not uploaded"}</p>
// <p>Siblings Bonafide: {certificateData.siblingsBonafide ? certificateData.siblingsBonafide.name : "Not uploaded"}</p>
// <p>Bank Passbook: {certificateData.bankPassbook ? certificateData.bankPassbook.name : "Not uploaded"}</p>
// <p>Nativity Certificate: {certificateData.nativityCertificate ? certificateData.nativityCertificate.name : "Not uploaded"}</p>
// <p>Migration Certificate: {certificateData.migrationCertificate ? certificateData.migrationCertificate.name : "Not uploaded"}</p>
// <p>Aadhar Card: {certificateData.aadharCard ? certificateData.aadharCard.name : "Not uploaded"}</p>
// <p>Photo: {certificateData.photo ? certificateData.photo.name : "Not uploaded"}</p>
// </div>
// </div>
// </div>
// );
// };

// export default Submission;

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
 // Prepare data for Excel with headings
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
 key.replace(/([A-Z])/g, " $1"), // Format camelCase to spaced words
 value ? value.name : "Not uploaded",
 ])
 ),
 },
 ];

 // Create a new workbook
 const workbook = XLSX.utils.book_new();

 // Convert JSON data to a worksheet
 const worksheet = XLSX.utils.json_to_sheet(data);

 // Append the worksheet to the workbook
 XLSX.utils.book_append_sheet(workbook, worksheet, "Form Data");

 // Export the workbook as an Excel file
 XLSX.writeFile(workbook, "form_data.xlsx");
 };

 const exportToPDF = () => {
 const doc = new jsPDF();

 // Add title
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


 // Add more details similarly...

 // Add Bank Details
 doc.addPage();
 doc.setFontSize(14);
 doc.text("Bank Details:", 10, 20);

 doc.setFontSize(12);
 doc.text(`Account Holder: ${bankData.accountHolder}`, 10, 30);
 doc.text(`Bank Name: ${bankData.bankName}`, 10, 40);
 doc.text(`Account Number: ${bankData.accountNumber}`, 10, 50);
 doc.text(`IFSC: ${bankData.ifsc}`, 10, 60);
 doc.text(`Branch: ${bankData.branch}`, 10, 70);
 doc.text(`Account Type: ${bankData.accountType}`, 10, 80);

 // Add more details similarly...

 // Add more details similarly...

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

 // Add more details similarly...

 // Add Document Uploads
 doc.addPage();
 doc.setFontSize(14);
 doc.text("Document Uploads:", 10, 20);

 Object.entries(certificateData).forEach(([key, value], index) => {
 const certificateName = value ? value.name : "Not uploaded";
 doc.setFontSize(12);
 const yPosition = 30 + index * 10; // Adjust vertical position for each entry
 doc.text(
 `${key.replace(/([A-Z])/g, " $1")}: ${certificateName}`,
 10,
 yPosition
 );
 });

 // Save the PDF
 doc.save("form_data.pdf");
 };

 return (
 <div>
 <h2>Submission Details</h2>

 <select value={format} onChange={(e) => setFormat(e.target.value)}>
 <option value="pdf">PDF</option>
 <option value="excel">Excel</option>
 </select>

 <button onClick={handleDownload}>Download</button>

 <h2>Personal Details</h2>
 <div>
 <p>Full Name: {personalData.fullnames}</p>
 <p>Email: {personalData.email}</p>
 <p>Salutation: {personalData.salutation}</p>
 <p>Date of Birth: {personalData.dob}</p>
 <p>Gender: {personalData.gender}</p>
 <p>Blood Group: {personalData.blood}</p>
 <p>Nationality: {personalData.nationality}</p>
 <p>Religion: {personalData.religion}</p>
 <p>Community: {personalData.community}</p>
 <p>Caste: {personalData.caste}</p>
 <p>Aadhar: {personalData.aadhar}</p>
 <p>Mobile: {personalData.mobile}</p>
 <p>Orphan: {personalData.orphan}</p>
 </div>

 <h2>Education Details</h2>
 <div>
 <p>Academic: {educationData.academic}</p>
 <p>EMIS: {educationData.emis}</p>
 <p>Registration Number: {educationData.regno}</p>
 <p>Joining Date: {educationData.joining}</p>
 <p>Email: {educationData.mail}</p>
 <p>Quota: {educationData.quota}</p>
 <p>First Name: {educationData.first}</p>
 <p>Special: {educationData.special}</p>
 <p>Scholarship: {educationData.scholarship}</p>
 <p>Hostel: {educationData.hostel}</p>
 <p>Hostel Date: {educationData.hosteldate}</p>
 </div>

 <h2>Bank Details</h2>
 <div>
 <p>Account Holder: {bankData.accountHolder}</p>
 <p>Bank Name: {bankData.bankName}</p>
 <p>Account Number: {bankData.accountNumber}</p>
 <p>IFSC: {bankData.ifsc}</p>
 <p>Branch: {bankData.branch}</p>
 <p>Account Type: {bankData.accountType}</p>
 </div>

 <h2>Address Details</h2>
 <div>
 <p>Current Address: {addressData.currentAddress}</p>
 <p>Permanent Address: {addressData.permanentAddress}</p>
 <p>City: {addressData.city}</p>
 <p>Permanent City: {addressData.permanentCity}</p>
 <p>State: {addressData.state}</p>
 <p>Permanent State: {addressData.permanentState}</p>
 <p>ZIP Code: {addressData.zip}</p>
 <p>Permanent ZIP Code: {addressData.permanentZip}</p>
 </div>

 <h2>Document Uploads</h2>
 <div>
 <p>
 Community Certificate:{" "}
 {certificateData.communityCertificate
 ? certificateData.communityCertificate.name
 : "Not uploaded"}
 </p>
 <p>
 Income Certificate:{" "}
 {certificateData.incomeCertificate
 ? certificateData.incomeCertificate.name
 : "Not uploaded"}
 </p>
 <p>
 Tenth Marksheet:{" "}
 {certificateData.tenthMarksheet
 ? certificateData.tenthMarksheet.name
 : "Not uploaded"}
 </p>
 <p>
 Eleventh Marksheet:{" "}
 {certificateData.eleventhMarksheet
 ? certificateData.eleventhMarksheet.name
 : "Not uploaded"}
 </p>
 <p>
 Twelfth Marksheet:{" "}
 {certificateData.twelfthMarksheet
 ? certificateData.twelfthMarksheet.name
 : "Not uploaded"}
 </p>
 <p>
 Allotment Order:{" "}
 {certificateData.allotmentOrder
 ? certificateData.allotmentOrder.name
 : "Not uploaded"}
 </p>
 <p>
 Transfer Certificate:{" "}
 {certificateData.transferCertificate
 ? certificateData.transferCertificate.name
 : "Not uploaded"}
 </p>
 <p>
 First Graduate Certificate:{" "}
 {certificateData.firstGraduateCertificate
 ? certificateData.firstGraduateCertificate.name
 : "Not uploaded"}
 </p>
 <p>
 First Graduate Declaration:{" "}
 {certificateData.firstGraduateDeclaration
 ? certificateData.firstGraduateDeclaration.name
 : "Not uploaded"}
 </p>
 <p>
 Siblings Bonafide:{" "}
 {certificateData.siblingsBonafide
 ? certificateData.siblingsBonafide.name
 : "Not uploaded"}
 </p>
 <p>
 Bank Passbook:{" "}
 {certificateData.bankPassbook
 ? certificateData.bankPassbook.name
 : "Not uploaded"}
 </p>
 <p>
 Nativity Certificate:{" "}
 {certificateData.nativityCertificate
 ? certificateData.nativityCertificate.name
 : "Not uploaded"}
 </p>
 <p>
 Migration Certificate:{" "}
 {certificateData.migrationCertificate
 ? certificateData.migrationCertificate.name
 : "Not uploaded"}
 </p>
 <p>
 Aadhar Card:{" "}
 {certificateData.aadharCard
 ? certificateData.aadharCard.name
 : "Not uploaded"}
 </p>
 <p>
 Photo:{" "}
 {certificateData.photo ? certificateData.photo.name : "Not uploaded"}
 </p>
 </div>
 </div>
 );
};

export default Submission;