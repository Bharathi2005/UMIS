import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Submission = () => {
  const { formData } = useContext(FormContext);
  const { personalData, educationData, bankData, addressData } = formData;

  return (
    <div>
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

      {/* <h2>Document Uploads</h2>
      <div>
        <p>Community Certificate: {documents.communityCertificate ? documents.communityCertificate.name : "Not uploaded"}</p>
        <p>Income Certificate: {documents.incomeCertificate ? documents.incomeCertificate.name : "Not uploaded"}</p>
        <p>Tenth Marksheet: {documents.tenthMarksheet ? documents.tenthMarksheet.name : "Not uploaded"}</p>
        <p>Eleventh Marksheet: {documents.eleventhMarksheet ? documents.eleventhMarksheet.name : "Not uploaded"}</p>
        <p>Twelfth Marksheet: {documents.twelfthMarksheet ? documents.twelfthMarksheet.name : "Not uploaded"}</p>
        <p>Allotment Order: {documents.allotmentOrder ? documents.allotmentOrder.name : "Not uploaded"}</p>
        <p>Transfer Certificate: {documents.transferCertificate ? documents.transferCertificate.name : "Not uploaded"}</p>
        <p>First Graduate Certificate: {documents.firstGraduateCertificate ? documents.firstGraduateCertificate.name : "Not uploaded"}</p>
        <p>First Graduate Declaration: {documents.firstGraduateDeclaration ? documents.firstGraduateDeclaration.name : "Not uploaded"}</p>
        <p>Siblings Bonafide: {documents.siblingsBonafide ? documents.siblingsBonafide.name : "Not uploaded"}</p>
        <p>Bank Passbook: {documents.bankPassbook ? documents.bankPassbook.name : "Not uploaded"}</p>
        <p>Nativity Certificate: {documents.nativityCertificate ? documents.nativityCertificate.name : "Not uploaded"}</p>
        <p>Migration Certificate: {documents.migrationCertificate ? documents.migrationCertificate.name : "Not uploaded"}</p>
        <p>Aadhar Card: {documents.aadharCard ? documents.aadharCard.name : "Not uploaded"}</p>
        <p>Photo: {documents.photo ? documents.photo.name : "Not uploaded"}</p>
      </div> */}
    </div>
  );
};

export default Submission;
