import PDFTemplate from'../documents/index.js';
import pdf from 'html-pdf-node';
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
     return res.status(200).end();
    
  }
console.log('Received request to generate PDF:', req.method, req.body);
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const html = PDFTemplate(req.body); // Should return full HTML string
    const file = { content: html };
    const options = { format: 'A4' };
    const pdfBuffer =await pdf.generatePdf(file, options);
     res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=payslip.pdf');
    return res.status(200).send(pdfBuffer); // Send the PDF buffer as response

  } catch (err) {
    console.error('PDF generation error:', err);
    return res.status(500).send('Failed to generate PDF');
  }
}

