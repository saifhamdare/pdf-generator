
import express from 'express';
import puppeteer from 'puppeteer';
import bodyParser from 'body-parser';
import PDFTemplate from'../documents/index.js';

// Shared handler function
async function generatePdfHandler(req, res) {
  if (req.method === 'OPTIONS') {
     return res.status(200).end();
    
  }
console.log('Received request to generate PDF:', req.method, req.body);
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
   
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
   return  res.status(200).send(pdfBuffer);
  } catch (err) {
    console.error('PDF generation error:', err);
    return res.status(500).send('Failed to generate PDF');
  }
}

// 👉 Export handler for Vercel
export default generatePdfHandler;

// 👉 If running locally via `node api/generate-pdf.js`
if (import.meta.url === `file://${process.argv[1]}`) {
  const app = express();
  app.use(bodyParser.json());
  app.post('/generate-pdf', generatePdfHandler);

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Local server running at http://localhost:${PORT}/generate-pdf`);
  });
}
