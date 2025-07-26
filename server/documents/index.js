

const PDFTemplate = ({
  employeeName,
  employeeId,
  designation,
  department,
  payslipNumber,
  payPeriod,
  basicSalary,
  hra,
  otherAllowances,
  deductions,
  netSalary,
}) => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        margin: 0,
        padding: 20,
        background: "#f3f4f6",
      }}
    >
      <div
        className="payslip"
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#fff",
          padding: 20,
          border: "1px solid #ddd",
          borderRadius: 8,
        }}
      >
        <div
          className="header"
          style={{
            textAlign: "center",
            borderBottom: "2px solid #eee",
            paddingBottom: 10,
            marginBottom: 20,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "1.5rem",
              color: "#222",
            }}
          >
            Salary Payslip
          </h1>
        </div>

        <table
          className="meta-table"
          style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}
        >
          <tbody>
            <tr>
              <td>
                <strong>Payslip No:</strong> {payslipNumber}
              </td>
              <td>
                <strong>Pay Period:</strong> {payPeriod}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Name:</strong> {employeeName}
              </td>
              <td>
                <strong>Employee ID:</strong> {employeeId}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Department:</strong> {department}
              </td>
              <td>
                <strong>Designation:</strong> {designation}
              </td>
            </tr>
          </tbody>
        </table>

        <div
          className="section-title"
          style={{
            background: "#f1f5f9",
            padding: 8,
            fontWeight: "bold",
            color: "#444",
            border: "1px solid #e5e7eb",
          }}
        >
          Earnings
        </div>
        <table
          className="section-table"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: 20,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #e5e7eb",
                  padding: 8,
                  background: "#f9fafb",
                  color: "#555",
                  textAlign: "left",
                }}
              >
                Description
              </th>
              <th
                style={{
                  border: "1px solid #e5e7eb",
                  padding: 8,
                  background: "#f9fafb",
                  color: "#555",
                  textAlign: "left",
                }}
              >
                Amount (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>Basic Salary</td>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>{basicSalary}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>HRA</td>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>{hra}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>Other Allowances</td>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>{otherAllowances}</td>
            </tr>
          </tbody>
        </table>

        <div
          className="section-title"
          style={{
            background: "#f1f5f9",
            padding: 8,
            fontWeight: "bold",
            color: "#444",
            border: "1px solid #e5e7eb",
          }}
        >
          Deductions
        </div>
        <table
          className="section-table"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: 20,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #e5e7eb",
                  padding: 8,
                  background: "#f9fafb",
                  color: "#555",
                  textAlign: "left",
                }}
              >
                Description
              </th>
              <th
                style={{
                  border: "1px solid #e5e7eb",
                  padding: 8,
                  background: "#f9fafb",
                  color: "#555",
                  textAlign: "left",
                }}
              >
                Amount (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>Total Deductions</td>
              <td style={{ border: "1px solid #e5e7eb", padding: 8 }}>{deductions}</td>
            </tr>
          </tbody>
        </table>

        <div
          className="net-salary"
          style={{
            textAlign: "right",
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#059669",
            paddingTop: 10,
            borderTop: "2px solid #eee",
          }}
        >
          Net Salary: ₹{netSalary}
        </div>
      </div>
    </div>
  );
};

export default PDFTemplate;
