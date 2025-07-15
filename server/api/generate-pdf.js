const puppeteer = require('puppeteer');
const express = require('express');
const bodyParser = require('body-parser');
const PDFTemplate = require('../documents/index.js');

// Shared handler function
async function generatePdfHandler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const html = PDFTemplate(req.body);

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=payslip.pdf');
    res.status(200).send(pdfBuffer);
  } catch (err) {
    console.error('PDF generation error:', err);
    res.status(500).send('Failed to generate PDF');
  }
}

// 👉 Export handler for Vercel
module.exports = generatePdfHandler;

// 👉 If running locally via `node api/generate-pdf.js`
if (require.main === module) {
  const app = express();
  app.use(bodyParser.json());
  app.post('/generate-pdf', generatePdfHandler);

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Local server running at http://localhost:${PORT}/generate-pdf`);
  });
}
