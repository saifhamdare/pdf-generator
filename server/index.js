const express   = require('express');
// const pdf      = require('html-pdf');
const puppeteer = require('puppeteer');
const cors     = require('cors');
const bodyParser      = require('body-parser');
const PDFTemplate = require('./documents/index.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Custom CORS middleware at the very top
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/generate-pdf', async (req, res) => {
  const html = PDFTemplate(req.body);

  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=payslip.pdf',
      'Content-Length': pdfBuffer.length,
    });
    res.send(pdfBuffer);
  } catch (error) {
    console.error('PDF generation failed:', error);
    res.status(500).send('Error generating PDF');
  }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;