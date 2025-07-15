import React from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';
import './App.css';

function App() {
  let baseURL = '';
  console.log('Current hostname:', window.location.hostname);
  if (window.location.hostname === 'localhost') {
    baseURL = 'http://localhost:5000';
  } else {
    baseURL = 'https://pdf-generator-backend.vercel.app';
  }
  
    const [formData, setFormData] = React.useState({
    employeeName: '',
    employeeId: '',
    designation: '',
    department: '',
    payslipNumber: '',
    payPeriod: '',
    basicSalary: '',
    hra: '',
    otherAllowances: '',
    deductions: '',
    netSalary: ''


  });
  const handleChange = ({target:{name, value}}) => {
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  
  
  };
const createAndDownPDF = () => {
  console.log('server url:', baseURL);
    axios.post( baseURL+'/generate-pdf', formData,{ responseType: 'blob' })
    .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        saveAs(blob, 'receipt.pdf');
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
     
  };


  return (
<div className="app">
  <div className="form-container">
    <h2 className="form-title">Payslip Generator</h2>
<div className="form-grid">
    <input
      type="text"
      name="employeeName"
      placeholder="Employee Name"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="text"
      name="employeeId"
      placeholder="Employee ID"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="text"
      name="designation"
      placeholder="Designation"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="text"
      name="department"
      placeholder="Department"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="text"
      name="payslipNumber"
      placeholder="Payslip Number"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="month"
      name="payPeriod"
      placeholder="Pay Period"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="number"
      name="basicSalary"
      placeholder="Basic Salary"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="number"
      name="hra"
      placeholder="HRA"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="number"
      name="otherAllowances"
      placeholder="Other Allowances"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="number"
      name="deductions"
      placeholder="Deductions"
      onChange={handleChange}
      className="input-field"
    />

    <input
      type="number"
      name="netSalary"
      placeholder="Net Salary"
      onChange={handleChange}
      className="input-field"
    />
</div>
    <button onClick={createAndDownPDF} className="submit-button">
      Download Payslip PDF
    </button>
  </div>
</div>


  );
}

export default App;
