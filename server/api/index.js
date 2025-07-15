const express = require('express');
const pdf = require('html-pdf');
const bodyParser = require('body-parser');
const PDFTemplate = require('../documents/index.js');

const app = express();

// CORS middleware for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST: create PDF
app.post('/generate-pdf', (req, res) => {
  const html = PDFTemplate(req.body);

  pdf.create(html, {}).toBuffer((err, buffer) => {
    if (err) {
      console.error('Error generating PDF:', err);
      return res.status(500).send('Error generating PDF');
    }

    // Set headers so the browser downloads it
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=payslip.pdf',
      'Content-Length': buffer.length
    });

    res.send(buffer);
  });
});

module.exports = app;
