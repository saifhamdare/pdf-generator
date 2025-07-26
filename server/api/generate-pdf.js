import PayslipPDF from'../documents/index.js';
import { renderToStream } from '@react-pdf/renderer';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
     return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    // const html = PDFTemplate(req.body); // Should return full HTML string
     const stream = await renderToStream(<PayslipPDF data={req.body} />);
     res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=payslip.pdf');
    stream.pipe(res);
    // return res.status(200).send(pdfBuffer); // Send the PDF buffer as response

  } catch (err) {
    console.error('PDF generation error:', err);
    return res.status(500).send('Failed to generate PDF');
  }
}

