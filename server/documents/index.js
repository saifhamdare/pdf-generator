module.exports  = ({name,reciptId,price1,price2})=>{

const Today= new Date();
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Invoice</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f6f8;
      color: #333;
    }
    .invoice-box {
      max-width: 800px;
      margin: 40px auto;
      padding: 40px;
      border: 1px solid #eee;
      background: #fff;
      box-shadow: 0 0 10px rgba(0,0,0,0.15);
    }
    .invoice-box table {
      width: 100%;
      line-height: inherit;
      text-align: left;
      border-collapse: collapse;
    }
    .invoice-box table td {
      padding: 8px;
      vertical-align: top;
    }
    .invoice-box table tr.top table td {
      padding-bottom: 20px;
    }
    .invoice-box table tr.top table td.title {
      font-size: 45px;
      line-height: 45px;
      color: #333;
    }
    .invoice-box table tr.information table td {
      padding-bottom: 20px;
      font-size: 14px;
      color: #555;
    }
    .invoice-box table tr.heading td {
      background: #eee;
      border-bottom: 1px solid #ddd;
      font-weight: bold;
    }
    .invoice-box table tr.details td {
      padding-bottom: 10px;
    }
    .invoice-box table tr.item td{
      border-bottom: 1px solid #eee;
    }
    .invoice-box table tr.item.last td {
      border-bottom: none;
    }
    .invoice-box table tr.total td:nth-child(2) {
      border-top: 2px solid #eee;
      font-weight: bold;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #777;
      margin-top: 30px;
    }
    @media only screen and (max-width: 600px) {
      .invoice-box table tr.top table td {
        width: 100%;
        display: block;
        text-align: center;
      }
      .invoice-box table tr.information table td {
        width: 100%;
        display: block;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
      <tr class="top">
        <td colspan="2">
          <table>
            <tr>
              <td class="title">
                <!-- Optional logo -->
                <!-- <img src="logo.png" style="width:100%; max-width:150px;"> -->
                Invoice
              </td>
              <td style="text-align:right;">
                Invoice #: ${reciptId}<br>
                Created: ${Today.toLocaleDateString()}<br>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <tr class="information">
        <td colspan="2">
          <table>
            <tr>
              <td>
                <strong>Bill To:</strong><br>
                ${name}<br>
                <!-- Add address if you like -->
              </td>
              <td style="text-align:right;">
                <strong>Your Company Name</strong><br>
                123 Your Street<br>
                City, State ZIP
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <tr class="heading">
        <td>
          Payment Method
        </td>
        <td>
          Details
        </td>
      </tr>
      
      <tr class="details">
        <td>
          Credit Card
        </td>
        <td>
          **** **** **** 1234
        </td>
      </tr>
      
      <tr class="heading">
        <td>
          Item
        </td>
        <td>
          Price
        </td>
      </tr>
      
      <tr class="item">
        <td>
          Item 1
        </td>
        <td>
          $${price1}
        </td>
      </tr>
      
      <tr class="item">
        <td>
          Item 2
        </td>
        <td>
          $${price2}
        </td>
      </tr>
      
      <tr class="total">
        <td></td>
        <td>
          Total: $${(Number(price1) + Number(price2)).toFixed(2)}
        </td>
      </tr>
    </table>
    <div class="footer">
      Thank you for your business!
    </div>
  </div>
</body>
</html>

`
  
}