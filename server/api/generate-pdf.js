import PDFTemplate from'../documents/index.js';
// import pdf from 'html-pdf-node';
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
     return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const html = PDFTemplate(req.body); // Should return full HTML string
const browser = await puppeteer.launch({
   headless: true,
});
const page = await browser.newPage();
await page.setViewport({width: 1080, height: 1024});

await page.setContent(html)

    const pdfBuffer =await page.pdf({
  path: 'payslip.pdf',
  format: 'A4',
  margin: {
        top: "20px",
        left: "20px",
        right: "20px",
        bottom: "20px"
  }    
});
     res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=payslip.pdf');
    return res.status(200).send(pdfBuffer); // Send the PDF buffer as response

  } catch (err) {
    console.error('PDF generation error:', err);
    return res.status(500).send('Failed to generate PDF');
  }
}

