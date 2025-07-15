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
app.post('/create-pdf', (req, res) => {
  pdf.create(PDFTemplate(req.body), {}).toFile('/tmp/result.pdf', (err) => {
    if (err) {
      return res.status(500).send('Error generating PDF');
    }
    res.send('PDF created successfully');
  });
});

// GET: download PDF
app.get('/fetch-pdf', (req, res) => {
  res.sendFile('/tmp/result.pdf', (err) => {
    if (err) {
      console.error('Error downloading PDF:', err);
      res.status(500).send('Error downloading PDF');
    }
  });
});

module.exports = app;
