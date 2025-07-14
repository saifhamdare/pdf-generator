const express   = require('express');
const pdf      = require('html-pdf');
const cors     = require('cors');
const bodyParser      = require('body-parser');
const PDFTemplate = require('./documents/index.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// post route to create PDF
app.post('/create-pdf', (req, res) => {
    pdf.create(PDFTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject()); 
            // res.status(500).send('Error generating PDF');
        }
         res.send(Promise.resolve('PDF created successfully'));
     
    });
})
// get route to download PDF
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`, (err) => {
        if (err) {
            console.error('Error downloading PDF:', err);
            res.status(500).send('Error downloading PDF');
        }
    });
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})