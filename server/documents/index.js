const PDFTemplate  = (data)=>{
  // Function to generate HTML template for the PDF
  console.log('Generating PDF template with data:', data ,typeof data);
  console.log('Data:', data?.employeeName, data?.employeeId, data?.designation, data?.department, data?.payslipNumber, data?.payPeriod, data?.basicSalary, data?.hra, data?.otherAllowances, data?.deductions, data?.netSalary);
return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Payslip</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    margin: 0;
    padding: 20px;
    background: #f3f4f6;
  }
  .payslip {
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .header {
    text-align: center;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .header h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #222;
  }
  .meta-table, .section-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .meta-table td {
    padding: 4px 0;
  }
  .section-title {
    background: #f1f5f9;
    padding: 8px;
    font-weight: bold;
    color: #444;
    border: 1px solid #e5e7eb;
  }
  .section-table th, .section-table td {
    border: 1px solid #e5e7eb;
    padding: 8px;
    text-align: left;
  }
  .section-table th {
    background: #f9fafb;
    color: #555;
  }
  .net-salary {
    text-align: right;
    font-size: 1.3rem;
    font-weight: bold;
    color: #059669;
    padding-top: 10px;
    border-top: 2px solid #eee;
  }
</style>
</head>
<body>
<div class="payslip">
  <div class="header">
    <h1>Salary Payslip</h1>
  </div>

  <table class="meta-table">
    <tr>
      <td><strong>Payslip No:</strong> ${data.payslipNumber}</td>
      <td><strong>Pay Period:</strong> ${data.payPeriod}</td>
    </tr>

    <tr>
      <td><strong>Name:</strong> ${data.employeeName}</td>
      <td><strong>Employee ID:</strong> ${data.employeeId}</td>
    </tr>
    <tr>
      <td><strong>Department:</strong> ${data.department}</td>
      <td><strong>Designation:</strong> ${data.designation}</td>
    </tr>
  </table>

  <div class="section-title">Earnings</div>
  <table class="section-table">
    <tr>
      <th>Description</th>
      <th>Amount (₹)</th>
    </tr>
    <tr>
      <td>Basic Salary</td>
      <td>${data.basicSalary}</td>
    </tr>
    <tr>
      <td>HRA</td>
      <td>${data.hra}</td>
    </tr>
    <tr>
      <td>Other Allowances</td>
      <td>${data.otherAllowances}</td>
    </tr>
  </table>

  <div class="section-title">Deductions</div>
  <table class="section-table">
    <tr>
      <th>Description</th>
      <th>Amount (₹)</th>
    </tr>
    <tr>
      <td>Total Deductions</td>
      <td>${data.deductions}</td>
    </tr>
  </table>

  <div class="net-salary">
    Net Salary: ₹${data.netSalary}
  </div>
</div>
</body>
</html>

`
  
}
export default PDFTemplate;